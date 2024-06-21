/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ComponentConfig } from "@measured/puck";

import dynamic from "next/dynamic";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import StatsComponent, { StatsProps } from "./StatsComponent";

const icons = Object.keys(dynamicIconImports).reduce((acc, iconName) => {
  //@ts-ignore
  const El = dynamic(dynamicIconImports[iconName]);

  return {
    ...acc,
    [iconName]: <El />,
  };
}, {});

const iconOptions = Object.keys(dynamicIconImports).map((iconName) => ({
  label: iconName,
  value: iconName,
}));

export const StatsConfig: ComponentConfig<StatsProps> = {
  fields: {
    items: {
      type: "array",
      getItemSummary: (item, i) => item.title || `Feature #${i}`,
      defaultItemProps: {
        title: "Title",
        description: "Description",
      },
      arrayFields: {
        title: { type: "text" },
        description: { type: "text" },
      },
    },
  },
  defaultProps: {
    items: [
      {
        title: "Stat",
        description: "1,000",
      },
    ],
  },
  render: ({ items }) => <StatsComponent {...{ items }} />,
};
