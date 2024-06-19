
import { FSDB } from 'file-system-db'
import { AppDataAdapter } from "./types";

const db = new FSDB("./db.json", false);

const FakeDataAdapter: AppDataAdapter = {
  getPage: async (id) => {
    return new Promise((resolve) => {
      const data = db.get(id)
      resolve({page:data})
    })
  },
  savePage: (id, data) => {
    return new Promise((resolve) => {
      db.set(id, data)
      resolve({ success: true });
    })
  },

};

export default FakeDataAdapter;
