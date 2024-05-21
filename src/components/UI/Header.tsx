import React, { useContext, useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { MdLightMode, MdOutlineDarkMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { ScrollUpButton } from "../../assets/icons/icons";
import { Link } from "react-scroll";
import { IoMdClose } from "react-icons/io";
import { ThemeContext } from "../../App";

interface headerProps {}
export const Header: React.FunctionComponent<headerProps> = () => {
  const location = useLocation();

  const { isDarkmode, toggleTheme } = useContext(ThemeContext);

  const pageId = location.pathname.replace("/", "");

  const [position, setPosition] = useState(window.scrollY);
  const [openMenu, setOpenMenu] = useState(false);
  const [hideHeader, setHideHeader] = useState<boolean>(false);
  const [showScrollUpButton, setShowScrollUpButton] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const moving = window.scrollY;
      setHideHeader(moving > position);
      setShowScrollUpButton(true);
      if (moving < 120) {
        setHideHeader(false);
        setShowScrollUpButton(false);
      }
      setPosition(moving);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  useEffect(() => {
    window.addEventListener("resize", () =>
      setIsMobile(window.innerWidth <= 900)
    );
    return () =>
      window.removeEventListener("resize", () =>
        setIsMobile(window.innerWidth <= 900)
      );
  }, [isMobile]);

  // function handleScrollBtn(path:string){
  //   return path
  // }

  return isMobile ? (
    <header
      ref={headerRef}
      id="header"
      className={`flex fixed items-center justify-between w-full z-50 shadow-headerShadow bg-white dark:bg-slate-950 px-8 py-4 ${
        hideHeader
          ? "-top-[100px] transition-[top] duration-500 ease-out"
          : "top-0 transition-[top] duration-500 ease-out"
      }`}
    >
      <div>
        <NavLink
          to={"/"}
          className="bg-blue-50 rounded-full border-[2px] p-[2px] border-blue-500 w-12 h-12 flex items-center justify-center"
        >
          {/* <img src={image} alt="photo" className="w-full h-full" /> */}
          <h1 className="font-extrabold text-blue-600 text-2xl">RA</h1>
        </NavLink>
      </div>
      <div className="flex items-center gap-7">
        <span className="rounded-full p-2 dark:bg-blue-800 shadow-md flex justify-center items-center">
          {isDarkmode ? (
            <MdLightMode onClick={() => toggleTheme()} className="w-8 h-8" />
          ) : (
            <MdOutlineDarkMode
              onClick={() => toggleTheme()}
              className="w-7 h-7"
            />
          )}
        </span>
        <span className="z-30">
          {openMenu ? (
            <IoMdClose
              className="w-9 h-9 dark:fill-white"
              onClick={() => setOpenMenu(false)}
            />
          ) : (
            <GiHamburgerMenu
              className="w-8 h-8 dark:fill-white"
              onClick={() => setOpenMenu(true)}
            />
          )}
        </span>
      </div>
      <img
        className="w-full h-full absolute inset-0 object-cover object-center dark:opacity-20 -z-10"
        src={`https://res.cloudinary.com/dt9pwfpi5/image/upload/v1700223294/Vector-bg_ijfifv.png`}
        alt="header bg image"
      />
      {/* <span>
      </span> */}
      <div
        className={`fixed flex justify-center items-center h-screen z-20 transition duration-800 ease-out ${
          openMenu ? "inset-0 translate-x-0" : "-translate-x-[90rem]"
        } ${isDarkmode ? "dark_menu_bg" : "menu_bg"}`}
      >
        <nav
          role="navigation"
          className="flex items-center flex-col gap-12 text-xl text-slate-600 dark:text-primary_2"
        >
          <NavLink className={`hover:text-blue-600`} to={"/"}>
            Home
          </NavLink>
          <NavLink className={`hover:text-blue-600`} to={"/about"}>
            About me
          </NavLink>
          <NavLink className={`hover:text-blue-600`} to={"/works"}>
            Works
          </NavLink>
          <NavLink className={`hover:text-blue-600`} to={"/contact"}>
            Contact me
          </NavLink>
          <a
            className={`hover:text-blue-600`}
            href={"./ramadan_v1.pdf"}
            target="_blank"
          >
            Resumé
          </a>
        </nav>
      </div>
      {/* {showScrollUpButton && (
        <Link
          to={location.pathname === "/" ? "home" : pageId}
          spy={true}
          smooth={true}
          duration={1000}
          className="fixed bottom-6 right-6 z-50"
        >
          <ScrollUpButton />
        </Link>
      )} */}
      {showScrollUpButton && (
        <Link
          to={"top"}
          spy={true}
          smooth={true}
          duration={1000}
          className="fixed bottom-6 right-6 z-50"
        >
          <ScrollUpButton />
        </Link>
      )}
      {/* {showScrollUpButton && (
        <button
          onClick={() => scrollTo(0, 0)}
          className="fixed bottom-6 right-6 z-50"
        >
          <ScrollUpButton />
        </button>
      )} */}
    </header>
  ) : (
    <header
      ref={headerRef}
      id="header"
      className={`fixed items-center w-full z-50 bg-white shadow-headerShadow dark:shadow-darkHeaderShadow dark:bg-slate-950 px-24 py-6 ${
        hideHeader
          ? "-top-[100px] transition-[top] duration-500 ease-out"
          : "top-0 transition-[top] duration-500 ease-out"
      }`}
    >
      <div className="flex justify-between items-center">
        {/* <figure className="bg-slate-500 rounded-full border-[1px] p-[2px] border-blue-600 w-16 h-16 overflow-clip">
          <img
            src="https://res.cloudinary.com/djatqa2lq/image/upload/v1716155887/profpic_b4xkc8.jpg"
            alt="photo"
            className="w-full h-full"
          />
        </figure> */}
        <NavLink
          to={"/"}
          className={`bg-blue-50 rounded-full border-[2px] p-[2px] border-blue-500 w-12 h-12 flex items-center justify-center`}
        >
          {/* <img src={image} alt="photo" className="w-full h-full" /> */}
          <h1 className="font-extrabold text-blue-600 text-2xl">RA</h1>
        </NavLink>
        <div className="flex items-center gap-9">
          <ul
            className={`font-Mullish dark:text-primary_2 flex gap-12 tracking-wide`}
          >
            <NavLink
              to={"/"}
              className={
                location.pathname === "/"
                  ? `dark:text-blue-400 text-blue-600 font-bold`
                  : ""
              }
            >
              <li className="">Home</li>
            </NavLink>

            <NavLink
              to={"/about"}
              className={
                location.pathname === "/about"
                  ? `dark:text-blue-400 text-blue-600 font-bold`
                  : ""
              }
            >
              <li>About me</li>
            </NavLink>

            <NavLink
              to={"/works"}
              className={
                location.pathname === "/works"
                  ? `dark:text-blue-400 text-blue-600 font-bold`
                  : ""
              }
            >
              <li>Works</li>{" "}
            </NavLink>
            <NavLink
              to={"/contact"}
              className={
                location.pathname === "/contact"
                  ? `dark:text-blue-400 text-blue-600 font-bold`
                  : ""
              }
            >
              <li>Contact me</li>
            </NavLink>
            <a href="./ramadan_v1.pdf" target="_blank">
              <li>Resumé</li>
            </a>
          </ul>
          <span className="rounded-full dark:bg-blue-800 shadow-md p-1">
            {isDarkmode ? (
              <MdLightMode
                onClick={() => toggleTheme()}
                className="w-10 h-10 p-1"
              />
            ) : (
              <MdOutlineDarkMode
                onClick={() => toggleTheme()}
                className="w-10 h-10"
              />
            )}
          </span>
        </div>
      </div>
      {showScrollUpButton && (
        <Link
          to={location.pathname === "/" ? "home" : pageId}
          spy={true}
          smooth={true}
          duration={1000}
          className="fixed bottom-6 right-6 z-50"
        >
          <ScrollUpButton />
        </Link>
      )}
    </header>
  );
};
