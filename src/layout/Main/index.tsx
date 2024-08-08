import { CSSProperties, Dispatch, SetStateAction, useState } from 'react';
import styles from './index.module.less';
import changeTheme from '/src/utils/theme';

const darkColor = ' rgba(0, 0, 0, 0.25)';
export let bgState: [CSSProperties, Dispatch<SetStateAction<CSSProperties>>];

export default () => {
  bgState = useState<CSSProperties>({
    background: `url(/bg.jpg)${darkColor}`,
    backgroundBlendMode:
      changeTheme(localStorage.getItem('theme'), true) &&
      localStorage.getItem('darken') === 'true'
        ? 'darken'
        : 'normal',
  });
  const [bg] = bgState;

  return (
    <div className={styles.main} style={bg}>
      <br></br>
      <h1>天地玄黃，宇宙洪荒。日月盈仄，辰宿列張。</h1>
    </div>
  );
};
