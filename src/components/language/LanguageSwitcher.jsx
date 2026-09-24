import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = () => {
    const newLanguage =
      i18n.language === "en" ? "ar" : "en";

    i18n.changeLanguage(newLanguage);
  };

  return (
    <button
      type="button"
      onClick={changeLanguage}
      aria-label="Change language"
      style={{
        padding: "11px 20px",
        border: "none",
        borderRadius: "10px",
        background: "#183b35",
        color: "white",
        cursor: "pointer",
        fontSize: "14px",
        fontWeight: "bold",
        boxShadow:
          "0 4px 10px rgba(24, 59, 53, 0.2)",
      }}
    >
      {i18n.language === "en"
        ? "العربية"
        : "English"}
    </button>
  );
}

export default LanguageSwitcher;