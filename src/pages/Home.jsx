import ProductGrid from "./ProductGrid";
import Categories, { categories } from "./Categories";
import products from "./products";


function Home({
  language = "en",
  onSelectCategory,
  onViewDetails,
  onAddToCart
}) {
  const featuredProducts = products.slice(0, 4);

  return (
    <main
      dir={language === "ar" ? "rtl" : "ltr"}
      style={{ maxWidth: 1200, margin: "0 auto", padding: 24 }}
    >
      <section
        style={{
          padding: 50,
          borderRadius: 20,
          background: "#f3f4f6",
          marginBottom: 35
        }}
      >
        <h1>
          {language === "ar"
            ? "مرحبًا بك في متجرنا"
            : "Welcome to Our Store"}
        </h1>

        <p>
          {language === "ar"
            ? "اكتشف مجموعة من المنتجات المميزة."
            : "Discover our collection of quality products."}
        </p>
      </section>

      <section style={{ marginBottom: 35 }}>
        <Categories
          language={language}
          selectedCategory="all"
          onSelect={onSelectCategory}
        />
      </section>

      <section>
        <h2>
          {language === "ar" ? "منتجات مميزة" : "Featured Products"}
        </h2>

        <ProductGrid
          products={featuredProducts}
          language={language}
          onViewDetails={onViewDetails}
          onAddToCart={onAddToCart}
        />
      </section>
    </main>
  );
}

export default Home;
