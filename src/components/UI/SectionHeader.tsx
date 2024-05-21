interface SectionHeadingProps {
  sectionName: string;
}

const SectionHeading: React.FunctionComponent<SectionHeadingProps> = ({
  sectionName,
}) => {
  return (
    <div className="relative text-center pb-8">
      <h1 className="text-center font-bold text-3xl dark:text-primary_2 -mb-2">
        {sectionName}
      </h1>
      <span className="inline-block rounded-md bg-[#bfc7d7] h-1 w-12"></span>
    </div>
  );
};

export default SectionHeading;
