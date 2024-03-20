import { Link } from "react-router-dom";

const Task = ({ task }) => {
  return (
    <div className="bg-purple-900 p-6 rounded-xl shadow-md">
      <Link to={`task/${task.title}`}>
        <h3>{task.title}</h3>
      </Link>
    </div>
  );
};

export default Task;
