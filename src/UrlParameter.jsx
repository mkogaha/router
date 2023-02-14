import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  // Page2Routesで指定した任意の文字が使用できる
  const { id } = useParams();
  // seachに?以降の文字列が入っている
  const { search } = useLocation();
  // 参考：　https://developer.mozilla.org/ja/docs/Web/API/URLSearchParams
  const query = new URLSearchParams(search);

  return (
    <div>
      <h1>UrlParameterページです</h1>
      <p>パラメータは {id} です</p>
      <p>クエリパラメータは {query.get("name")} です</p>
    </div>
  );
};
