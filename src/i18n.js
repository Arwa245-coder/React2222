import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      shop: "Shop",
      discover: "Discover our amazing products",

      categories: "Categories",
      all: "All",
      phones: "Phones",
      laptops: "Laptops",
      watches: "Watches",
      accessories: "Accessories",

      search: "Search products...",

      category: "Category",
      allCategories: "All categories",

      priceRange: "Price range",
      min: "Min",
      max: "Max",

      details: "Details",
      addToCart: "Add to Cart",

      stock: "Stock",
      outOfStock: "Out of stock",

      noProducts: "No products found.",
    },
  },

  ar: {
    translation: {
      shop: "المتجر",
      discover: "اكتشف منتجاتنا المميزة",

      categories: "التصنيفات",
      all: "الكل",
      phones: "هواتف",
      laptops: "لابتوبات",
      watches: "ساعات",
      accessories: "إكسسوارات",

      search: "ابحث عن المنتجات...",

      category: "التصنيف",
      allCategories: "كل التصنيفات",

      priceRange: "نطاق السعر",
      min: "من",
      max: "إلى",

      details: "التفاصيل",
      addToCart: "أضف إلى السلة",

      stock: "المخزون",
      outOfStock: "غير متوفر",

      noProducts: "لا توجد منتجات.",
    },
  },
};

const setDirection = (language) => {
  document.documentElement.dir =
    language === "ar" ? "rtl" : "ltr";

  document.documentElement.lang = language;
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  })
  .then(() => {
    setDirection(i18n.language);
  });

i18n.on("languageChanged", (language) => {
  setDirection(language);
});

export default i18n;