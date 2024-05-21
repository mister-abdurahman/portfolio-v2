import React, { useContext } from "react";
import {
  GmailDarkIcon,
  GmailIcon,
  LinkedInContactIcon,
} from "../../assets/icons/icons";
import { FaWhatsapp } from "react-icons/fa";
import { ThemeContext } from "../../App";
interface FnProps {}
export const MeansOfContact: React.FunctionComponent<FnProps> = () => {
  const { isDarkmode } = useContext(ThemeContext);
  const contacts = [
    {
      icon: isDarkmode ? <GmailDarkIcon /> : <GmailIcon />,
      text: "Send me an email",
      linkDetails: (
        <a
          className="underline font-light text-sm text-gray-500"
          href="mailto:aramramadan7@gmail.com"
          target="_blank"
        >
          mailto:aramramadan7@gmail.com
        </a>
      ),
    },
    {
      icon: (
        <span className="bg-green-600 rounded-full flex items-center justify-center w-20 h-20">
          <FaWhatsapp className="w-8 h-8 fill-white" />
        </span>
      ),
      text: "Chat me on WhatsApp",
      linkDetails: (
        <a
          className="underline font-light text-sm text-gray-500"
          href="https://wa.link/cy8shs"
          target="_blank"
        >
          ramadan_aramide
        </a>
      ),
    },
    {
      icon: <LinkedInContactIcon />,
      text: "Connect with me on LinkedIn",
      linkDetails: (
        <a
          className="underline font-light text-sm text-gray-500"
          href="https://www.linkedin.com/in/ramadan-aramide-855289218/"
          target="_blank"
        >
          ramadan_aramide
        </a>
      ),
    },
  ];
  return (
    <div className="bg-hero_bg_2 dark:bg-slate-900 sm:py-24 py-16 sm:px-20 px-10">
      <div className="flex gap-8 justify-center flex-wrap">
        {contacts.map((each) => (
          <div className="flex flex-col gap-7 w-[20rem] h-[16rem] py-8 px-2 items-center bg-white dark:bg-slate-950 rounded-md shadow-md">
            <span>{each.icon}</span>
            <h5 className="text-[18px] text-gray-700 dark:text-slate-300">
              {each.text}
            </h5>
            <span className="dark:text-slate-400">{each.linkDetails}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
