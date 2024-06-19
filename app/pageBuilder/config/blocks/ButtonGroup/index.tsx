
import React from "react";
import { ComponentConfig } from "@measured/puck";
import ButtonGroupComponent from "./ButtonGroupComponent";

export type ButtonGroupProps = {
  align?: 'left' | 'center';
  buttons: { label: string; href: string; variant: "default" | "secondary" }[];
};

export const ButtonGroup: ComponentConfig<ButtonGroupProps> = {
  //@ts-ignore
  label: "Button Group",
  fields: {
    buttons: {
      type: "array",
      getItemSummary: (item) => item.label || "Button",
      arrayFields: {
        label: { type: "text" },
        href: { type: "text", },
        variant: {
          type: "radio",
          options: [
            { label: "primary", value: "default" },
            { label: "secondary", value: "secondary" },
          ],
        },
      },
      defaultItemProps: {
        label: "Button",
        href: "#",
        variant: "default",

      },
    },
    align: {
      type: "radio",
      options: [
        { label: "left", value: "left" },
        { label: "center", value: "center" },
      ],
    },
  },
  defaultProps: {
    buttons: [{ label: "Learn more", href: "#", variant: "default" }],
  },
  render: ({ align, buttons }) => {
    return <ButtonGroupComponent align={align} buttons={buttons} />
  },
};
