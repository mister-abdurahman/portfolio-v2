import { useIsPresent } from "framer-motion";
import React, { useEffect } from "react";
import { Header } from "../components/UI/Header";
import { PageHero } from "../components/UI/PageHero";
import { Projects } from "../components/Projects/Projects";
import { Skills } from "../components/Skills/Skills";
import { Contact } from "../components/UI/Contact";
import { RouteSwitchAnimation } from "../components/UI/RouteSwitchAnimation";
import { IoGameController } from "react-icons/io5";
interface PlayGround {}
export const PlayGround: React.FunctionComponent<PlayGround> = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  const isPresent = useIsPresent();
  const isMobile = window.innerWidth <= 900;
  return (
    <div className="" id="works">
      <Header />
      <PageHero
        topIcon={
          <IoGameController className="w-8 h-8 fill-blue-800 dark:fill-blue-200" />
        }
        topText="PLAYGROUND"
        bigText="Fun Apps"
        bottomPart={<span>These are some of the apps i built for fun 😙</span>}
      />
      <Projects />
      <Skills />
      <Contact />
      <RouteSwitchAnimation isMobile={isMobile} isPresent={isPresent} />
    </div>
  );
};
