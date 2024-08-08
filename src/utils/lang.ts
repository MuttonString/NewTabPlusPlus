import { i18n } from 'i18next';

const supportedLang = ['en', 'zh-Hans', 'zh-Hant', 'ja'];

/**
 * Set language of the page.
 * @param i18n i18n object.
 * @param lang Language code.
 */
export default function changeLang(i18n: i18n, lang: string | null) {
  lang = lang ? lang : 'default';
  localStorage.setItem('lang', lang ? lang : 'default');
  if (lang === 'default') {
    lang = navigator.language;
    if (/^en.*/.test(lang)) {
      lang = 'en';
    } else if (/^zh.*/.test(lang)) {
      if (lang === 'zh-HK' || lang === 'zh-TW') lang = 'zh-Hant';
      else lang = 'zh-Hans';
    } else if (/^ja.*/.test(lang)) {
      lang = 'ja';
    } else {
      lang = 'en';
    }
    if (!supportedLang.includes(lang)) lang = 'en';
  }
  const htmlEle = document.querySelector('html');
  htmlEle!.lang = lang;
  i18n.changeLanguage(lang);
}
