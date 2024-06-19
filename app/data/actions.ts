"use server";
import FakeDataAdapeter from "./FakeDataAdapter";

const adapter = FakeDataAdapeter

export const getPage = async (id: string) => {
  "use server";
  return adapter.getPage(id)
};

export const savePage = (id: string, content: any) => {
  "use server";
  return adapter.savePage(id, content)
};
