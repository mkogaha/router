import { Page1 } from "../Page1";
import { Page1DetailA } from "../Page1DetailA";
import { Page1DetailB } from "../Page1DetailB";

export const page1Routes = [
  {
    path: "/",
    exact: true,
    childdren: <Page1 />
  },
  {
    path: "/detailA",
    exact: false,
    childdren: <Page1DetailA />
  },
  {
    path: "/detailB",
    exact: false,
    childdren: <Page1DetailB />
  }
];
