import { Outlet } from "react-router-dom";
import { Header } from "../navigation/header";

const Layout = () => {
  return (
    <div>
      <Header />
      <main className="pl-1">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
