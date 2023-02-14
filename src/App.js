import { BrowserRouter, Link } from "react-router-dom";
import { Router } from "./router/Router";

import "./styles.css";

export default function App() {
  return (
    // react-routerのブラウザルーティング機能の有効化
    // 囲んだ範囲で有効化される
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
      </div>
      {/* routerの設定を切り出す */}
      <Router />
    </BrowserRouter>
  );
}
