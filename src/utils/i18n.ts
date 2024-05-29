import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import ptTranslation from './internationalization/pt-BR/pt.json';

const resources = {
  pt: {
    translation: ptTranslation,
  },
};

i18n.use(initReactI18next).init({
  resources,
  compatibilityJSON: 'v3',
  lng: 'pt',
  fallbackLng: 'pt',
  interpolation: {
    escapeValue: false,
  },
  debug: false,
});

export default i18n;
