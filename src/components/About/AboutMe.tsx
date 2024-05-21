import React from "react";
import image from "../../assets/profpic.jpg";
import { AnimatedText } from "../UI/AnimatedText";
import { GreenRects, PurpleRects } from "../../assets/icons/icons";
interface AboutMeProps {}
export const AboutMe: React.FunctionComponent<AboutMeProps> = () => {
  return (
    <div className="bg-bgImage_1 dark:bg-bgImage_dark flex flex-wrap flex-col lg:flex-row xl:p-24 md:py-20 md:px-12 sm:px-8 py-14 px-4 justify-between items-center gap-4">
      <div className="relative">
        <figure className="xl:w-[30rem] xl:h-[35rem] lg:w-[25rem] lg:h-[25rem] md:w-[20rem] md:h-[20rem] sm:w-[20rem] sm:h-[24rem] w-[17rem] h-[22rem] rounded-md overflow-clip relative">
          <img
            src={image}
            alt="aramide img"
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
          I am a Software Developer with 3 years of developement experience. I
          excel in creating pixel perfect full scale web applictaions utilizing
          edge cutting modern technlogies and tools such as React for the
          frontend and TailwindCSS for my styling, Redux/React-Query for state
          management, Node and MongoDB for scalable and optimized APIs.
        </p>
        <p>
          I am equipped with the tools to bring ideas ideas to life whilst
          considering optimization, modern design, accesibility, scalability and
          speed ⚡.
        </p>
        <p>
          Over the span of my 3 years of experience, I have worked on projects
          in the Education sector, Health sector and also on management systems.
          My experience in these different sectors has increased my knowledge
          and skill set to be able to deliver user friendly, modern, accesible
          web applications.
        </p>
        <p>
          When I'm off my computer, I'd rather spend time reading valued
          educational books or spend time with my family.
        </p>
      </div>
    </div>
  );
};
