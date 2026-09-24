import { useTranslation } from "react-i18next";

function Filter({
  categories = [],
  selectedCategory = "all",
  onCategoryChange,
  minPrice = "",
  maxPrice = "",
  onMinPriceChange,
  onMaxPriceChange,
}) {
  const { t } = useTranslation();

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "25px",
        alignItems: "end",
      }}
    >
      {/* Category */}
      <label>
        <span
          style={{
            display: "block",
            marginBottom: "8px",
            color: "#183b35",
            fontWeight: "bold",
          }}
        >
          {t("category")}
        </span>

        <select
          value={selectedCategory}
          onChange={(event) =>
            onCategoryChange?.(event.target.value)
          }
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            background: "white",
            fontSize: "14px",
          }}
        >
          <option value="all">
            {t("allCategories")}
          </option>

          {categories
            .filter(
              (category) => category.value !== "all"
            )
            .map((category) => (
              <option
                key={category.value}
                value={category.value}
              >
                {t(category.key)}
              </option>
            ))}
        </select>
      </label>

      {/* Price */}
      <div>
        <span
          style={{
            display: "block",
            marginBottom: "8px",
            color: "#183b35",
            fontWeight: "bold",
          }}
        >
          {t("priceRange")}
        </span>

        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          {/* Min Price */}
          <input
            type="number"
            min="0"
            value={minPrice}
            onChange={(event) =>
              onMinPriceChange?.(event.target.value)
            }
            placeholder={t("min")}
            style={{
              width: "50%",
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #ddd",
              boxSizing: "border-box",
            }}
          />

          {/* Max Price */}
          <input
            type="number"
            min="0"
            value={maxPrice}
            onChange={(event) =>
              onMaxPriceChange?.(event.target.value)
            }
            placeholder={t("max")}
            style={{
              width: "50%",
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #ddd",
              boxSizing: "border-box",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Filter;