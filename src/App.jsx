import "./App.css";
import { Outlet } from "react-router-dom";
import { Header } from "./components/navigation/header";

function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
