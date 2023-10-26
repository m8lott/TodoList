import { FC } from "react";
import Navbar from "./Navbar";
import Logo from "../assets/img/Logo.svg";

const Header: FC = () => {
  return (
    <>
      <header className="bg-black shadow-xl shadow-gray-400 h-20 mb-24">
        <img src={Logo} alt="Logo" className="mx-auto pt-6" />
      </header>
      <Navbar />
    </>
  );
};

export default Header;
