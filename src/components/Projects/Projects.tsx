import React, { useState } from "react";
import { EachProject } from "./EachProject";
import SectionHeading from "../UI/SectionHeader";
import tradit from "../../assets/images/tradit-mobile.png";
import kasieyatama from "../../assets/images/kasieyatama.png";
import jambonz from "../../assets/images/jambonz.png";
import the_wild_oasis from "../../assets/images/the_wild_oasis.jpg";
import hokfam from "../../assets/images/hokfam.png";
import laundryflow from "../../assets/images/laundry_authpage_darkmode.png";
import surpluslink from "../../assets/images/surplus_image.png";

interface ProjectProps {}

const projects = [
  {
    name: "LaundryFlow",
    description:
      "Designed and engineered a comprehensive multi-tenant laundry SaaS ecosystem, featuring a React management dashboard, an Angular-based customer PWA, and a high-performance NestJS/MongoDB backend. I leveraged WebSockets for real-time order synchronization, Paystack for automated billing, and a modular architecture to ensure strict data isolation across thousands of independent tenants.",
    image: laundryflow,
    url: "https://laundryflow.live",
  },
  {
    name: "Hok Clothing Store",
    description:
      "Designed and built a modern clothing e-commerce platform for a UK client, using Next.js and Tailwind for a responsive, high-speed frontend and Nest.js for a powerful backend. My work focused on creating a premium shopping experience with optimized page loads, intuitive navigation, and a secure architecture for long-term scalability.",
    image: hokfam,
    url: "https://shop.hokfam.com",
  },
  {
    name: "Tradit (Mobile)",
    description:
      "I developed a cross-platform mobile and web app for a Gift card trading company using React Native that allows users to securely sell gift cards. The app features a clean, intuitive UI for a seamless trading experience, ensuring fast and reliable transactions.",
    image: tradit,
    url: "https://play.google.com/store/apps/details?id=com.abdurahman.tradeit",
  },
  {
    name: "Surpluslink",
    description:
      "Designed and built Surpluslink, a dynamic web platform using React and Tailwind CSS for a sleek, responsive frontend and Node.js with MySQL for a robust, data-driven backend. My work focused on developing a custom administrative portal that allows real-time management of blogs and brand data, ensuring the public website reflects live updates with high performance and a seamless user experience.",
    image: surpluslink,
    url: "https://surpluslink.co.uk",
  },
  {
    name: "Kasieyatama",
    description:
      "A full-stack printing service platform built with Next.js and Sanity, providing a complete end-to-end flow for customers and business owners. I designed and developed a custom admin dashboard that allows for seamless management of printing listings and customer submissions.",
    image: kasieyatama,
    url: "https://www.kasieyatama.com/",
  },
  {
    name: "Jambonz Chrome Extension (Official)",
    description:
      "I upgraded the UI/UX of a Chrome extension for a US-based client, ensuring it met modern design standards from a new Figma design. The project was built with a tech stack of React, TypeScript, and Tailwind CSS to ensure a performant and maintainable codebase.",
    image: jambonz,
    url: "https://chromewebstore.google.com/detail/jambonz-webrtc-phone/ooglcebddojjkdcfaplbhhjcdkpeiggi?hl=en-US&utm_source=ext_sidebar",
  },
  {
    name: "Wild Oasis (Customer-Faced)",
    description:
      "A NextJs fullstack hotel app for customers to reserve bookings for different cabins, manage their reserves and other customer operations. This app is a fullstack app and was built with NextJs. It has features such as Google Authentication, Data Streaming, Image optimization, beautiful UI and many more amazing features.",
    image: the_wild_oasis,
    url: "https://the-wild-oasis-website-v1.vercel.app/",
  }
];

// const playGround = [
//   {
//     name: "Popcorn",
//     description:
//       "A movies website react app like the popular IMDB that displays movies based on your search with their information and other useful functionalities.",
//     image: popcorn,
//     url: "https://use-popcorn-v1.vercel.app",
//   },
//   {
//     name: "Far Away",
//     description:
//       "Your personal assistant to ensure you take all your stuffs when planning for your vacation 🏖⛱.",
//     image: faraway,
//     url: "https://far-away-eight.vercel.app",
//   },
//   {
//     name: "Quizzical",
//     description:
//       "A quizz app that asks questions across all fields of study to test your IQ and knowledge span.",
//     image: quizzical,
//     url: "https://react-quizzical-ts.vercel.app/",
//   },
//   {
//     name: "Tenzies",
//     description: "A React Tenzies Game. 🎲",
//     image: tenzies,
//     url: "https://react-tenzies-orcin-rho.vercel.app",
//   },
//   {
//     name: "Classy Weather",
//     description:
//       "A react weather app to see real time weather forcast in different locations",
//     image: classyweather,
//     url: "https://classy-weather-nu.vercel.app",
//   },
// ];

export const Projects: React.FunctionComponent<ProjectProps> = () => {
  const [projectsToShow] = useState(
    projects
    // location.pathname === "/playground" ? playGround : projects,
  );
  return (
    <div className="py-10 bg-bgImage_1 dark:bg-bgImage_dark pb-32">
      <SectionHeading sectionName="Selected Projects" />
      <div className="md:space-y-24 space-y-32">
        {projectsToShow.map((project, index) => (
          <EachProject
            key={index}
            name={project.name}
            description={project.description}
            index={index + 1}
            image={project.image}
            url={project.url}
          />
        ))}
      </div>
    </div>
  );
};
