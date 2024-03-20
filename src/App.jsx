import { useRef, useState } from "react";

import useFetch from "react-fetch-hook";
import AppContext from "./AppContext";
import Router from "./Router";

function App() {
  const [currentBoard, setCurrentBoard] = useState(null);

  const { data, isLoading, error } = useFetch("/data.json");

  const handleCurrentBoard = (boardName) => {
    const board = data.find((board) => board.name === boardName);

    setCurrentBoard(board);
  };

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <AppContext.Provider value={{ data, currentBoard, handleCurrentBoard }}>
      <Router />
    </AppContext.Provider>
  );
}

export default App;
