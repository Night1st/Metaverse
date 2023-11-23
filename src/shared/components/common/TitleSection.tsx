interface Props {
  title: string;
  description: string;
}
const TitleSection = (data: Props) => {
  return (
    <div className="w-full flex flex-col gap-3 mt-20 text-center">
      <p className="text-[#1B3864] text-6xl ">{data.title}</p>
      <h1 className="text-xl">{data.description}</h1>
    </div>
  );
};

export default TitleSection;
