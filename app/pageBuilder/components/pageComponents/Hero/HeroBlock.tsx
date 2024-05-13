import { Config } from "@measured/puck";
import Hero from "./Hero";

export type HeroBlockFields = {};

const HeroBlock: Config["components"] = {
  Hero: {
    defaultProps: {
      header: "Hero",
    },
    fields: {
      header: {
        type: "text",
      },

      backgroundColor: {
        type: "select",
        options: [
          { value: "primary", label: "Primary" },
          { value: "secondary", label: "Secondary" },
        ],
      },
    },

    render: Hero,
  },
};

export default HeroBlock;
