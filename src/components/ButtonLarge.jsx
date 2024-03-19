const ButtonLarge = ({ label, ...props }) => {
  return (
    <button
      {...props}
      className="bg-black  p-2 md:px-6 md:py-4 rounded-full hover:bg-gray-500 transition"
    >
      <h3 className="text-white">{label}</h3>
    </button>
  );
};

export default ButtonLarge;
