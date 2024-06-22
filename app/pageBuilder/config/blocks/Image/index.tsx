"use client";

import React, { useEffect, useState } from "react";
import { ComponentConfig, CustomField, Button } from "@measured/puck";
import ImageComponent, { ImageProps } from "./ImageComponent";

import { getMedia } from "@/app/data/actions";
import {
  DialogHeader,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { PuckFile } from "@/app/data/types";
import Image from "next/image";

const image: CustomField<string> = {
  type: "custom",
  render: () => {
    return <ImageSelect />;
  },
};

export const ImageConfig: ComponentConfig<ImageProps> = {
  fields: {
    title: { type: "text" },
    image,
  },

  render: ({ puck, id, ...rest }) => <ImageComponent {...rest} />,
};

const ImageSelect = () => {
  return (
    <Dialog>
      <DialogTrigger>select Image</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>select Image</DialogTitle>
          <ImageList />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

const ImageList = () => {
  const [files, setFiles] = useState<PuckFile[]>([]);
  useEffect(() => {
    getMedia({ type: "image" }).then((data) => {
      setFiles(data);
    });
  }, []);

  console.log(files);

  return (
    <div>
      <ul>
        {files.map((i) => (
          <li key={i.url}>
            <div className=" w-40 h-40 relative">
              <Image src={i.url} alt="" fill></Image>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
