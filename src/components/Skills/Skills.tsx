import React from "react";
import {
  FigmaIcon,
  FirebaseIcon,
  GitIcon,
  HtmlIcon,
  JavascriptIcon,
  MaterialUiIcon,
  NetlifyIcon,
  ReactIcon,
  ReduxIcon,
  TailwindIcon,
  TypescriptIcon,
  VercelIcon,
  WebpackIcon,
} from "../../assets/icons/icons";
import { EachSkill } from "./EachSkill";
import {
  SiChakraui,
  SiExpress,
  SiMongodb,
  SiShadcnui,
  SiSupabase,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import SectionHeading from "../UI/SectionHeader";
import { TbBrandNextjs, TbBrandReactNative } from "react-icons/tb";

interface SkillsProps {}

const progLang = [
  { icon: <TypescriptIcon />, text: "Typescript" },
  { icon: <JavascriptIcon />, text: "Javascript" },
  { icon: <HtmlIcon />, text: "HTML" },
];
const libFram = [
  { icon: <ReactIcon />, text: "React" },
  { icon: <ReduxIcon />, text: "Redux" },
  { icon: <TbBrandNextjs className="w-6 h-6" />, text: "NextJs" },
  { icon: <TailwindIcon />, text: "Tailwind" },
  {
    icon: <TbBrandReactNative className="w-6 h-6 text-blue-600" />,
    text: "React Native",
  },
  {
    icon: <SiChakraui className="w-6 h-6 fill-[#319795]" />,
    text: "Chakra UI",
  },
  { icon: <MaterialUiIcon />, text: "Material UI" },
  { icon: <SiShadcnui />, text: "Shadcn UI" },
  { icon: <SiExpress className="w-6 h-6 fill-[#1a2020]" />, text: "Express" },
];
const toolsSkills = [
  {
    text: "Git",
    icon: <GitIcon />,
  },
  {
    text: "Firebase",
    icon: <FirebaseIcon />,
  },
  {
    text: "Supabase",
    icon: <SiSupabase className="w-5 h-5 fill-[#3ECF8E]" />,
  },
  {
    text: "Netlify",
    icon: <NetlifyIcon />,
  },
  {
    text: "Vercel",
    icon: <VercelIcon />,
  },
  {
    text: "Webpack",
    icon: <WebpackIcon />,
  },
  {
    text: "MongoDB",
    icon: <SiMongodb className="w-5 h-5 fill-[#47A248]" />,
  },
  {
    text: "NodeJs",
    icon: <FaNodeJs className="w-5 h-5 fill-[#339933]" />,
  },
  {
    text: "Figma",
    icon: <FigmaIcon />,
  },
];

export const Skills: React.FunctionComponent<SkillsProps> = () => {
  return (
    <div className="py-10 sm:py-16 bg-hero_bg dark:bg-slate-950 sm:px-20 px-6">
      <SectionHeading sectionName="Skills" />
      <section className="flex flex-wrap justify-between md:mt-auto mt-4 dark:text-primary_2 sm:space-y-0 space-y-6">
        <div className="">
          <h4 className="font-semibold text-lg">Programming Languages</h4>
          <div className="md:grid md:grid-cols-2 flex flex-wrap lg:gap-8 md:gap-7 sm:gap-6 gap-4 md:mt-6 mt-3">
            {progLang.map((each, i) => (
              <EachSkill key={i} icon={each.icon} text={each.text} />
            ))}
          </div>
        </div>
        <div className="">
          <h4 className="font-semibold text-lg">Libraries & Frameworks</h4>
          <div className="md:grid md:grid-cols-2 flex flex-wrap lg:gap-8 md:gap-7 sm:gap-6 gap-4 md:mt-6 mt-3">
            {libFram.map((each, i) => (
              <EachSkill key={i} icon={each.icon} text={each.text} />
            ))}
          </div>
        </div>
        <div className="">
          <h4 className="font-semibold text-lg">Tools & Platforms</h4>
          <div className="md:grid md:grid-cols-3 flex flex-wrap lg:gap-8 md:gap-7 sm:gap-6 gap-4 md:mt-6 mt-3">
            {toolsSkills.map((each, i) => (
              <EachSkill key={i} icon={each.icon} text={each.text} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
