import { PageBuilderData } from "../pageBuilder/config";

export type PuckFile = { url: string };

export type AppDataAdapter = {
  getPage: (id: string) => Promise<{ page: PageBuilderData | null } | null>;
  savePage: (id: string, page: PageBuilderData) => Promise<any>;
  getMedia: (params: { type: "image" | "file" }) => Promise<PuckFile[]>;
};
