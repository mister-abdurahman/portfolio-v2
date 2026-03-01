import { useIsPresent } from "framer-motion";
import React, { useEffect } from "react";
import { Header } from "../components/UI/Header";
import { PageHero } from "../components/UI/PageHero";
import { EachProject } from "../components/Projects/EachProject";
import { Skills } from "../components/Skills/Skills";
import { Contact } from "../components/UI/Contact";
import { RouteSwitchAnimation } from "../components/UI/RouteSwitchAnimation";
import { HiRocketLaunch } from "react-icons/hi2";
import SectionHeading from "../components/UI/SectionHeader";
import laundryadmin from "../assets/images/laundry_dashboard_lightmode.png"
import laundrycustomer from "../assets/images/laundryflow customer app compilation image.png";
import laundrylanding from "../assets/images/laundry_landing_image.png";
import laundryauthpage from "../assets/images/laundry_authpage_darkmode.png";

export const Startups: React.FunctionComponent = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  const isPresent = useIsPresent();
  const isMobile = window.innerWidth <= 900;

  const laundryFlowProjects = [
    {
      name: "LaundryFlow Management Software",
      description: "Architected and engineered a robust B2B multi-tenant dashboard using React, React Query, and Axios to manage complex, high-volume laundry operations. I implemented a sophisticated Role-Based Access Control (RBAC) system (Owner, Admin, Staff) and integrated WebSockets for real-time order processing and status synchronization. The platform features a deep Paystack integration for automated subscription billing, focusing on operational transparency, data integrity, and high-concurrency performance for business owners.",
      image: laundryadmin,
      url: "https://app.laundryflow.live"
    },
    {
      name: "LaundryFlow Customer Portal",
      description: "Developed a high-performance Progressive Web App (PWA) using Angular, designed to provide a frictionless, \"zero-login\" experience for end-users via secure magic-link authentication. The app leverages a streamlined interface for pickup requests and invoice management. By focusing on a mobile-first PWA strategy, I delivered a native-app feel with home-screen installability, significantly increasing customer retention and ease of use.",
      image: laundrycustomer,
      url: "https://client.laundryflow.live"
    },
    {
      name: "LaundryFlow Landing Page",
      description: "Built a high-conversion landing page and automated onboarding flow that serves as the primary acquisition channel for the SaaS platform. Implementing optimized SEO and lightning-fast load times, the site handles tenant registration and initial configuration, showcasing a seamless bridge between marketing-site lead generation and functional software-as-a-service delivery.",
      image: laundrylanding,
      url: "https://laundryflow.live"
    },
    {
      name: "NestJS Multitenant Backend System",
      description: "Designed and engineered a high-performance, modular Multi-Tenant API on MongoDB, architected for infinite horizontal scaling and strict data isolation across thousands of independent businesses. The system is protected by a sophisticated security stack, including AuthGuards, RoleGuards, and SubscriptionGuards that dynamically manage feature access tied to a seamless Paystack payment integration. To ensure a truly reactive user experience, I integrated WebSockets for real-time data synchronization across all apps and an automated Email Service for transactional workflows, creating a robust, full-cycle backbone optimized for 2026 production standards.",
      image: laundryauthpage,
      url: "https://app.laundryflow.live"
    }
  ];

  return (
    <div className="" id="startups">
      <Header />
      <PageHero
        topIcon={
          <HiRocketLaunch className="w-8 h-8 fill-blue-800 dark:fill-blue-200" />
        }
        topText="STARTUPS"
        bigText="Engineering a Scalable Multi-Tenant SaaS: From Vision to Launch"
        bottomPart={
          <span>
            As a co-founder and lead engineer, I single-handedly built a comprehensive 3-tier laundry management ecosystem, seamlessly integrating intricate business logic with an intuitive user experience.
          </span>
        }
      />

      <section className="py-6 sm:py-12 bg-white dark:bg-slate-950">
        <SectionHeading sectionName="The Ecosystem" />
        <div className="md:space-y-24 space-y-32 mt-4">
          {laundryFlowProjects.map((project, index) => (
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
      </section>

      <section className="py-20 lg:px-24 md:px-20 sm:px-12 px-5 bg-hero_bg dark:bg-slate-900 overflow-hidden flex justify-center">
        <div className="max-w-4xl text-center">
          <SectionHeading sectionName="Innovation & Speed" />
          <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            Rapid Scaling through AI-Driven Engineering. People often ask how a single developer can build such a robust platform in record time. The answer lies in my "AI-first" development methodology. By strategically integrating advanced tools like Cursor, Lovable, and Antigravity into my workflow, I've reduced the development lifecycle by over 60%. This approach allows me to focus on high-level architecture and system optimization while leveraging AI to handle boilerplate and accelerate deployment speeds without compromising on code quality.
          </p>
        </div>
      </section>

      <section className="py-20 lg:px-24 md:px-20 sm:px-12 px-5 bg-white dark:bg-slate-950">
        <SectionHeading sectionName="Milestones" />
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-blue-50 dark:bg-slate-900 border border-blue-100 dark:border-slate-800">
            <h4 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">Full-Cycle Ownership</h4>
            <p className="text-slate-600 dark:text-slate-400">Managed everything from initial database schema design to final deployment and infrastructure scaling.</p>
          </div>
          <div className="p-8 rounded-2xl bg-blue-50 dark:bg-slate-900 border border-blue-100 dark:border-slate-800">
            <h4 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">PWA Implementation</h4>
            <p className="text-slate-600 dark:text-slate-400">Developed a mobile-first experience that allows customers to "install" the app without the overhead of App Store fees.</p>
          </div>
          <div className="p-8 rounded-2xl bg-blue-50 dark:bg-slate-900 border border-blue-100 dark:border-slate-800">
            <h4 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">Automated Communication</h4>
            <p className="text-slate-600 dark:text-slate-400">Integrated robust email triggers via Resend to keep customer retention high.</p>
          </div>
        </div>
      </section>

      <Skills />
      <Contact />
      <RouteSwitchAnimation isMobile={isMobile} isPresent={isPresent} />
    </div>
  );
};
