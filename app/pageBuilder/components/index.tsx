import { Config } from "@measured/puck";

import HeroBlock from "./pageComponents/Hero/HeroBlock";
import RichTextBlock from "./pageComponents/RichText/RichTextBlock";

export const components: Config["components"] = {
  ...HeroBlock,
  ...RichTextBlock,
};
