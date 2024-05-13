"use server";

import { dataManipulationAdapterResult } from "../pageBuilder/DataAdapter/type";
import { PageContent, AppDataAdapter } from "./types";

//const url = process.env.INTREXX_ENDPOINT_URL as string;

const url =
  "http://localhost:1337/api/app/3EEE93A48F5D4A86AB142EC0BDFDA527C0F0AA21/cms";
const key = "ixa_1KEGbBe5qLdsb7uG8NzUXsze5iTFP5jZY1cB7L";

async function fetchIntrexx<T extends any = any>({
  action,
  pageId,
  content,
}: {
  action: "getPage" | "savePage";
  pageId: string;
  content?: PageContent;
}) {
  console.log("fetch Intrexx", {
    url,
    action,
    pageId,
    apikey: process.env.INTREXX_API_KEY,
  });
  const searchParams = new URLSearchParams({ action, pageId });
  const searchString = searchParams.toString();

  const response = await fetch(`${url}?${searchString}`, {
    method: "POST",
    headers: {
      "X-API-KEY": key,
      "content-type": "application/json",
    },
    body: JSON.stringify({ bla: "bla", content }),
  });
  const result = await response.json();
  return result as T;
}

export const getPage = async (id: string) => {
  "use server";
  const res = await fetchIntrexx<{ content: string }>({
    pageId: id,
    action: "getPage",
  });

  return {
    content: res?.content ? (JSON.parse(res.content) as PageContent) : null,
  };
};

export const savePage = (id: string, content: any) => {
  return fetchIntrexx<dataManipulationAdapterResult>({
    pageId: id,
    action: "savePage",
    content,
  });
};
