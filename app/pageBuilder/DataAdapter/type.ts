import { Puck, Config, Data, usePuck } from "@measured/puck";

export type dataManipulationAdapterResult = {
  error?: string;
  success: boolean;
};
export interface IDataAdapter {
  getData: (id: string) => Promise<Data | null>;
  handleChange: (
    id: string,
    data: Data
  ) => Promise<dataManipulationAdapterResult>;
  handlePublish: (
    id: string,
    data: Data
  ) => Promise<dataManipulationAdapterResult>;
}

export type EditorData = Data;
