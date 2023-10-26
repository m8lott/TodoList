import { FC } from "react";
import { NavLink } from "react-router-dom";

const Navbar: FC = () => {
  return (
    <nav>
      <ul className="flex gap-4 justify-center mb-4">
        <li className="text-xl text-cyan-500">
          <NavLink to="/">All</NavLink>
        </li>
        <li className="text-xl text-cyan-500">
          <NavLink to="/favorite">Favorite</NavLink>
        </li>
        <li className="text-xl text-cyan-500">
          <NavLink to="/completed">Completed</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
