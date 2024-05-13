import { backgroundColor } from "../../types";
import clsx from "clsx";

type HeroProps = {
  header: string;
} & backgroundColor;

const Hero = (props: HeroProps) => {
  const { header, backgroundColor = "primary" } = props;

  return (
    <div
      className={clsx({
        "bg-primary": backgroundColor === "primary",
        "bg-secondary": backgroundColor === "secondary",
      })}
    >
      <div className="container pt-9 pb-9">
        <h1 className="text-5xl font-bold">{header}</h1>
      </div>
    </div>
  );
};

export default Hero;
