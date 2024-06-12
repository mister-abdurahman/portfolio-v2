import React, { useState } from "react";
import { EachProject } from "./EachProject";
import SectionHeading from "../UI/SectionHeader";
import healthBuddy from "../../assets/images/healthbuddy.jpg";
import sociopedia from "../../assets/images/sociopedia.jpg";
import worldwise from "../../assets/images/worldwise.jpg";
import wildoasis from "../../assets/images/wildoasis.jpg";

import popcorn from "../../assets/images/popcorn.jpg";
import quizzical from "../../assets/images/quizzical.jpg";
import tenzies from "../../assets/images/tenzies.jpg";
import faraway from "../../assets/images/faraway.jpg";
import classyweather from "../../assets/images/classyweather.jpg";
import the_wild_oasis from "../../assets/images/the_wild_oasis.jpg";
import { useLocation } from "react-router-dom";

interface ProjectProps {}

const projects = [
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
  {
    name: "Health Buddy",
    description:
      "An Health App for Patients to book appointments with doctors, see their last vitals details, doctor case note and see health related matters. This app as essential features such as authentication, responsiveness, data fetching and updating and so on",
    image:
      healthBuddy ||
      "https://res.cloudinary.com/djatqa2lq/image/upload/v1716306784/healthbuddy_fdaghu.png",
    url: "https://health-buddy-fe.vercel.app/",
  },
  {
    name: "World Wise",
    description:
      "Track your travels, map your movements, record your best tours all in one app. The LeafLet Js library was used for the map tiles, This app has a React front end and a Node backend",
    image:
      worldwise ||
      "https://res.cloudinary.com/djatqa2lq/image/upload/v1716306790/worldwise_d5tw6k.png",
    url: "https://worldwise-delta.vercel.app",
  },
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
