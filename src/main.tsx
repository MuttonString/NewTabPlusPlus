import ReactDOM from 'react-dom/client';
import './main.css';
import App from './App.tsx';
import './utils/i18n';
import changeLang from './utils/lang.ts';
import i18n from './utils/i18n';
import changeTheme from './utils/theme.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
changeLang(i18n, localStorage.getItem('lang'));
window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', () => {
    if (localStorage.getItem('theme') === 'default') changeTheme(null);
  });
