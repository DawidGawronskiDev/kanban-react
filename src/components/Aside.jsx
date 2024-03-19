import { useContext } from "react";
import AppContext from "../AppContext";

import BoardNavigation from "./BoardsNavigation";

const Aside = () => {
  const { data } = useContext(AppContext);

  console.log(data);

  return (
    <aside className="md:h-full fixed md:static float-left top-24 md:top-0 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 w-4/5 mx-auto md:m-0 md:w-64 lg:w-80 bg-blue-900">
      <h4>All board ({data.boards.length})</h4>
      <BoardNavigation />
    </aside>
  );
};

export default Aside;
