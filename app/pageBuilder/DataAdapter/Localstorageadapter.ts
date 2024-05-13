import { Data } from "@measured/puck";
import { IDataAdapter, dataManipulationAdapterResult } from "./type";

const LocalStorageDataAdapter: IDataAdapter = {
  getData: (id) => {
    return new Promise<Data>((resolve, reject) => {
      const localData = localStorage.getItem(id);
      if (localData) {
        resolve(JSON.parse(localData));
      }
    });
  },
  handleChange: (id, data) => {
    return new Promise<dataManipulationAdapterResult>((resolve, reject) => {
      localStorage.setItem(id, JSON.stringify(data));
      resolve({ success: true });
    });
  },
  handlePublish: (id, data) => {
    return new Promise<dataManipulationAdapterResult>((resolve, reject) => {
      localStorage.setItem(id, JSON.stringify(data));
      resolve({ success: true });
    });
  },
};

export default LocalStorageDataAdapter;
