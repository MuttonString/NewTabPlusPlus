import { setThemeFunc } from '../App';
import { bgState } from '../layout/Main';

const lightStyle = {
  '--bg-color': 'rgba(232, 232, 237, 0.4)',
  '--bg-color-main': 'rgba(250, 250, 252, 0.8)',
};

const darkStyle = {
  '--bg-color': 'rgba(51, 51, 54, 0.4)',
  '--bg-color-main': 'rgba(22, 22, 23, 0.8)',
};

/**
 * Change theme to light mode or dark mode.
 * @param theme Name of the theme.
 * @param query Just query whether it's dark theme.
 * @returns Whether it should be dark theme.
 */
export default function changeTheme(theme: string | null, query = false) {
  theme = theme ? theme : 'default';
  let isDark: boolean;
  if (theme === 'default') {
    isDark = window.matchMedia('(prefers-color-scheme: dark').matches;
  } else {
    isDark = theme === 'dark';
  }
  if (!query) {
    localStorage.setItem('theme', theme);
    const isDarkenBg = isDark && localStorage.getItem('darken') === 'true';
    const [bg, setBg] = bgState;
    setBg({
      ...bg,
      backgroundBlendMode: isDarkenBg ? 'darken' : 'normal',
    });
    setThemeFunc(isDark);
  }
  const style = isDark ? darkStyle : lightStyle;
  for (const prop in style) {
    document.documentElement.style.setProperty(prop, (style as any)[prop]);
  }
  return isDark;
}
