import { Switch, Route } from "react-router-dom";
import { Home } from "../Home";
import { Page４０４ } from "../Page404";
import { page1Routes } from "./Page1Routes";
import { page2Routes } from "./Page2Routes";

export const Router = () => {
  return (
    <Switch>
      {/* exactをつけると完全一致がtrueという意味になる */}
      <Route exact path="/">
        <Home />
      </Route>
      {/* ネストされたページの場合 */}
      <Route
        path="/page1"
        render={({ match: { url } }) => (
          <Switch>
            {/* propsのmatch.urlにパスが入っている*/}
            {/* console.log(props) */}
            {console.log(url)}

            {page1Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.childdren}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route
        path="/page2"
        render={({ match: { url } }) => (
          <Switch>
            {/* propsのmatch.urlにパスが入っている*/}
            {/* console.log(props) */}
            {console.log(url)}

            {page2Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.childdren}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route path="*">
        <Page４０４ />
      </Route>
    </Switch>
  );
};
