import {
  FluentProvider,
  webDarkTheme,
  webLightTheme,
} from '@fluentui/react-components';
import Main from './layout/Main';
import Side from './layout/Side';
import { Dispatch, SetStateAction, useState } from 'react';
import changeTheme from './utils/theme';

export let setThemeFunc: Dispatch<SetStateAction<boolean>>;

function App() {
  const themeName = localStorage.getItem('theme');
  const [theme, setTheme] = useState(changeTheme(themeName, true));
  setThemeFunc = setTheme;

  return (
    <FluentProvider theme={theme ? webDarkTheme : webLightTheme}>
      <Main />
      <Side />
    </FluentProvider>
  );
}

export default App;
