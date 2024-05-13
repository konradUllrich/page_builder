"use client";

import { Puck, Config, Data } from "@measured/puck";
import "@measured/puck/puck.css";
import { components } from "./components";
import { useCallback } from "react";
import PageLayout from "../components/pageLayout";

const config: Config = {
  root: {
    fields: {
      title: { type: "text" },
      description: { type: "textarea" },
      id: {
        type: "custom",
        render: () => {
          return <div></div>;
        },
      },
    },
    defaultProps: {
      title: "Hello, world",
      description: "Lorem ipsum",
    },
    render: ({ children, title, description }) => {
      return (
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
          {children}
        </div>
      );
    },
  },
  components,
};

type PageBuilderProps = {
  initialData: Data | null;
  onChange: (data: Data) => void;
};

const _initialData = {
  content: [],
  root: {},
};
const PageBuilder = (props: PageBuilderProps) => {
  const { initialData, onChange } = props;

  const handlePublish = useCallback(
    (data: Data) => {
      onChange(data);
    },
    [onChange]
  );

  return (
    <Puck
      // overrides={{
      //   preview: ({ children }) => {
      //     return <PageLayout>{children}</PageLayout>;
      //   },
      // }}
      config={config}
      data={initialData || _initialData}
      onPublish={handlePublish}
      //onChange={onChange}
    />
  );
};

export default PageBuilder;
