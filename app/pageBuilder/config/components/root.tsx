import { ReactNode } from "react";

import { DefaultRootProps } from "@measured/puck";
import { Footer } from "./Footer";
import { Header } from "./Header";

export type RootProps = {
  children?: ReactNode;
  title: string;
} & DefaultRootProps;

function Root(props: RootProps) {
  const { children } = props;
  return (
    <>
      <Header editMode={true} />
      {children}
      <Footer>
        <Footer.List title="Section">
          <Footer.Link href="">Label</Footer.Link>
          <Footer.Link href="">Label</Footer.Link>
          <Footer.Link href="">Label</Footer.Link>
          <Footer.Link href="">Label</Footer.Link>
        </Footer.List>
        <Footer.List title="Section">
          <Footer.Link href="">Label</Footer.Link>
          <Footer.Link href="">Label</Footer.Link>
          <Footer.Link href="">Label</Footer.Link>
          <Footer.Link href="">Label</Footer.Link>
        </Footer.List>
        <Footer.List title="Section">
          <Footer.Link href="">Label</Footer.Link>
          <Footer.Link href="">Label</Footer.Link>
          <Footer.Link href="">Label</Footer.Link>
          <Footer.Link href="">Label</Footer.Link>
        </Footer.List>
        <Footer.List title="Section">
          <Footer.Link href="">Label</Footer.Link>
          <Footer.Link href="">Label</Footer.Link>
          <Footer.Link href="">Label</Footer.Link>
          <Footer.Link href="">Label</Footer.Link>
        </Footer.List>
      </Footer>
    </>
  );
}

export default Root;
