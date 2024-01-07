interface Props {
  title: string;
  description: string;
  className?: string;
  color?: string;
}
const TitleSection = (data: Props) => {
  const currentColor = data.color ? data.color : '#1B3864';
  return (
    <div className={`w-full flex flex-col gap-3 text-center items-center justify-center ${data.className}`}>
      <p className={`${data.color ? `text-${currentColor}` : `text-[${currentColor}]`} text-4xl font-bold`}>{data.title}</p>
      <div className={`w-28 h-1 bg-[${currentColor}]`}></div>
      <h1 className='text-2xl'>{data.description}</h1>
    </div>
  );
};

export default TitleSection;
