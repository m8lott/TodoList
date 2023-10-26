import { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineCheckSquare } from "react-icons/ai";
import { AiFillCheckSquare } from "react-icons/ai";
import EditTaskForm from "./EditTaskForm";
import Task from "../models/task";
import {
  deleteTask,
  setFavorite,
  setComplet,
  setEditToggle,
  reloadEdit,
} from "../store/todosSlice";

interface SingleTaskProps {
  task: Task;
}

const SingleTask: FC<SingleTaskProps> = ({ task }) => {
  const dispatch = useDispatch();
  const addToggle = useSelector((state: any) => state.todos.addFormToggle);
  const editToggle = useSelector((state: any) => state.todos.editToggle);

  const onEdit = () => {
    dispatch(setEditToggle(task.id));
  };

  useEffect(function () {
    if (task.edit) {
      dispatch(reloadEdit(true));
    }
  }, []);

  if (task.edit && editToggle && !addToggle) {
    return <EditTaskForm task={task} />;
  }

  return (
    <>
      {!addToggle && !editToggle ? (
        <div className="bg-gray-200 py-2 w-96 flex mb-2 justify-between pl-4 pr-4 rounded-2xl items-center">
          <div className="flex gap-2.5">
            {task.checked ? (
              <AiFillCheckSquare
                size="22"
                onClick={() => dispatch(setComplet(task.id))}
                className="mt-1 cursor-pointer"
              />
            ) : (
              <AiOutlineCheckSquare
                size="22"
                onClick={() => dispatch(setComplet(task.id))}
                className="mt-1 cursor-pointer"
              />
            )}
            <p className={task.checked ? "text-lg line-through" : "text-lg"}>
              {task.title.length > 20
                ? task.title.substring(0, 21) + "...."
                : task.title}
            </p>
          </div>
          <div className="flex gap-2.5">
            <AiFillEdit
              className="cursor-pointer"
              size="22"
              onClick={() => onEdit()}
            />
            <AiFillDelete
              className="cursor-pointer"
              size="22"
              onClick={() => dispatch(deleteTask(task.id))}
            />
            {task.favorite ? (
              <AiFillHeart
                onClick={() => dispatch(setFavorite(task.id))}
                className="cursor-pointer"
                size="22"
              />
            ) : (
              <AiOutlineHeart
                onClick={() => dispatch(setFavorite(task.id))}
                className="cursor-pointer"
                size="22"
              />
            )}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SingleTask;
