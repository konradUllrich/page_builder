/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ComponentConfig } from "@measured/puck";

import { quotes } from "./quotes";
import HeroComponent, { HeroProps } from "./HeroComponent";

export const HeroConfig: ComponentConfig<HeroProps> = {
  fields: {
    quote: {
      type: "external",
      placeholder: "Select a quote",
      showSearch: true,
      filterFields: {
        author: {
          type: "select",
          options: [
            { value: "", label: "Select an author" },
            { value: "Mark Twain", label: "Mark Twain" },
            { value: "Henry Ford", label: "Henry Ford" },
            { value: "Kurt Vonnegut", label: "Kurt Vonnegut" },
            { value: "Andrew Carnegie", label: "Andrew Carnegie" },
            { value: "C. S. Lewis", label: "C. S. Lewis" },
            { value: "Confucius", label: "Confucius" },
            { value: "Eleanor Roosevelt", label: "Eleanor Roosevelt" },
            { value: "Samuel Ullman", label: "Samuel Ullman" },
          ],
        },
      },
      fetchList: async ({ query, filters }) => {
        await new Promise((res) => setTimeout(res, 500));
        return quotes
          .map((quote, idx) => ({
            index: idx,
            title: quote.author,
            description: quote.content,
          }))
          .filter((item) => {
            if (filters?.author && item.title !== filters?.author) {
              return false;
            }
            if (!query) return true;
            const queryLowercase = query.toLowerCase();
            if (item.title.toLowerCase().indexOf(queryLowercase) > -1) {
              return true;
            }
            if (item.description.toLowerCase().indexOf(queryLowercase) > -1) {
              return true;
            }
          });
      },
      mapRow: (item) => ({ title: item.title, description: item.description }),
      mapProp: (result) => {
        return { index: result.index, label: result.description };
      },
      getItemSummary: (item) => item.label,
    },
    title: { type: "text" },
    description: { type: "textarea" },
    buttons: {
      type: "array",
      min: 1,
      max: 4,
      getItemSummary: (item) => item.label || "Button",
      arrayFields: {
        label: { type: "text" },
        href: { type: "text" },
        variant: {
          type: "select",
          options: [
            { label: "primary", value: "primary" },
            { label: "secondary", value: "secondary" },
          ],
        },
      },
      defaultItemProps: {
        label: "Button",
        href: "#",
      },
    },
    align: {
      type: "radio",
      options: [
        { label: "left", value: "left" },
        { label: "center", value: "center" },
      ],
    },
    image: {
      type: "object",
      objectFields: {
        url: { type: "text" },
        mode: {
          type: "radio",
          options: [
            { label: "inline", value: "inline" },
            { label: "background", value: "background" },
          ],
        },
      },
    },
    padding: { type: "text" },
  },
  defaultProps: {
    title: "Hero",
    align: "left",
    description: "Description",
    buttons: [{ label: "Learn more", href: "#" }],
    padding: "64px",
  },

  resolveData: async ({ props }, { changed }) => {
    if (!props.quote)
      return { props, readOnly: { title: false, description: false } };

    if (!changed.quote) {
      return { props };
    }
    await new Promise((resolve) => setTimeout(resolve, 500));

    return {
      props: {
        title: quotes[props.quote.index].author,
        description: quotes[props.quote.index].content,
      },
      readOnly: { title: true, description: true },
    };
  },
  //@ts-ignore
  resolveFields: async (data, { fields }) => {
    if (data.props.align === "center") {
      return {
        ...fields,
        image: undefined,
      };
    }

    return fields;
  },
  render: ({ align, title, description, buttons, padding, image }) => (
    <HeroComponent
      {...{ align, title, description, buttons, padding, image }}
    />
  ),
};
