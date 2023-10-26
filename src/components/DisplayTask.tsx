import { FC } from "react";
import SingleTask from "./SingleTask";
import Task from "../models/task";

interface DisplayTaskProps {
  tasks: Task[];
}

const DisplayTask: FC<DisplayTaskProps> = ({ tasks }) => {
  return (
    <div className="flex items-center flex-col">
      {tasks?.map((item: any) => (
        <SingleTask key={item.id} task={item} />
      ))}
    </div>
  );
};
export default DisplayTask;
