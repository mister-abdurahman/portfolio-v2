import React, { useContext, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ThemeContext } from "../../App";

interface ContactDialogProps {
  open: boolean;
  onClose: () => void;
}

export const ContactDialog: React.FunctionComponent<ContactDialogProps> = ({
  open,
  onClose,
}) => {
  const { isDarkmode } = useContext(ThemeContext);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [open]);

  const actions = [
    {
      text: "Send an email",
      href: "mailto:aramramadan7@gmail.com",
      icon: <MdEmail className="w-5 h-5 fill-white" />,
      className: "bg-rose-600",
    },
    {
      text: "Message on WhatsApp",
      href: "https://wa.link/cy8shs",
      icon: <FaWhatsapp className="w-5 h-5 fill-white" />,
      className: "bg-green-600",
    },
  ];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="contact-dialog"
          className="fixed inset-0 z-[600] flex items-center justify-center bg-black/50 px-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { ease: "easeIn" } }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="flex flex-col gap-6 items-center bg-white dark:bg-slate-950 rounded-md shadow-md sm:p-10 p-7 sm:w-96 w-full"
          >
            <h3 className="text-xl font-bold text-gray-700 dark:text-slate-300 text-center">
              Get in touch
            </h3>
            <div className="flex flex-col gap-4 w-full">
              {actions.map((each) => (
                <a
                  key={each.text}
                  href={each.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`${each.className} flex items-center justify-center gap-3 px-6 py-3 text-sm rounded-full text-white`}
                >
                  {each.icon}
                  <span>{each.text}</span>
                </a>
              ))}
            </div>
            <button
              onClick={onClose}
              className={`text-sm font-light ${
                isDarkmode ? "text-slate-400" : "text-gray-500"
              } hover:text-blue-600`}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
