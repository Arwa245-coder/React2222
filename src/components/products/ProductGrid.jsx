import { useTranslation } from "react-i18next";
import ProductCard from "./ProductCard";

function ProductGrid({
  products = [],
  onViewDetails,
  onAddToCart
}) {
  const { t } = useTranslation();

  if (!products.length) {
    return (
      <div
        style={{
          padding: 30,
          textAlign: "center"
        }}
      >
        {t("noProducts")}
      </div>
    );
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fill, minmax(240px, 1fr))",
        gap: 20
      }}
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onViewDetails={onViewDetails}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}

export default ProductGrid;