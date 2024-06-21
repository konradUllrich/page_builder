import React from "react";

import { ComponentConfig } from "@measured/puck";
import { spacingOptions } from "../../options";
import VerticalSpaceComponent from "./VerticalSpaceComponent";

export type VerticalSpaceProps = {
  size: string;
};

export const VerticalSpace: ComponentConfig<VerticalSpaceProps> = {
  label: "Vertical Space",
  fields: {
    size: {
      type: "select",
      options: spacingOptions,
    },
  },
  defaultProps: {
    size: "24px",
  },
  render: ({ size }) => <VerticalSpaceComponent {...{ size }} />,
};
