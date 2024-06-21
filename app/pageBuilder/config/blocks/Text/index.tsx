import React from "react";

import { ComponentConfig } from "@measured/puck";

import TextComponent, { TextProps } from "./TextComponent";

export const TextConfig: ComponentConfig<TextProps> = {
  fields: {
    text: { type: "textarea" },
    size: {
      type: "select",
      options: [
        { label: "S", value: "s" },
        { label: "M", value: "m" },
      ],
    },
    align: {
      type: "radio",
      options: [
        { label: "Left", value: "left" },
        { label: "Center", value: "center" },
        { label: "Right", value: "right" },
      ],
    },
    color: {
      type: "radio",
      options: [
        { label: "Default", value: "default" },
        { label: "Muted", value: "muted" },
      ],
    },
    padding: { type: "text" },
    maxWidth: { type: "text" },
  },
  defaultProps: {
    align: "left",
    text: "Text",
    padding: "24px",
    size: "m",
    color: "default",
  },
  render: ({ align, color, text, size, padding, maxWidth }) => {
    return (
      <TextComponent {...{ align, color, text, size, padding, maxWidth }} />
    );
  },
};
