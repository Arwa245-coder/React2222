import { useTranslation } from "react-i18next";

function CategoryList({
  categories = [],
  selectedCategory,
  onSelect,
}) {
  const { t } = useTranslation();

  return (
    <div
      style={{
        display: "flex",
        gap: "12px",
        flexWrap: "wrap",
      }}
    >
      {categories.map((category) => {
        const active =
          selectedCategory === category.value;

        return (
          <button
            key={category.value}
            onClick={() => onSelect(category.value)}
            style={{
              padding: "11px 22px",
              borderRadius: "25px",
              border: active
                ? "2px solid #183b35"
                : "1px solid #ddd",
              background: active
                ? "#183b35"
                : "white",
              color: active ? "white" : "#444",
              cursor: "pointer",
              fontSize: "15px",
              fontWeight: active ? "bold" : "normal",
              transition: "0.2s",
            }}
          >
            {t(category.key)}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryList;