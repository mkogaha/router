import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];
  console.log(arr);

  // jsでページ遷移する方法
  const history = useHistory();
  const onClickDrtailA = () => history.push("/page1/detailA");

  return (
    <div>
      <h1>Page1ページです</h1>
      <Link to={{ pathname: "/page1/detailA", state: arr }}>DetailA</Link>
      <br />
      <Link to="/page1/detailB">DetailB</Link>
      <br />
      <button onClick={onClickDrtailA}>DetailA</button>
    </div>
  );
};
