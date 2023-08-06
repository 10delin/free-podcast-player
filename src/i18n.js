import i18next from "i18next";

import translation_en from "./locales/en-GB/translation.json";
import translation_es from "./locales/es-ES/translation.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      translation: translation_en,
    },
    es: {
      translation: translation_es,
    },
  },
});

export default i18next;
