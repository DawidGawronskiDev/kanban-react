import Task from "./Task";

const Column = ({ column }) => {
  return (
    <div className="bg-yellow-900">
      <h4>{column.name}</h4>
      <ul className="flex flex-col flex-nowrap gap-4 w-72">
        {column.tasks.map((task, index) => {
          return <Task key={index} task={task} />;
        })}
      </ul>
    </div>
  );
};

export default Column;
