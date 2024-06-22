import { type Config, type Data } from "@measured/puck";
import { ButtonGroupConfig } from "./blocks/ButtonGroup";
import { CardConfig } from "./blocks/Card";
import { ColumnsConfig } from "./blocks/Columns";
import { HeroConfig } from "./blocks/Hero";
import { HeadingConfig } from "./blocks/Heading";
import { FlexConfig, FlexProps } from "./blocks/Flex";
// import { Logos, LogosProps } from "./blocks/Logos";
import { StatsConfig } from "./blocks/Stats";
import { TextConfig } from "./blocks/Text";
import { VerticalSpace, VerticalSpaceProps } from "./blocks/VerticalSpace";

import Root, { RootProps } from "./components/root";
import { HeadingProps } from "./blocks/Heading/HeadingComponent";
import { HeroProps } from "./blocks/Hero/HeroComponent";
import { CardProps } from "./blocks/Card/CardComponent";
import { ColumnsProps } from "./blocks/Columns/ColumnsComponent";
import { StatsProps } from "./blocks/Stats/StatsComponent";
import { TextProps } from "./blocks/Text/TextComponent";
import { ButtonGroupProps } from "./blocks/ButtonGroup/ButtonGroupComponent";
import ImageComponent, { ImageProps } from "./blocks/Image/ImageComponent";
import { ImageConfig } from "./blocks/Image";

export type { RootProps } from "./components/root";

export type Props = {
  ButtonGroup: ButtonGroupProps;
  Card: CardProps;
  Columns: ColumnsProps;
  Hero: HeroProps;
  Heading: HeadingProps;
  Flex: FlexProps;
  // Logos: LogosProps;
  Stats: StatsProps;
  Text: TextProps;
  VerticalSpace: VerticalSpaceProps;
  Image: ImageProps;
};

export type PageBuilderData = Data<Props>;
export type UserConfig = Config<
  Props,
  RootProps,
  "layout" | "typography" | "interactive"
>;

export const puckConfig: UserConfig = {
  root: {
    defaultProps: {
      title: "My Page",
      children: undefined,
    },
    render: ({ children, title, puck }) => (
      <Root title={title || ""} puck={puck}>
        {children}
      </Root>
    ),
  },
  categories: {
    layout: {
      components: ["Columns", "Flex", "VerticalSpace"],
    },
    typography: {
      components: ["Heading", "Text"],
    },
    interactive: {
      title: "Actions",
      components: ["ButtonGroup"],
    },
  },
  components: {
    ButtonGroup: ButtonGroupConfig,
    Card: CardConfig,
    Columns: ColumnsConfig,
    Hero: HeroConfig,
    Heading: HeadingConfig,
    Flex: FlexConfig,
    Image: ImageConfig,
    // Logos,
    Stats: StatsConfig,
    Text: TextConfig,
    VerticalSpace: VerticalSpace,
  },
};

export default puckConfig;
