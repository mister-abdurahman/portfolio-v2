import { useIsPresent } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Header } from "../components/UI/Header";
import { PageHero } from "../components/UI/PageHero";
import { AboutMe } from "../components/About/AboutMe";
import { Skills } from "../components/Skills/Skills";
import { Contact } from "../components/UI/Contact";
import { RouteSwitchAnimation } from "../components/UI/RouteSwitchAnimation";
import { AboutIcon, NaijaIcon } from "../assets/icons/icons";
interface AboutProps {}

export const About: React.FunctionComponent<AboutProps> = () => {
  //   const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  //   useEffect(
  //     function () {
  //       setIsMobile(window.innerWidth <= 900);
  //     },
  //     [isMobile]
  //   );
  const isPresent = useIsPresent();
  const isMobile = window.innerWidth <= 900;
  return (
    <div className="" id="about">
      <Header />
      <PageHero
        topIcon={<AboutIcon />}
        topText="About Ramadan Aramide"
        bigText="Software Developer"
        bottomPart={
          <>
            <span className="">
              I am a software developer based in Lagos, Nigeria.
            </span>
            <span>
              <NaijaIcon />
            </span>
          </>
        }
      />
      <AboutMe />
      <Skills />
      <Contact />
      <RouteSwitchAnimation isMobile={isMobile} isPresent={isPresent} />
    </div>
  );
};
