import React, { useContext } from "react";
import { ThemeContext } from "./providers/ThemeProvider";

import { Layout } from "./components/Layout";

export const Contact = () => {
  const { themeInfo, setThemeInfo } = useContext(ThemeContext);

  return (
    <Layout>
      <section>
        <h2>お問合せ</h2>
        <form action="">
          <label htmlFor="name">
            お名前：
            <input type="text" name="name" />
          </label>
          <label htmlFor="text">
            お問合せ
            <br />
            内容：
            <textarea rows="20"></textarea>
          </label>
          <button>送信する</button>
        </form>
      </section>
    </Layout>
  );
};
