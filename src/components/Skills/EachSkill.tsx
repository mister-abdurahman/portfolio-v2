import React from "react";
import { AnimatedText } from "../UI/AnimatedText";
interface EachSkill {
  icon: JSX.Element;
  text: string;
}

export const EachSkill: React.FunctionComponent<EachSkill> = ({
  icon,
  text,
}) => {
  return (
    <div className="flex items-center gap-2">
      <div>{icon}</div>

      <AnimatedText
        text={text}
        className="text-sm font-semibold"
        once={true}
        duration={0}
        staggerValue={0.02}
      />
    </div>
  );
};
