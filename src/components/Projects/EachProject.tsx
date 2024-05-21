import React, { useEffect, useState } from "react";
import { Variants, motion } from "framer-motion";
import { AnimatedText } from "../UI/AnimatedText";
import { MdOutlineAdsClick } from "react-icons/md";

interface EachProject {
  name: string;
  description: string;
  image: string;
  url: string;
  index: number;
}

const cardVariants: Variants = {
  offscreen: {
    y: 400,
  },
  onscreen: {
    y: 50,
    rotate: -4,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0,
      stiffness: 100,
    },
  },
};

const cardVariantsInvert: Variants = {
  offscreen: {
    y: 400,
  },
  onscreen: {
    y: 50,
    rotate: 4,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0,
      stiffness: 100,
    },
  },
};

export const EachProject: React.FunctionComponent<EachProject> = ({
  name,
  description,
  image,
  url,
  index,
}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
  // const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

  useEffect(() => {
    window.addEventListener("resize", () =>
      setIsMobile(window.innerWidth <= 900)
    );
    return () =>
      window.removeEventListener("resize", () =>
        setIsMobile(window.innerWidth <= 900)
      );
  }, [isMobile]);
  // const isMobile = window.innerWidth <= 768;
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      exit="offscreen"
      viewport={{ once: true, amount: 0.8 }}
      className="flex md:flex-auto md:flex-nowrap flex-wrap gap-6 items-center"
    >
      <motion.div
        variants={index % 2 === 0 ? cardVariants : cardVariantsInvert}
        className="relative md:w-[72rem] md:h-[22rem] px-4 pt-4  bg-blue-700 dark:bg-blue-200 md:basis-2/5 basis-[90%] sm:h-[28rem] h-[16rem]"
      >
        <img
          src={image}
          className="w-full h-full object-cover"
          alt="project image"
        />
      </motion.div>

      <div
        className={`md:basis-3/5 basis-full space-y-6 dark:text-primary_2 ${
          isMobile
            ? "order-first sm:px-12 px-5"
            : index % 2 === 0
            ? "order-first pl-8"
            : "order-last"
        }`}
      >
        <AnimatedText
          className="px-4"
          text={name}
          once={false}
          duration={isMobile ? 0 : 0.05}
        />
        <p className="px-4">{description}</p>
        <a
          href={url}
          target="_blank"
          className="text-sm font-semibold flex items-center gap-2 px-4 w-fit"
        >
          View more details{" "}
          <span>
            <MdOutlineAdsClick className="w-4 h-4" />
          </span>
        </a>
      </div>
    </motion.div>
  );
};
