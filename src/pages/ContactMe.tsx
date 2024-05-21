import { useEffect } from "react";
import { PhoneIcon } from "../assets/icons/icons";
import { useIsPresent } from "framer-motion";
import { Header } from "../components/UI/Header";
import { PageHero } from "../components/UI/PageHero";
import { Contact } from "../components/UI/Contact";
import { RouteSwitchAnimation } from "../components/UI/RouteSwitchAnimation";
import { MeansOfContact } from "../components/UI/MeansOfContact";

interface ContactMeProps {}

const ContactMe: React.FunctionComponent<ContactMeProps> = () => {
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
  //   const theme = useContext(ThemeContext);
  const isMobile = window.innerWidth <= 900;
  return (
    <div className="" id="contact">
      <Header />
      <PageHero
        topIcon={<PhoneIcon />}
        topText="CONTACT ME"
        bigText="Say hello to me"
        bottomPart={<span>You have an idea. Let's talk!</span>}
      />
      <MeansOfContact />
      <Contact />
      <RouteSwitchAnimation isMobile={isMobile} isPresent={isPresent} />
    </div>
  );
};

export default ContactMe;
