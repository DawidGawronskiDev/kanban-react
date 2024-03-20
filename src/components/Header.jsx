import Logo from "./Logo";
import ButtonLarge from "./ButtonLarge";
import { useParams } from "react-router-dom";

const Header = () => {
  const HEADING = useParams().name;

  return (
    <header className=" bg-red-900 top-0 w-full h-16 md:h-20 lg:h-24 flex justify-between items-center z-10">
      <Logo />
      {HEADING && <h1 className="flex-1">{HEADING}</h1>}
      <ButtonLarge label={"+ Add New Task"} />
    </header>
  );
};

export default Header;
