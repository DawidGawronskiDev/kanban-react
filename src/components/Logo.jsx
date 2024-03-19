import LogoDark from "/logo-dark.svg";

const Logo = () => {
  return (
    <div className="h-full md:w-64 lg:w-80 flex justify-start items-center">
      <img src={LogoDark} alt="" />
    </div>
  );
};

export default Logo;
