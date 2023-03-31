import { useEffect, useState } from "react";
import SideBar from "./SideBar";
import { BsBag } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Login from "./Login";

type Props = {
  categories: string[];
  setCurrentCategory: (value: string) => void;
  currentCategory: string;
};

const NavBar = ({ categories, setCurrentCategory, currentCategory }: Props) => {
  const [isActive, setIsActive] = useState<boolean>(true);
  const [expanded, setExpanded] = useState<boolean>(false);
  const [sideBarIsOpen, setSideBarIsOpen] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  const navigate = useNavigate();

  const handleEnter = (): void => {
    setExpanded(true);
  };

  const handleExit = (): void => {
    setExpanded(false);
  };

  const handleClick = (category: string): void => {
    setCurrentCategory(currentCategory === category ? "" : category);
  };

  const handleClose = (value: boolean) => {
    setSideBarIsOpen(value);
  };

  return (
    <div className={`${isActive ? "bg-white py-2 shadow-md" : "bg-none "} fixed w-full z-10 transition-all group`}>
      <div className="w-full flex  justify-between items-center px-6 md:px-16 h-16 font-semibold relative">
        <p
          onMouseOver={() => handleEnter()}
          onMouseOut={() => handleExit()}
          className=" md:px-8 py-5 cursor-pointer">
          Explore
        </p>
        <p
          className="text-lg md:text-2xl cursor-pointer"
          onClick={() => navigate("/")}>
          Shoppers Stop
        </p>
        <p
          onClick={() => handleClose(sideBarIsOpen === false ? true : false)}
          className="cursor-pointer flex items-center justify-center gap-x-3">
          Cart
          <BsBag className="2xl" />
        </p>
        {/* <Login /> */}
      </div>
      {expanded && (
        <div
          className="w-full bg-white flex justify-between flex-col items-start pl-6 md:px-20 absolute shadow-xl z-10 "
          onMouseOver={() => handleEnter()}
          onMouseOut={() => handleExit()}>
          {categories.map((category, index) => {
            return (
              <div
                className="my-2 cursor-pointer"
                key={index}
                onClick={() => handleClick(category)}>
                {category.toUpperCase()}
              </div>
            );
          })}
        </div>
      )}
      {sideBarIsOpen && isLoggedIn && (
        <div className="transition">
          <SideBar
            sideBarIsOpen={sideBarIsOpen}
            setSideBarIsOpen={setSideBarIsOpen}
          />
        </div>
      )}
      {sideBarIsOpen && !isLoggedIn && (
        <div className="transition">
          <Login
            sideBarIsOpen={sideBarIsOpen}
            setSideBarIsOpen={setSideBarIsOpen}
            setIsLoggedIn={setIsLoggedIn}
            isLoggedIn={isLoggedIn}
          />
        </div>
      )}
    </div>
  );
};

export default NavBar;
