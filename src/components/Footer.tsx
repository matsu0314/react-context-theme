import React, { useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvider";

export const Footer = () => {
  const { themeInfo, setThemeInfo } = useContext(ThemeContext);

  return (
    <footer>
      <p>©️{themeInfo.themeName}テーマ</p>
    </footer>
  );
};
