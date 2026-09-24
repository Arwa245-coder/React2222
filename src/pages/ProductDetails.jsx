import { useTranslation } from "react-i18next";
import Rating from "../components/products/Rating";

function ProductDetails({
  product,
  onBack,
  onAddToCart
}) {
  const { t, i18n } = useTranslation();

  const language = i18n.language;

  if (!product) {
    return (
      <main
        dir={language === "ar" ? "rtl" : "ltr"}
        style={{ padding: 30 }}
      >
        {t("productNotFound")}
      </main>
    );
  }

  const name =
    product.name?.[language] ||
    product.name?.en ||
    product.name;

  const description =
    product.description?.[language] ||
    product.description?.en ||
    product.description ||
    "";

  const category =
    language === "ar"
      ? product.categoryAr || product.category
      : product.category;

  return (
    <main
      dir={language === "ar" ? "rtl" : "ltr"}
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: 24
      }}
    >
      <button
        type="button"
        onClick={onBack}
        style={{
          padding: "9px 14px",
          marginBottom: 20,
          cursor: "pointer"
        }}
      >
        {language === "ar"
          ? "← رجوع"
          : "← Back"}
      </button>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 35
        }}
      >
        <img
          src={product.image}
          alt={name}
          style={{
            width: "100%",
            height: 450,
            objectFit: "cover",
            borderRadius: 16
          }}
        />

        <section>
          <small>{category}</small>

          <h1>{name}</h1>

          <Rating rating={product.rating} />

          <h2>
            {product.price.toLocaleString()} EGP
          </h2>

          <p style={{ lineHeight: 1.7 }}>
            {description}
          </p>

          <p>
            {t("stock")}: {product.stock}
          </p>

          <button
            type="button"
            disabled={product.stock <= 0}
            onClick={() => onAddToCart?.(product)}
            style={{
              padding: "12px 20px",
              cursor:
                product.stock <= 0
                  ? "not-allowed"
                  : "pointer",
              marginTop: 10
            }}
          >
            {t("addToCart")}
          </button>
        </section>
      </div>
    </main>
  );
}

export default ProductDetails;