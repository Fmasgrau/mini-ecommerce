import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./utils/translations";

i18n.use(LanguageDetector).init({
  resources: {
    en,
  },
  lng: "en",
  fallbackLng: "en",
  debug: false,
  ns: ["translations"],
  defaultNS: "translations",
  interpolation: {
    escapeValue: false,
    formatSeparator: ",",
  },
  react: {
    wait: true,
  },
});

export default i18n;
