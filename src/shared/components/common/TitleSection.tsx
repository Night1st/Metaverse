interface Props {
  title: string;
  description: string;
}
const TitleSection = (data: Props) => {
  return (
    <div className="w-full flex flex-col gap-3 mt-5">
      <p className="text-[var(--blue-color-300)] text-3xl">{data.title}</p>
      <h1 className="text-xl">{data.description}</h1>
    </div>
  );
};

export default TitleSection;
