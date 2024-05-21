import React from "react";
import { EachProject } from "./EachProject";
import SectionHeading from "../UI/SectionHeader";

interface ProjectProps {}

const projects = [
  {
    name: "Wild Oasis",
    description:
      "An hotel admin management system for managing the bookings, cabins and customers operations in the organization. This app has features such as Pagination, Data Filtering, Sorting, Responsiveness, Dark Mode, Authentication, Data Fetching and Updating and so on.",
    image:
      "https://res.cloudinary.com/djatqa2lq/image/upload/v1716323393/wildoasis_fjk7uy.png",
    url: "https://wildoasis-01.netlify.app/",
  },
  {
    name: "Sociopedia",
    description:
      "A fullstack sociomedia app built with the MERN stack that mimicks your regular modern social media app. This app allows creating posts with images, following friends, liking posts and seeing the profile of other users. You would love it 😍",
    image:
      "https://res.cloudinary.com/djatqa2lq/image/upload/v1716306428/sociopedia_omcxjq.png",
    url: "https://sociopedia-frontend-ochre.vercel.app/",
  },
  {
    name: "Health Buddy",
    description:
      "An Health App for Patients to book appointments with doctors, see their last vitals details, doctor case note and see health related matters. This app as essential features such as authentication, responsiveness, data fetching and updating and so on",
    image:
      "https://res.cloudinary.com/djatqa2lq/image/upload/v1716306784/healthbuddy_fdaghu.png",
    url: "https://health-buddy-fe.vercel.app/",
  },
  {
    name: "World Wise",
    description:
      "Track your travels, map your movements, record your best tours all in one app. The LeafLet Js library was used for the map tiles, This app has a React front end and a Node backend",
    image:
      "https://res.cloudinary.com/djatqa2lq/image/upload/v1716306790/worldwise_d5tw6k.png",
    url: "https://worldwise-delta.vercel.app",
  },
];

export const Projects: React.FunctionComponent<ProjectProps> = () => {
  return (
    <div className="py-10 bg-bgImage_1 dark:bg-bgImage_dark pb-32">
      <SectionHeading sectionName="Selected Projects" />
      <div className="md:space-y-24 space-y-32">
        {projects.map((project, index) => (
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
