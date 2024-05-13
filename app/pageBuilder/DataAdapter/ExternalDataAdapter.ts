"use server";

import { IDataAdapter } from "./type";
import AppDataAdapter from "@/app/data";

const ExternalDataAdapter: IDataAdapter = {
  getData: async (id) => {
    "use server";
    return AppDataAdapter.getPage(id).then((res) => (res ? res.content : null));
  },

  handleChange: async (id, data) => AppDataAdapter.savePage(id, data),
  handlePublish: async (id, data) => AppDataAdapter.savePage(id, data),
};

export default ExternalDataAdapter;
