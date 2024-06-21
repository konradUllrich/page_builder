import { Section } from "../../components/Section";
import { cva } from "class-variance-authority";

export type TextProps = {
  align: "left" | "center" | "right";
  text?: string;
  padding?: string;
  size?: "s" | "m";
  color: "default" | "muted";
  maxWidth?: string;
};

const textVariants = cva("", {
  variants: {
    size: {
      s: "text-sm",
      m: "text-base",
    },
    color: {
      default: "",
      muted: "text-neutral-400",
    },
    align: {
      left: "",
      center: "text-center",
      right: "text-right",
    },
  },
});

const TextComponent = ({
  align,
  color,
  text,
  size,
  padding,
  maxWidth,
}: TextProps) => {
  return (
    <Section padding={padding} maxWidth={maxWidth}>
      <p className={textVariants({ size, color, align })}>{text}</p>
    </Section>
  );
};

export default TextComponent;
