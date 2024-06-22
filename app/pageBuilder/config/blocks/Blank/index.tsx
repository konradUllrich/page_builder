import React from "react";
import { ComponentConfig } from "@measured/puck";

export type BlankProps = {};

export const Hero: ComponentConfig<BlankProps> = {
  fields: {},
  defaultProps: {},
  render: () => {
    return <div className=""></div>;
  },
};
