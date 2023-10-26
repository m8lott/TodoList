import { FC } from "react";
import { useSelector } from "react-redux";
import SingleTask from "./SingleTask";

const DisplayCompTask: FC = () => {
  const tasks = useSelector((state: any) => state.todos.tasks);
  return (
    <>
      <div className="flex items-center flex-col">
        {tasks?.map((item: any) =>
          item.checked ? <SingleTask key={item.id} task={item} /> : null
        )}
      </div>
    </>
  );
};

export default DisplayCompTask;
