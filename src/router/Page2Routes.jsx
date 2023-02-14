import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter";

export const page2Routes = [
  {
    path: "/",
    exact: true,
    childdren: <Page2 />
  },
  {
    // このidの値はURLParameter。どんな文字列でもよい
    path: "/:id",
    exact: false,
    childdren: <UrlParameter />
  }
];
