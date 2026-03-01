import { useIsPresent } from "framer-motion";
import React, { useEffect } from "react";
import { Header } from "../components/UI/Header";
import { PageHero } from "../components/UI/PageHero";
import { RouteSwitchAnimation } from "../components/UI/RouteSwitchAnimation";
import { TbError404 } from "react-icons/tb";
import { NavLink } from "react-router-dom";

export const NotFound: React.FunctionComponent = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  const isPresent = useIsPresent();
  const isMobile = window.innerWidth <= 900;

  return (
    <div className="" id="notfound">
      <Header />
      <PageHero
        topIcon={
          <TbError404 className="w-10 h-10 text-blue-800 dark:text-blue-200" />
        }
        topText="404 ERROR"
        bigText="Oops! You've drifted into the void."
        bottomPart={
          <div className="flex flex-col gap-6 items-start">
            <span className="text-lg">
              The page you are looking for might have been moved, deleted, or never existed in the first place.
            </span>
            <NavLink
              to="/"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105"
            >
              Back to Safety
            </NavLink>
          </div>
        }
      />
      <div className="h-20"></div>
      <RouteSwitchAnimation isMobile={isMobile} isPresent={isPresent} />
    </div>
  );
};
