import React, { useCallback, useContext } from "react";
import Particles from "react-particles";
import image from "../../assets/images/profpic.jpg";
import { loadSlim } from "tsparticles-slim";
import {
  GithubIcon,
  GoldRects,
  LinkedInIcon,
  PurpleRects,
  TwitterIcon,
} from "../../assets/icons/icons";
import { ThemeContext } from "../../App";
import { FaWhatsapp } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Engine } from "tsparticles-engine";

interface HeroProps {}
export const Hero: React.FunctionComponent<HeroProps> = () => {
  const { isDarkmode } = useContext(ThemeContext);
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);
  const isMobile = window.innerWidth <= 820;
  return (
    <main
      className={`hero dark:bg-slate-950 bg-hero_bg relative mt-[4.8rem] lg:mt-[6rem]`}
    >
      <Particles
        className="inset-0 z-0 absolute"
        init={particlesInit}
        options={{
          fpsLimit: 1000,
          fullScreen: { enable: false },
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 5,
              },
              repulse: {
                distance: 150,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#a6c0ea",
            },
            links: {
              color: "#a6c0ea",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1500,
              },
              value: isMobile ? 50 : 100,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 4 },
            },
          },
          detectRetina: isMobile ? false : true,
        }}
      />
      <div className="sm:px-16 px-4 sm:py-24 py-10 flex flex-wrap gap-4 items-center justify-between">
        <div className="lg:basis-3/5 md:basis-[55%] basis-full flex flex-col sm:gap-7 gap-4 z-20">
          <p
            className={`text-[1.25rem] ${
              isDarkmode ? "text-primary_2" : "text-black"
            }`}
          >
            Hello 👋
          </p>
          <h1
            className={`md:text-5xl sm:text-4xl text-3xl font-bold ${
              isDarkmode ? "text-primary_2" : "text-black"
            }`}
          >
            I'm Ramadan Aramide
          </h1>
          <p className={isDarkmode ? "text-primary_2" : "text-black"}>
            I'm a Software Developer based in Nigeria, developing modern
            solutions with a customer-first approach. My passion lies in
            delivering seamless user experiences, ensuring web accessibility for
            all and building scalable optimized APIs.
          </p>
          <div className="flex gap-2 items-center group">
            <a
              href={
                "https://drive.google.com/file/d/1dybfJvslTV7LDM8i1f82dWMYooTCXbwn/view?usp=sharing"
              }
              target="_blank"
              className={`font-semibold ${
                isDarkmode ? "text-blue-400" : "text-blue-600"
              }`}
            >
              View my resumé
            </a>
            <span className="group-hover:translate-x-2 transition duration-700 ease-in-out">
              <FaArrowRightLong
                className={`${isDarkmode ? "fill-blue-400" : "fill-blue-600"}`}
              />
            </span>
          </div>
          <div>
            <div className="flex items-center gap-3 mt-5 mb-12">
              <a
                href="https://www.linkedin.com/in/ramadan-aramide-855289218/"
                target="_blank"
              >
                <LinkedInIcon />
              </a>
              <a href="https://twitter.com/abdu_rahman__" target="_blank">
                <TwitterIcon />
              </a>
              <a href="https://github.com/mister-abdurahman" target="_blank">
                <GithubIcon />
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
        </div>
        <div className="relative mx-auto">
          <figure className="relative border-8 ring-8 ring-slate-100 dark:ring-slate-200 border-blue-100 dark:border-blue-400 rounded-full lg:w-[20rem] lg:h-[20rem] md:w-[14rem] md:h-[14rem] sm:h-[20rem] sm:w-[20rem] h-[16rem] w-[16rem] bg-slate-400 overflow-clip z-10">
            <img
              className="absolute w-full h-full object-center object-cover"
              src={`${
                image ||
                "https:res.cloudinary.com/djatqa2lq/image/upload/v1716155887/profpic_b4xkc8.jpg"
              }`}
              // src="https://res.cloudinary.com/djatqa2lq/image/upload/v1716041886/PXL_20240218_184227481.PORTRAIT_rwzz8b.jpg"
              alt="profile image"
            />
          </figure>

          <span className="absolute lg:top-3 lg:right-3 top-1 right-1">
            <PurpleRects />
          </span>
          <span className="absolute lg:bottom-3 lg:left-3 bottom-1 left-1">
            <GoldRects />
          </span>
        </div>
      </div>
    </main>
  );
};
