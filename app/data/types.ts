import { PageBuilderData } from "../pageBuilder/config";

export type AppDataAdapter = {
  getPage: (id: string) => Promise<{ page: PageBuilderData | null } | null>;
  savePage: (
    id: string,
    page: PageBuilderData
  ) => Promise<any>;
};
