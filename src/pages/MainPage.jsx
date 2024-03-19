import { Outlet } from "react-router-dom";
import Aside from "../components/Aside";
import Header from "../components/Header";

const MainPage = () => {
  return (
    <main className="flex flex-col h-screen">
      <Header />
      <div className="flex-1">
        <Aside />
        <Outlet />
      </div>
    </main>
  );
};

export default MainPage;
