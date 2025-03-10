const HeadingComponent = ({
  heading,
  subheading,
}: {
  heading?: string;
  subheading?: string;
}) => {
  return (
    <div className="title-wrapper mb-10 flex flex-col gap-4 items-center">
      <h2 className="uppercase text-xl text-center">{heading}</h2>
      <p className="text-textgray text-sm text-center">{subheading}</p>
    </div>
  );
};

export default HeadingComponent;
