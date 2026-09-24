import { useTranslation } from "react-i18next";

function SearchBar({ value = "", onChange }) {
  const { t } = useTranslation();

  return (
    <input
      type="search"
      value={value}
      onChange={(event) =>
        onChange?.(event.target.value)
      }
      placeholder={t("search")}
      aria-label={t("search")}
      style={{
        width: "100%",
        padding: "12px 14px",
        border: "1px solid #d1d5db",
        borderRadius: 10,
        boxSizing: "border-box",
      }}
    />
  );
}

export default SearchBar;