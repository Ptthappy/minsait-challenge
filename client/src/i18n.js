import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resources from './translations'; // Importa los recursos de traducción

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es',
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;