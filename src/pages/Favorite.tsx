import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateTasks } from "../store/todosSlice";
import Header from "../components/Header";
import DisplayFavTask from "../components/DisplayFavTask";

const Favorite: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const newList = localStorage.getItem("tasks");
    const newListParse = JSON.parse(newList!);
    dispatch(updateTasks(newListParse));
  }, []);

  return (
    <>
      <Header />
      <DisplayFavTask />
    </>
  );
};

export default Favorite;
