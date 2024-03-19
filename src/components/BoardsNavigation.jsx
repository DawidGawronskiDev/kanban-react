import { useContext } from "react";
import AppContext from "../AppContext";

import BoardIcon from "/icon-board.svg";
import { Link } from "react-router-dom";

const BoardNavigation = () => {
  const { data } = useContext(AppContext);

  return (
    <nav>
      <ul>
        {data.boards.map((board, index) => {
          return (
            <li
              key={index}
              className="flex justify-start items-center gap-3 lg:gap-4"
            >
              <Link to={`board/${board.name}`}>
                <img src={BoardIcon} />
                {board.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default BoardNavigation;
