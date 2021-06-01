import React, { useState, useCallback, useContext } from 'react';

const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};
// 创建一个 Theme 的 Context

export default function App() {
  const ThemeContext = React.createContext(themes.light);

  // 使用 state 来保存 theme 从而可以动态修改
  const [theme, setTheme] = useState('light');

  // 切换 theme 的回调函数
  const toggleTheme = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }, [theme]);

  // 在 Toolbar 组件中使用一个会使用 Theme 的 Button
  function Toolbar() {
    return (
      <div>
        <ThemedButton />
      </div>
    );
  }

  // 在 Theme Button 中使用 useContext 来获取当前的主题
  function ThemedButton() {
    const theme = useContext(ThemeContext);
    // console.log(theme);
    return (
      <button style={{
        color: theme.foreground,
        background: theme.background,
      }}
      >
        I am styled by theme context!
      </button>
    );
  }

  // 整个应用使用 ThemeContext.Provider 作为根组件
  return (
    // 使用 themes.dark 作为当前 Context
    <ThemeContext.Provider value={themes[theme]}>
      <div>
        current theme
        {' '}
        {JSON.stringify(theme, null, 2)}
      </div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Toolbar />
    </ThemeContext.Provider>
  );
}
