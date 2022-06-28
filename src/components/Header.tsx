import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">ホーム</Link>
        </li>
        <li>
          <Link to="/about">アバウト</Link>
        </li>
        <li>
          <Link to="/contact">お問合せ</Link>
        </li>
      </ul>
    </header>
  );
};
