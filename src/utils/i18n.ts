import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../lang/en.json';
import chs from '../lang/zh-Hans.json';
import cht from '../lang/zh-Hant.json';
import ja from '../lang/ja.json';

const resources = {
  en: {
    translation: en,
  },
  'zh-Hans': {
    translation: chs,
  },
  'zh-Hant': {
    translation: cht,
  },
  ja: {
    translation: ja,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: document.querySelector('html')!.lang,
});

export default i18n;
