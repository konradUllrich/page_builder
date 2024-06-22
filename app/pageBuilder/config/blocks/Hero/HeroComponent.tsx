import { Section } from "../../components/Section";
import { Button } from "@/components/ui/button";
import clsx from "clsx";

export type HeroProps = {
  quote?: { index: number; label: string };
  title: string;
  description: string;
  align?: string;
  padding: string;
  image?: {
    mode?: "inline" | "background";
    url?: string;
  };
  buttons: {
    label: string;
    href: string;
    variant?: "primary" | "secondary";
    more?: { text: string }[];
  }[];
};

const HeroComponent = ({
  align,
  title,
  description,
  buttons,
  padding,
  image,
}: HeroProps) => {
  return (
    <Section
      padding={padding}
      // className={getClassName({
      //   left: align === "left",
      //   center: align === "center",
      //   hasImageBackground: image?.mode === "background",
      // })}
      className={clsx("")}
    >
      {image?.mode === "background" && (
        <>
          <div
            className={"absolute inset-0 bg-cover bg-no-repeat"}
            style={{
              backgroundImage: `url("${image?.url}")`,
            }}
          ></div>

          <div className={"bg-primary-300 absolute inset-0"}></div>
        </>
      )}

      <div className={"flex items-center relative"}>
        <div className={"flex flex-col gap-4 w-full"}>
          <h1 className="text-primary-900 text-5xl font-bold">{title}</h1>
          <p className={"text-lg text-gray-500"}>{description}</p>
          <div className={"flex gap-4"}>
            {buttons.map((button, i) => (
              <Button key={i}>{button.label}</Button>
            ))}
          </div>
        </div>

        {align !== "center" && image?.mode !== "background" && image?.url && (
          <div
            style={{
              backgroundImage: `url('${image?.url}')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              borderRadius: 24,
              height: 356,
              marginLeft: "auto",
              width: "100%",
            }}
          />
        )}
      </div>
    </Section>
  );
};

export default HeroComponent;
