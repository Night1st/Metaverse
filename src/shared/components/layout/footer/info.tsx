import Link from "next/link";

interface Props {
  title: string;
  info: string[];
}
const InforFooter = ({ title, info }: Props) => {
  return (
    <ul className="flex flex-col justify-end items-start ">
      <h1 className="text-2xl">{title}</h1>
      {info.map((item, inx) => (
        <Link href={"#"} key={inx}>
          <li>{item}</li>
        </Link>
      ))}
    </ul>
  );
};

export default InforFooter;
