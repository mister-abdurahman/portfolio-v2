import { Header } from "../components/UI/Header";
import { Hero } from "../components/UI/Hero";
import { Projects } from "../components/Projects/Projects";
import { Skills } from "../components/Skills/Skills";
import { Contact } from "../components/UI/Contact";
import { motion, useIsPresent } from "framer-motion";
import { useEffect } from "react";
import { RouteSwitchAnimation } from "../components/UI/RouteSwitchAnimation";

interface HomeProps {}

export const Home: React.FunctionComponent<HomeProps> = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  const isPresent = useIsPresent();
  const isMobile = window.innerWidth <= 900;
  return (
    <div className="" id="home">
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <RouteSwitchAnimation isMobile={isMobile} isPresent={isPresent} />
    </div>
  );
};
