// path: edulearn/app/lib/i18n.js
import React from 'react';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import commonEn from "../locales/en/common.json";
import commonPt from "../locales/pt/common.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: commonEn },  // Altere 'common' para 'translation'
      pt: { translation: commonPt },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
