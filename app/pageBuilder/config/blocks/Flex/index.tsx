import React from "react";
import { ComponentConfig } from "@measured/puck";
import styles from "./styles.module.css";
import getClassNameFactory from "@/lib/get-class-name-factory";
import { Section } from "../../components/Section";

const getClassName = getClassNameFactory("Flex", styles);

export type FlexProps = {
  items: { minItemWidth?: number }[];
  minItemWidth: number;
};

export const Flex: ComponentConfig<FlexProps> = {
  fields: {
    items: {
      type: "array",
      arrayFields: {
        minItemWidth: {
          label: "Minimum Item Width",
          type: "number",

          min: 0,
        },
      },
      getItemSummary: (_, id) => `Item ${(id || 0) + 1}`,
    },
    minItemWidth: {
      label: "Minimum Item Width",
      type: "number",

      min: 0,
    },
  },
  defaultProps: {
    items: [{}, {}],
    minItemWidth: 356,
  },
  render: ({ items, minItemWidth, puck:{renderDropZone} }) => {
    return (
      <Section>
        <div className={getClassName()}>
          {items.map((item, idx) => (
            <div
              key={idx}
              className={getClassName("item")}
              style={{ minWidth: item.minItemWidth || minItemWidth }}
            >

{renderDropZone({zone:`item-${idx}` ,disallow:["Hero", "Logos", "Stats"]})}
              {/* <DropZone zone={`item-${idx}`} /> */}

            </div>
          ))}
        </div>
      </Section>
    );
  },
};
