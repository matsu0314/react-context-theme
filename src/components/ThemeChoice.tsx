import React, { useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvider";

export const ThemeChoice = () => {
  const { themeInfo, setThemeInfo } = useContext(ThemeContext);

  const onClicksetTheme = (key: string, name: string) => {
    setThemeInfo({
      themeKey: key,
      themeName: name
    });
  };

  return (
    <div className="theme-choice">
      <ul>
        <li
          className={themeInfo.themeKey === "tropical" ? "active" : ""}
          onClick={() => onClicksetTheme("tropical", "トロピカル")}
        >
          トロピカル
        </li>
        <li
          className={themeInfo.themeKey === "retro" ? "active" : ""}
          onClick={() => onClicksetTheme("retro", "レトロ")}
        >
          レトロ
        </li>
        <li
          className={themeInfo.themeKey === "fantasy" ? "active" : ""}
          onClick={() => onClicksetTheme("fantasy", "ファンタジー")}
        >
          ファンタジー
        </li>
      </ul>
    </div>
  );
};
