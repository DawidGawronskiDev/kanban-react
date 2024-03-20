import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useParams } from "react-router-dom";

const TaskView = () => {
  const ref = useRef();

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const boardName = useParams().name;
  const taskName = useParams().taskName;

  const handleKey = (e) => {
    if (e.code === "Escape") {
      ref.current.close();
    }
  };

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

        const fetchedColumn = fetchedBoard.columns.find((column) =>
          column.tasks.some((task) => task.title === taskName),
        );

        const fetchedTask = fetchedColumn.tasks.find(
          (task) => task.title === taskName,
        );

        setData(fetchedTask);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [boardName, taskName]);

  useEffect(() => {
    if (ref.current) {
      console.log(ref);
      ref.current.showModal();
    }
  }, [data]);

  if (isLoading) {
    return <span>Loading!</span>;
  }

  return createPortal(
    <dialog ref={ref} onKeyDown={handleKey}>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
    </dialog>,
    document.body,
  );
};

export default TaskView;
