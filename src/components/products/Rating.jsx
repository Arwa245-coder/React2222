import { useTranslation } from "react-i18next";

function Rating({ rating = 0 }) {
  const { i18n } = useTranslation();

  const rounded = Math.round(Number(rating));

  const label =
    i18n.language === "ar"
      ? `التقييم ${rating} من 5`
      : `Rating ${rating} out of 5`;

  return (
    <div
      aria-label={label}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 6
      }}
    >
      <span aria-hidden="true">
        {"★".repeat(rounded)}
        {"☆".repeat(5 - rounded)}
      </span>

      <span>
        {Number(rating).toFixed(1)}
      </span>
    </div>
  );
}

export default Rating;