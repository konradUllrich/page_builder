import {
  EditorData,
  dataManipulationAdapterResult,
} from "../pageBuilder/DataAdapter/type";

export type PageContent = EditorData;

export type AppDataAdapter = {
  getPage: (id: string) => Promise<{ content: PageContent | null } | null>;
  savePage: (
    id: string,
    content: PageContent
  ) => Promise<dataManipulationAdapterResult>;
};
