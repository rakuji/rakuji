// /src/routes.js

import {
  Home,
  About,
  Booking,
  Newslist,
  Products,
  recipes,
  box,
  Store,
} from "./pages";

const routes = [
  {
    path: "/homepage",
    component: Home,
    exact: true,
    breadcrumbName: "首頁",
  },
  // -----------------------------------------------------------

  {
    path: "/booking",
    component: Booking,
    breadcrumbName: "線上訂位 ",
  },
  // -----------------------------------------------------------

  {
    path: "/newslist",
    component: Newslist,
    breadcrumbName: "最新消息",
    routes: [
      {
        path: "/newslist/Votelist",
        component: Newslist,
        breadcrumbName: "票選料理之王",
      },
      {
        path: "/newslist/Cooperationform",
        component: Newslist,
        breadcrumbName: "異業合作",
      },
    ],
  },
  // -----------------------------------------------------------

  {
    path: "/products",
    component: Products,
    breadcrumbName: "餐點列表",
  },
  // -----------------------------------------------------------

  {
    path: "/about",
    component: About,
    breadcrumbName: "關於我們",
  },

  // -----------------------------------------------------------
  {
    path: "/recipes",
    component: recipes,
    breadcrumbName: "創意食譜",
    routes: [
      {
        path: "/recipes/box",
        component: box,
        breadcrumbName: "日式唐揚炸雞",
      },
      {
        path: "/recipes/cox",
        component: box,
        breadcrumbName: "1234",
      },
    ],
  }, // -----------------------------------------------------------

  {
    path: "/store",
    component: Store,
    breadcrumbName: "門市資訊",
  },

  // -----------------------------------------------------------
];

export default routes;
