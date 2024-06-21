import clsx from "clsx";

import { Button } from "@/components/ui/button";

export type ButtonGroupProps = {
  align?: "left" | "center";
  buttons: { label: string; href: string; variant: "default" | "secondary" }[];
};

const ButtonGroupComponent = (props: ButtonGroupProps) => {
  const { buttons, align } = props;

  return (
    <div
      className={clsx("flex  flex-wrap gap-6", {
        "justify-center": align === "center",
      })}
    >
      {buttons.map((button, i) => (
        <Button key={i} variant={button.variant}>
          {button.label}
        </Button>
      ))}
    </div>
  );
};

export default ButtonGroupComponent;
