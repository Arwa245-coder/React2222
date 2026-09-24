import { useTranslation } from "react-i18next";
import CategoryList from "../components/products/CategoryList";

const categories = [
  { value: "all", key: "all" },
  { value: "phones", key: "phones" },
  { value: "laptops", key: "laptops" },
  { value: "watches", key: "watches" },
  { value: "accessories", key: "accessories" }
];

function Categories({
  selectedCategory = "all",
  onSelect
}) {
  const { t, i18n } = useTranslation();

  return (
    <section>
      <h2
        style={{
          marginTop: 0,
          marginBottom: "18px",
          color: "#183b35",
          fontSize: "24px",
        }}
      >
        {t("categories")}
      </h2>

      <CategoryList
        categories={categories}
        selectedCategory={selectedCategory}
        onSelect={onSelect}
        language={i18n.language}
      />
    </section>
  );
}

export { categories };
export default Categories;