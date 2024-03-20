import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import Column from "./Column";

const Board = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const boardName = useParams().name;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");

        if (response.ok === false || response.status >= 400) {
          throw new Error("There was an error!");
        }

        const responseData = await response.json();

        const fetchedBoard = responseData.boards.find(
          (board) => board.name === boardName,
        );

        setData(fetchedBoard);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [boardName]);

  if (isLoading) {
    return <span>Loading!</span>;
  }

  return (
    <>
      <div className="bg-green-900 flex-1 h-full px-4 py-4 md:px-6 md:py-6 overflow-x-auto">
        <ul className="flex gap-4">
          {data.columns.map((column, index) => {
            return <Column key={index} column={column} />;
          })}
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default Board;
