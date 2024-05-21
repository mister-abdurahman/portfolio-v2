import { useInView, motion } from "framer-motion";
import React, { useRef } from "react";
interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  duration?: number;
  staggerValue?: number;
}

export const AnimatedText: React.FunctionComponent<AnimatedTextProps> = ({
  text,
  className,
  once = true,
  duration,
  staggerValue,
}) => {
  const defaultAnimations = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: duration || 0.06,
      },
    },
  };
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: once });
  const isMobile = window.innerWidth <= 500;
  return (
    <motion.p
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{
        staggerChildren: isMobile && staggerValue ? staggerValue : 0.06,
      }}
      className={`text-3xl font-bold ${className}`}
    >
      {text.split(" ").map((word, index) => (
        <span key={index} style={{ display: "inline-block" }}>
          {word.split("").map((letter, idx) => (
            <motion.span
              style={{ display: "inline-block" }}
              variants={defaultAnimations}
              key={idx}
            >
              {letter}
            </motion.span>
          ))}
          <span style={{ display: "inline-block" }}>&nbsp;</span>
        </span>
      ))}
    </motion.p>
  );
};
