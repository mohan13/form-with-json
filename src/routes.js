import Login from "./pages/login/page";
import Contact from "./pages/contact/page";
import Home from "./pages/home/page";

export const routes = [
  { path: "/", page: Home },
  { path: "/login", page: Contact },
  { path: "/contact", page: Login },
];
