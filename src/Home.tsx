import React, { useContext } from "react";
import { ThemeContext } from "./providers/ThemeProvider";
import { Layout } from "./components/Layout";

export const Home = () => {
  const { themeInfo, setThemeInfo } = useContext(ThemeContext);

  return (
    <Layout>
      <div className="main-visual">
        <h1>{themeInfo.themeName}テーマ</h1>
        <div>
          <img src={`images/${themeInfo.themeKey}/main.jpg`} alt="" />
        </div>
      </div>
      <div className="cover">
        <section className="post">
          <h2>新着記事</h2>
          <div className="post-container">
            <div>
              <div>
                <img src={`images/${themeInfo.themeKey}/photo1.jpg`} alt="" />
              </div>
              <p>テキストテキスト</p>
            </div>
            <div>
              <div>
                <img src={`images/${themeInfo.themeKey}/photo2.jpg`} alt="" />
              </div>
              <p>テキストテキスト</p>
            </div>
            <div>
              <div>
                <img src={`images/${themeInfo.themeKey}/photo3.jpg`} alt="" />
              </div>
              <p>テキストテキスト</p>
            </div>
            <div>
              <div>
                <img src={`images/${themeInfo.themeKey}/photo4.jpg`} alt="" />
              </div>
              <p>テキストテキスト</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};
