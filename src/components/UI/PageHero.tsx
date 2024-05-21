import React, { useContext } from "react";
import { AnimatedText } from "./AnimatedText";
import {
  ContactGoldRects,
  ContactGreenRects,
  ContactPurpleRects,
} from "../../assets/icons/icons";
import { useLocation } from "react-router-dom";
import { ThemeContext } from "../../App";
interface PageHeroProps {
  topIcon: JSX.Element;
  topText: string;
  bigText: string;
  bottomPart: JSX.Element;
}
export const PageHero: React.FunctionComponent<PageHeroProps> = ({
  topIcon,
  topText,
  bigText,
  bottomPart,
}) => {
  const location = useLocation();
  const { isDarkmode } = useContext(ThemeContext);
  return (
    <section className="lg:px-24 md:px-20 sm:px-12 px-8 lg:py-32 py-24 bg-hero_bg dark:bg-slate-950 dark:text-primary_2 relative mt-[4.8rem] lg:mt-[6rem]">
      <div className="flex gap-3 items-center">
        <span>{topIcon}</span>
        <p className="uppercase">{topText}</p>
      </div>
      <AnimatedText
        once={true}
        text={bigText}
        className={`lg:text-7xl sm:text-5xl text-[2rem] font-extrabold my-5 image-text ${
          isDarkmode && "dark-image-text"
        }`}
      />
      <div
        className={`lg:mt-10 dark:text-primary_2 md:mt-7 sm:mt-5 lg:text-xl md:text-base sm:text-[1rem] text-[.8rem] text-black font-light flex flex-wrap items-center sm:justify-normal gap-1 ${
          location.pathname === "/about" && "justify-center"
        }`}
      >
        {bottomPart}
      </div>

      <span className="absolute top-12 left-24">
        <ContactPurpleRects />
      </span>
      <span className="absolute sm:top-14 top-16 sm:right-44 right-32">
        <ContactGreenRects />
      </span>
      <span className="absolute bottom-14 right-48">
        <ContactGoldRects />
      </span>
    </section>
  );
};
