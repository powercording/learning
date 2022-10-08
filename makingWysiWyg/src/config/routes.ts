import IRoute from "../interfaces/route";
import BoardPage from "../pages/board";
import EditPage from "../pages/edit";
import Homepage from "../pages/hom";
import LoginPage from "../pages/login";

const authRoutes: IRoute[] = [
  {
    path: "/login",
    auth: false,
    component: LoginPage,
    name: "Login",
  },
  {
    path: "/register",
    auth: false,
    component: LoginPage,
    name: "register",
  },
];

const boardRoutes: IRoute[] = [
  {
    path: "/edit",
    auth: true,
    component: EditPage,
    name: "Edit",
  },
  {
    path: "/edit:/:boardId",
    auth: true,
    component: EditPage,
    name: "Edit",
  },
  {
    path: "/board/:boardId",
    auth: false,
    component: BoardPage,
    name: "Edit",
  },
];

const mainRoutes: IRoute[] = [
  {
    path: "/",
    auth: true,
    component: Homepage,
    name: "Home",
  },
];

const routes: IRoute[] = [...authRoutes, ...boardRoutes, ...mainRoutes];

export default routes;
