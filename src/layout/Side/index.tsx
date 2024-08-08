import {
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerHeaderTitle,
  Select,
  Switch,
  Tooltip,
} from '@fluentui/react-components';
import {
  DismissRegular,
  EditFilled,
  SettingsFilled,
} from '@fluentui/react-icons';
import { useTranslation } from 'react-i18next';
import styles from './index.module.less';
import { useState } from 'react';
import changeLang from '/src/utils/lang';
import changeTheme from '/src/utils/theme';
import { bgState } from '../Main';

export default () => {
  const { t, i18n } = useTranslation();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const [lang, setLang] = useState(localStorage.getItem('lang'));
  const [theme, setTheme] = useState(localStorage.getItem('theme'));
  const [darken, setDarken] = useState(
    localStorage.getItem('darken') === 'true'
  );
  const [blur, setBlur] = useState(localStorage.getItem('blur') !== 'false');

  const [btnStyle, setBtnStyle] = useState(
    blur ? styles['button-transparent'] : styles.button
  );
  const [drawerStyle, setDrawerStyle] = useState(
    blur ? styles['drawer-transparent'] : styles.drawer
  );
  function changeBlur(value: boolean) {
    localStorage.setItem('blur', String(value));
    setBtnStyle(value ? styles['button-transparent'] : styles.button);
    setDrawerStyle(value ? styles['drawer-transparent'] : styles.drawer);
  }

  const [bg, setBg] = bgState;
  function changeDarken(value: boolean) {
    localStorage.setItem('darken', String(value));
    setBg({
      ...bg,
      backgroundBlendMode:
        changeTheme(localStorage.getItem('theme'), true) && value
          ? 'darken'
          : 'normal',
    });
  }

  return (
    <div className={styles.side}>
      <Tooltip
        content={t('side.edit')}
        relationship='label'
        positioning='after'
      >
        <Button
          className={btnStyle}
          appearance='subtle'
          size='large'
          shape='circular'
          icon={<EditFilled />}
        />
      </Tooltip>
      <Tooltip
        content={t('side.settings')}
        relationship='label'
        positioning='after'
      >
        <Button
          className={btnStyle}
          appearance='subtle'
          size='large'
          shape='circular'
          icon={<SettingsFilled />}
          onClick={() => setIsSettingsOpen(true)}
        />
      </Tooltip>

      <Drawer
        className={drawerStyle}
        open={isSettingsOpen}
        position='end'
        onOpenChange={(_, { open }) => setIsSettingsOpen(open)}
      >
        <DrawerHeader>
          <DrawerHeaderTitle
            action={
              <Button
                appearance='subtle'
                icon={<DismissRegular />}
                onClick={() => setIsSettingsOpen(false)}
              />
            }
          >
            {t('side.settings')}
          </DrawerHeaderTitle>
        </DrawerHeader>
        <DrawerBody>
          <br />
          <label>{t('side.lang')}</label>
          <Select
            onChange={(_, data) => {
              setLang(data.value);
              changeLang(i18n, data.value);
            }}
            value={lang ? lang : 'default'}
          >
            <option value='default'>{t('side.default')}</option>
            <option value='en'>English ({t('lang.en')})</option>
            <option value='zh-Hans'>简体中文 ({t('lang.chs')})</option>
            <option value='zh-Hant'>繁體中文 ({t('lang.cht')})</option>
            <option value='ja'>日本語 ({t('lang.ja')})</option>
          </Select>
          <br />
          <label>{t('side.theme')}</label>
          <Select
            onChange={(_, data) => {
              setTheme(data.value);
              changeTheme(data.value);
            }}
            value={theme ? theme : 'default'}
          >
            <option value='default'>{t('side.default')}</option>
            <option value='light'>{t('side.light')}</option>
            <option value='dark'>{t('side.dark')}</option>
          </Select>
          <br />
          <Switch
            label={t('side.darken')}
            checked={darken}
            onChange={(_, data) => {
              setDarken(data.checked);
              changeDarken(data.checked);
            }}
          />
          <br />
          <Switch
            label={t('side.blur')}
            checked={blur}
            onChange={(_, data) => {
              setBlur(data.checked);
              changeBlur(data.checked);
            }}
          />
        </DrawerBody>
      </Drawer>
    </div>
  );
};
