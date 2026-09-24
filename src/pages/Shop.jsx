import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import products from "../data/products";
import ProductGrid from "../components/products/ProductGrid";
import SearchBar from "../components/products/SearchBar";
import Filter from "../components/products/Filter";
import Categories, { categories } from "./Categories";
import LanguageSwitcher from "../components/language/LanguageSwitcher";

function Shop() {
  const { t, i18n } = useTranslation();

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState("all");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const language = i18n.language;

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const name =
        typeof product.name === "object"
          ? product.name[language]
          : product.name;

      const matchesSearch = String(name || "")
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        selectedCategory === "all" ||
        product.category.toLowerCase() ===
          selectedCategory.toLowerCase();

      const matchesMinPrice =
        minPrice === "" ||
        product.price >= Number(minPrice);

      const matchesMaxPrice =
        maxPrice === "" ||
        product.price <= Number(maxPrice);

      return (
        matchesSearch &&
        matchesCategory &&
        matchesMinPrice &&
        matchesMaxPrice
      );
    });
  }, [
    search,
    selectedCategory,
    language,
    minPrice,
    maxPrice,
  ]);

  return (
    <div
      dir={language === "ar" ? "rtl" : "ltr"}
      style={{
        minHeight: "100vh",
        padding: "40px 6%",
        fontFamily: "Arial, sans-serif",
        background:
          "linear-gradient(135deg, #eef6f3 0%, #f8f3e8 45%, #e8f0e9 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Decoration - Top Right */}
      <div
        style={{
          position: "absolute",
          width: "350px",
          height: "350px",
          background: "#d7e8df",
          borderRadius: "50%",
          top: "-140px",
          right: "-100px",
          opacity: 0.65,
          zIndex: 0,
        }}
      />

      {/* Background Decoration - Bottom Left */}
      <div
        style={{
          position: "absolute",
          width: "300px",
          height: "300px",
          background: "#eadfc8",
          borderRadius: "50%",
          bottom: "-130px",
          left: "-100px",
          opacity: 0.55,
          zIndex: 0,
        }}
      />

      {/* Background Decoration - Small Circle */}
      <div
        style={{
          position: "absolute",
          width: "120px",
          height: "120px",
          background: "#cfe1d8",
          borderRadius: "50%",
          top: "45%",
          right: "3%",
          opacity: 0.4,
          zIndex: 0,
        }}
      />

      {/* Main Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "30px",
          }}
        >
          <div>
            <h1
              style={{
                margin: 0,
                fontSize: "36px",
                color: "#183b35",
                fontWeight: "700",
              }}
            >
              {t("shop")}
            </h1>

            <p
              style={{
                color: "#65736f",
                marginTop: "8px",
                fontSize: "16px",
              }}
            >
              {t("discover")}
            </p>
          </div>

          {/* Language Switcher */}
          <LanguageSwitcher />
        </div>

        {/* Search */}
        <div
          style={{
            background: "rgba(255, 255, 255, 0.9)",
            padding: "20px",
            borderRadius: "16px",
            marginBottom: "25px",
            boxShadow:
              "0 5px 20px rgba(24, 59, 53, 0.08)",
            backdropFilter: "blur(8px)",
          }}
        >
          <SearchBar
            value={search}
            onChange={setSearch}
          />
        </div>

        {/* Categories */}
        <div
          style={{
            background: "rgba(255, 255, 255, 0.9)",
            padding: "25px",
            borderRadius: "16px",
            marginBottom: "25px",
            boxShadow:
              "0 5px 20px rgba(24, 59, 53, 0.08)",
            backdropFilter: "blur(8px)",
          }}
        >
          <Categories
            selectedCategory={selectedCategory}
            onSelect={setSelectedCategory}
          />
        </div>

        {/* Filter */}
        <div
          style={{
            marginBottom: "25px",
            background: "rgba(255, 255, 255, 0.65)",
            padding: "20px",
            borderRadius: "16px",
            boxShadow:
              "0 5px 20px rgba(24, 59, 53, 0.06)",
          }}
        >
          <Filter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            minPrice={minPrice}
            maxPrice={maxPrice}
            onMinPriceChange={setMinPrice}
            onMaxPriceChange={setMaxPrice}
          />
        </div>

        {/* Products */}
        <ProductGrid
          products={filteredProducts}
        />
      </div>
    </div>
  );
}

export default Shop;