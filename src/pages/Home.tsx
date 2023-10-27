import { FC, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../components/Header";
import Button from "../assets/img/Button.svg";
import AddTaskForm from "../components/AddTaskForm";
import DisplayTask from "../components/DisplayTask";
import Pagination from "../components/Pagination";
import { setAddFormToggle, updateTasks } from "../store/todosSlice";

const Home: FC = () => {
  const dispatch = useDispatch();
  const addToggle = useSelector((state: any) => state.todos.addFormToggle);
  const editToggle = useSelector((state: any) => state.todos.editToggle);
  const edit = useSelector((state: any) => state.todos.editFormToggle);
  const tasks = useSelector((state: any) => state.todos.tasks);
  const [currentPage, setCurrentPage] = useState(1);
  const [tasksPerPage] = useState(5);
  //pagination
  const lastTaskIndex = currentPage * tasksPerPage;
  const firstTaskIndex = lastTaskIndex - tasksPerPage;
  const currentTask = tasks?.slice(firstTaskIndex, lastTaskIndex);
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    const newList = localStorage.getItem("tasks");
    const newListParse = JSON.parse(newList!);
    dispatch(updateTasks(newListParse === null ? tasks : newListParse));
  }, []);

  return (
    <>
      <Header />
      {addToggle && !edit ? (
        <AddTaskForm />
      ) : (
        <DisplayTask tasks={currentTask} />
      )}
      {!editToggle ? (
        <footer>
          {tasks != null ? (
            <Pagination
              tasksPerPage={tasksPerPage}
              tasks={tasks.length}
              paginate={paginate}
            />
          ) : (
            <Pagination
              tasksPerPage={tasksPerPage}
              tasks={1}
              paginate={paginate}
            />
          )}
          <img
            src={Button}
            alt="AddButton"
            className="mx-auto cursor-pointer"
            onClick={() => dispatch(setAddFormToggle())}
          />
        </footer>
      ) : null}
    </>
  );
};

export default Home;
