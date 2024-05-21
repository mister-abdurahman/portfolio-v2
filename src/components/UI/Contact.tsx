import React from "react";
import {
  ContactGoldRects,
  ContactGreenRects,
  ContactPinkRects,
  ContactPurpleRects,
  GithubIcon,
  LinkedInIcon,
  TwitterIcon,
} from "../../assets/icons/icons";
import { AnimatedText } from "./AnimatedText";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
interface ContactProps {}
export const Contact: React.FunctionComponent<ContactProps> = () => {
  const navigate = useNavigate();
  return (
    <div className="flex relative justify-center bg-bgImage_1 dark:bg-bgImage_dark sm:px-14 px-5 sm:py-20 py-12">
      <div className="flex flex-col gap-14 items-center">
        <AnimatedText
          text="Want us to work together?"
          once={false}
          className="md:text-6xl dark:text-primary_2 sm:text-5xl text-4xl font-bold sm:w-4/5 w-full text-center tracking-wide"
        />

        <button
          onClick={() => navigate("/contact")}
          className="bg-blue-600 w-fit px-8 py-3 text-sm rounded-full text-white"
        >
          Contact Me
        </button>
        <div className="flex justify-center items-center gap-6">
          <a
            href="https://www.linkedin.com/in/ramadan-aramide-855289218/"
            target="_blank"
          >
            <LinkedInIcon />
          </a>
          <a href="https://github.com/mister-abdurahman" target="_blank">
            <GithubIcon />
          </a>
          <a href="https://twitter.com/abdu_rahman__" target="_blank">
            <TwitterIcon />
          </a>
          <a
            href="https://wa.link/cy8shs"
            target="_blank"
            className="bg-green-600 flex justify-center items-center w-9 h-9 rounded-full"
          >
            <FaWhatsapp className="fill-white w-5 h-5" />
          </a>
          <a
            href="mailto:aramramadan7@gmail.com"
            target="_blank"
            className="bg-rose-600 flex justify-center items-center w-9 h-9 rounded-full"
          >
            <MdEmail className="fill-white w-5 h-5" />
          </a>
        </div>
      </div>
      <span className="absolute sm:top-16 top-5 lg:left-44 md:left-32 sm:left-20 left-3">
        <ContactPurpleRects />
      </span>
      <span className="absolute sm:top-16 top-10 lg:right-44 md:right-40 sm:right-32 right-4">
        <ContactGreenRects />
      </span>
      <span className="absolute md:top-44 lg:left-80 md:left-56 sm:left-36 left-10 sm:top-56 top-44">
        <ContactGoldRects />
      </span>
      <span className="absolute md:top-44 lg:right-80 md:right-60 sm:right-36 right-14 sm:top-64 top-40">
        <ContactPinkRects />
      </span>
    </div>
  );
};
