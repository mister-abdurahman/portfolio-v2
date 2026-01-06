import React, { useState } from "react";
import { EachProject } from "./EachProject";
import SectionHeading from "../UI/SectionHeader";
import sociopedia from "../../assets/images/sociopedia.jpg";
import wildoasis from "../../assets/images/wildoasis.jpg";
import redbud from "../../assets/images/redbud_show.png";
import coachconnect from "../../assets/images/coach-connect.png";
import tradit from "../../assets/images/tradit-mobile.png";
import kasieyatama from "../../assets/images/kasieyatama.png";
import jambonz from "../../assets/images/jambonz.png";

import popcorn from "../../assets/images/popcorn.jpg";
import quizzical from "../../assets/images/quizzical.jpg";
import tenzies from "../../assets/images/tenzies.jpg";
import faraway from "../../assets/images/faraway.jpg";
import classyweather from "../../assets/images/classyweather.jpg";
import redbud_admin from "../../assets/images/redbud_admin.jpg";
import the_wild_oasis from "../../assets/images/the_wild_oasis.jpg";
import hokfam from "../../assets/images/hokfam.png";
import { useLocation } from "react-router-dom";

interface ProjectProps {}

const projects = [
  {
    name: "Hok Clothing Store",
    description:
      "Designed and built a modern clothing e-commerce platform for a UK client, using Next.js and Tailwind for a responsive, high-speed frontend and Nest.js for a powerful backend. My work focused on creating a premium shopping experience with optimized page loads, intuitive navigation, and a secure architecture for long-term scalability.",
    image: hokfam,
    url: "https://shop.hokfam.com",
  },
  {
    name: "Coach Connect",
    description:
      "I enhanced the User interface of a peer-to-peer expertise exchange platform for a New Zealand client, using React, React Query, and Supabase. My work focused on creating a modern, responsive interface and integrating the front end with a scalable backend for seamless session management and user collaboration.",
    image: coachconnect,
    url: "https://www.coach-connect.xyz/",
  },
  {
    name: "Tradit (Mobile)",
    description:
      "I developed a cross-platform mobile app using React Native that allows users to securely sell gift cards. The app features a clean, intuitive UI for a seamless trading experience, ensuring fast and reliable transactions.",
    image: tradit,
    url: "coming soon",
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
    name: "Admin Ecommerce Management App (Internal)",
    description:
      "An Ecommerce store admin management system for managing the products, categories, brands and customers operations in the organization. This app has features such as Pagination, Data Filtering, Sorting, Responsiveness, Dark Mode, Authentication, Data Fetching and Updating and so on.",
    image: redbud_admin,
    url: "https://admin-redbud-ecommerce-56uq.vercel.app/",
  },
  {
    name: "Gadget Store Ecommerce",
    description:
      "A NextJs fullstack ecommerce app for customers to find items they would love to get, add them to cart and place an order for them while enjoying a beautiful shopping experience. They could also sign up to save thier shopping status and history and when next they come back they start from where they stopped. This app is a fullstack app and was built with NextJs and Supabase to ensure an optimized frontend and a robust and efficient backend database.",
    image: redbud,
    url: "https://redbud-ecommerce.vercel.app/",
  },
  {
    name: "Wild Oasis (Customer-Faced)",
    description:
      "A NextJs fullstack hotel app for customers to reserve bookings for different cabins, manage their reserves and other customer operations. This app is a fullstack app and was built with NextJs. It has features such as Google Authentication, Data Streaming, Image optimization, beautiful UI and many more amazing features.",
    image: the_wild_oasis,
    url: "https://the-wild-oasis-website-v1.vercel.app/",
  },
  {
    name: "Wild Oasis (Internal)",
    description:
      "An hotel admin management system for managing the bookings, cabins and customers operations in the organization. This app has features such as Pagination, Data Filtering, Sorting, Responsiveness, Dark Mode, Authentication, Data Fetching and Updating and so on.",
    image:
      wildoasis ||
      "https://res.cloudinary.com/djatqa2lq/image/upload/v1716323393/wildoasis_fjk7uy.png",
    url: "https://wildoasis-01.netlify.app/",
  },
  {
    name: "Sociopedia",
    description:
      "A fullstack sociomedia app built with the MERN stack that mimicks your regular modern social media app. This app allows creating posts with images, following friends, liking posts and seeing the profile of other users. You would love it 😍",
    image:
      sociopedia ||
      "https://res.cloudinary.com/djatqa2lq/image/upload/v1716306428/sociopedia_omcxjq.png",
    url: "https://sociopedia-frontend-ochre.vercel.app/",
  },
  // {
  //   name: "Health Buddy",
  //   description:
  //     "An Health App for Patients to book appointments with doctors, see their last vitals details, doctor case note and see health related matters. This app as essential features such as authentication, responsiveness, data fetching and updating and so on",
  //   image:
  //     healthBuddy ||
  //     "https://res.cloudinary.com/djatqa2lq/image/upload/v1716306784/healthbuddy_fdaghu.png",
  //   url: "https://health-buddy-fe.vercel.app/",
  // },
  // {
  //   name: "World Wise",
  //   description:
  //     "Track your travels, map your movements, record your best tours all in one app. The LeafLet Js library was used for the map tiles, This app has a React front end and a Node backend",
  //   image:
  //     worldwise ||
  //     "https://res.cloudinary.com/djatqa2lq/image/upload/v1716306790/worldwise_d5tw6k.png",
  //   url: "https://worldwise-delta.vercel.app",
  // },
];

const playGround = [
  {
    name: "Popcorn",
    description:
      "A movies website react app like the popular IMDB that displays movies based on your search with their information and other useful functionalities.",
    image: popcorn,
    url: "https://use-popcorn-v1.vercel.app",
  },
  {
    name: "Far Away",
    description:
      "Your personal assistant to ensure you take all your stuffs when planning for your vacation 🏖⛱.",
    image: faraway,
    url: "https://far-away-eight.vercel.app",
  },
  {
    name: "Quizzical",
    description:
      "A quizz app that asks questions across all fields of study to test your IQ and knowledge span.",
    image: quizzical,
    url: "https://react-quizzical-ts.vercel.app/",
  },
  {
    name: "Tenzies",
    description: "A React Tenzies Game. 🎲",
    image: tenzies,
    url: "https://react-tenzies-orcin-rho.vercel.app",
  },
  {
    name: "Classy Weather",
    description:
      "A react weather app to see real time weather forcast in different locations",
    image: classyweather,
    url: "https://classy-weather-nu.vercel.app",
  },
];

export const Projects: React.FunctionComponent<ProjectProps> = () => {
  const location = useLocation();
  const [projectsToShow] = useState(
    location.pathname === "/playground" ? playGround : projects
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
