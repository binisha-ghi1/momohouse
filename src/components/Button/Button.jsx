import { FaArrowRight } from "react-icons/fa";

const Button = ({ title }) => {
  return (
    <div>
      <button className="bg-green-800 text-white rounded-full p-4 flex items-center gap-x-2 ">
        {title}
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Button;
