import { FC } from "react";

interface PaginationProps {
  tasksPerPage: Number;
  tasks: Number;
  paginate: (pageNumber: number) => void;
}

const Pagination: FC<PaginationProps> = ({ tasks, tasksPerPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(Number(tasks) / Number(tasksPerPage)); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className="flex justify-center gap-5 my-4">
        {pageNumbers.map((number) => (
          <li key={number}>
            <a
              className="duration-700 text-xl text-cyan-500 border border-cyan-500 px-2 rounded
           hover:text-white hover:bg-cyan-500	hover:duration-700"
              href="#"
              onClick={() => paginate(number)}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
