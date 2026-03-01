import React from "react";
import { AnimatedText } from "../UI/AnimatedText";
import { GreenRects, PurpleRects } from "../../assets/icons/icons";
interface AboutMeProps {}
export const AboutMe: React.FunctionComponent<AboutMeProps> = () => {
  return (
    <div className="bg-bgImage_1 dark:bg-bgImage_dark flex flex-wrap flex-col lg:flex-row xl:p-24 md:py-20 md:px-12 sm:px-8 py-14 px-4 justify-between items-center gap-4">
      <div className="relative">
        <figure className="xl:w-[30rem] xl:h-[35rem] lg:w-[25rem] lg:h-[25rem] md:w-[20rem] md:h-[20rem] sm:w-[20rem] sm:h-[24rem] w-[17rem] h-[22rem] rounded-md overflow-clip relative">
          <img
            src={`https://res.cloudinary.com/djatqa2lq/image/upload/v1716155887/profpic_b4xkc8.jpg`}
            alt="aramide photo"
            className="w-full h-full object-cover object-center"
          />
        </figure>
        <span className="absolute -top-5 -right-9 -z-10 dark:z-0">
          <GreenRects />
        </span>
        <span className="absolute -bottom-5 -left-9 -z-10 dark:z-0">
          <PurpleRects />
        </span>
      </div>
      <div className="basis-1/2 space-y-5 md:mt-12 mt-9 lg:mt-auto dark:text-primary_2">
        <AnimatedText
          once={true}
          className="font-semibold sm:text-2xl sm:leading-8 text-[1.6rem] leading-5"
          text="Meet Ramadan Aramide."
        />
        <p>
          I am a Full-Stack Engineer with 4 years of experience architecting high-performance SaaS solutions. I specialize in building pixel-perfect, production-ready applications using Angular or React and TailwindCSS for seamless user interfaces, paired with Node.js / Nestjs and MongoDB for robust, optimized APIs. By leveraging React-Query and Redux for React, I ensure complex state-driven applications remain responsive, scalable, and technically sound under heavy load.
        </p>
        <p>
          I transform visionary concepts into market-ready products by prioritizing performance, accessibility, and architectural scalability. I don’t just write code; I build sustainable digital foundations that allow startups to scale without the burden of technical debt.
        </p>
        <p>
          Having spent my career in the fast-paced SaaS industry, I have delivered mission-critical systems across the Health, Education, and Management sectors. My deep involvement in building multi-tenant ecosystems has sharpened my ability to solve complex business problems through code. I excel at translating diverse industry requirements into user-centric, accessible, and commercially viable software solutions that drive real-world impact.
        </p>
        <p>
          When I'm off my computer, I'd rather spend time reading valued
          educational books or spend time with my family.

          I believe a disciplined life outside the screen is the primary driver for the creative and high-impact engineering work I deliver.
        </p>
      </div>
    </div>
  );
};
