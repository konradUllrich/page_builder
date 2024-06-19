import React from "react";

import { ComponentConfig } from "@measured/puck";
import { Section } from "../../components/Section";
import { cva } from "class-variance-authority";
import TextComponent from "./TextComponent";

export type TextProps = {
  align: "left" | "center" | "right";
  text?: string;
  padding?: string;
  size?: "s" | "m";
  color: "default" | "muted";
  maxWidth?: string;
};


export const Text: ComponentConfig<TextProps> = {
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
   return <TextComponent {...{align, color, text, size, padding, maxWidth}}/>
  },
};
