import { useEffect } from "react";
import { FolderIcon } from "../assets/icons/icons";
import { useIsPresent } from "framer-motion";
import { Header } from "../components/UI/Header";
import { PageHero } from "../components/UI/PageHero";
import { Projects } from "../components/Projects/Projects";
import { Skills } from "../components/Skills/Skills";
import { Contact } from "../components/UI/Contact";
import { RouteSwitchAnimation } from "../components/UI/RouteSwitchAnimation";

interface WorksProps {}

const Works: React.FunctionComponent<WorksProps> = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  const isPresent = useIsPresent();
  const isMobile = window.innerWidth <= 900;
  return (
    <div className="" id="works">
      <Header />
      <PageHero
        topIcon={<FolderIcon />}
        topText="PROJECTS"
        bigText="Selected Works"
        bottomPart={
          <span>
            Not all my projects are included here; some are restricted by NDA
          </span>
        }
      />
      <Projects />
      <Skills />
      <Contact />
      <RouteSwitchAnimation isMobile={isMobile} isPresent={isPresent} />
    </div>
  );
};

export default Works;
