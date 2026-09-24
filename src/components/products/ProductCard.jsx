import { useTranslation } from "react-i18next";
import Rating from "./Rating";

function ProductCard({
  product,
  onViewDetails,
  onAddToCart
}) {
  const { t, i18n } = useTranslation();

  const language = i18n.language;

  const name =
    product.name?.[language] ||
    product.name?.en ||
    product.name;

  const category =
    language === "ar"
      ? product.categoryAr || product.category
      : product.category;

  return (
    <article
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: 14,
        overflow: "hidden",
        background: "#fff",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <img
        src={product.image}
        alt={name}
        style={{
          width: "100%",
          height: 220,
          objectFit: "cover"
        }}
      />

      <div style={{ padding: 16 }}>
        <small style={{ color: "#6b7280" }}>
          {category}
        </small>

        <h3 style={{ margin: "8px 0" }}>
          {name}
        </h3>

        <Rating rating={product.rating} />

        <strong
          style={{
            display: "block",
            margin: "12px 0"
          }}
        >
          {product.price.toLocaleString()} EGP
        </strong>

        <small
          style={{
            color:
              product.stock > 0
                ? "#15803d"
                : "#b91c1c"
          }}
        >
          {product.stock > 0
            ? `${t("stock")}: ${product.stock}`
            : t("outOfStock")}
        </small>

        <div
          style={{
            display: "flex",
            gap: 8,
            marginTop: 14
          }}
        >
          <button
            type="button"
            onClick={() => onViewDetails?.(product)}
            style={{
              flex: 1,
              padding: 10,
              cursor: "pointer"
            }}
          >
            {t("details")}
          </button>

          <button
            type="button"
            disabled={product.stock <= 0}
            onClick={() => onAddToCart?.(product)}
            style={{
              flex: 1,
              padding: 10,
              cursor:
                product.stock <= 0
                  ? "not-allowed"
                  : "pointer"
            }}
          >
            {t("addToCart")}
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;