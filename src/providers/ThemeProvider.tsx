import React, { FC, createContext, useState } from "react";

type ThemeContextType = {
  themeInfo: { themeKey: string; themeName: string };
  setThemeInfo: React.Dispatch<
    React.SetStateAction<{
      themeKey: string;
      themeName: string;
    }>
  >;
};

// Contextオブジェウト作成
export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType
);

// Providerをコンポーネント化する
export const ThemeProvider: FC = (props) => {
  // Propsでchildrenを取り出す
  const { children } = props;
  // テーマ（State）設定
  const [themeInfo, setThemeInfo] = useState({
    themeKey: "tropical",
    themeName: "トロピカル"
  });
  // グローバルで管理するState
  const value: ThemeContextType = {
    themeInfo,
    setThemeInfo
  };

  // valueを設定したProviderコンポーネントを返却
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
