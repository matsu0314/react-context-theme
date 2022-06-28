import React, { FC, useContext } from "react";
import { ThemeChoice } from "./ThemeChoice";
import { ThemeContext } from "../providers/ThemeProvider";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout: FC = ({ children }) => {
  const context = useContext(ThemeContext);

  return (
    <div className={`container ${context.themeInfo.themeKey}`}>
      <ThemeChoice />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
