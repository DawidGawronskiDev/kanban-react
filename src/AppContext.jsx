import { createContext } from "react";

const AppContext = createContext({
  data: {},
  currentBoard: "",
  handleCurrentBoard: () => {},
});

export default AppContext;
