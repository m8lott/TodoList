import { FC, useState, ChangeEvent, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { addTasks, setAddFormToggle } from "../store/todosSlice";

const AddTaskForm: FC = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value.length != 0) {
      dispatch(addTasks(value));
    }
    dispatch(setAddFormToggle());
  };

  const handleCancel = () => {
    dispatch(setAddFormToggle());
  };

  return (
    <form className="flex flex-col items-center" onSubmit={handleSubmit}>
      <p className="text-3xl font-bold text-cyan-500 pb-6">Add Task</p>
      <input
        name="add-form"
        type="text"
        className="border border-cyan-500 rounded-2xl outline-0 w-80 py-2 pl-2"
        value={value}
        onChange={handleChange}
      />
      <div className="flex gap-16 mt-4">
        <button
          type="submit"
          className="bg-cyan-500 rounded-3xl text-white py-2.5 w-32"
        >
          Save
        </button>
        <button
          className="bg-red-500 rounded-3xl text-white py-2.5 w-32"
          onClick={handleCancel}
          type="button"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};
export default AddTaskForm;
