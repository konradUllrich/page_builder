import { FSDB } from "file-system-db";
import { AppDataAdapter } from "./types";
import { string } from "slate";

const db = new FSDB("./db.json", false);
const filesdb = new FSDB("./filesdb.json", false);

const FakeDataAdapter: AppDataAdapter = {
  getPage: async (id) => {
    return new Promise((resolve) => {
      const data = db.get(id);
      resolve({ page: data });
    });
  },
  savePage: (id, data) => {
    return new Promise((resolve) => {
      db.set(id, data);
      resolve({ success: true });
    });
  },

  getMedia: () => {
    return new Promise((resolve) => {
      const data = filesdb.getAll();
      const items = data.map((i) => i.value);
      resolve(items);
    });
  },
};

export default FakeDataAdapter;
