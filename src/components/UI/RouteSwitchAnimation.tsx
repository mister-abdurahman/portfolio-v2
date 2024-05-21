import React from "react";
import { motion } from "framer-motion";

interface RouteSwitchProps {
  isMobile: boolean;
  isPresent: boolean;
}

export const RouteSwitchAnimation: React.FunctionComponent<
  RouteSwitchProps
> = ({ isMobile, isPresent }) => {
  return (
    <motion.div
      initial={{ scaleX: 1 }}
      animate={{
        scaleX: 0,
        transition: { duration: isMobile ? 0.3 : 0.5, ease: "circOut" },
      }}
      exit={{
        scaleX: 1,
        transition: { duration: isMobile ? 0.3 : 0.5, ease: "circIn" },
      }}
      style={{ originX: isPresent ? 0.3 : 1 }}
      className={`fixed inset-0 bg-[#a6c0ea] dark:bg-[#3c7ade] z-[500] transition ease-in-out duration-800`}
    />
  );
};

// p@ssword
