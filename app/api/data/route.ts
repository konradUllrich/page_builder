import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
import { FSDB } from "file-system-db";
import {
  initialData,
  initialFileData,
} from "@/app/pageBuilder/config/initialData";

const db = new FSDB("./db.json", false);
const filesdb = new FSDB("./filesdb.json", false);

export async function GET(request: Request) {
  Object.entries(initialData).forEach(([key, value]) => {
    db.set(key, value);
  });

  Object.entries(initialFileData).forEach(([key, value]) => {
    filesdb.set(key, value);
  });

  // const data = await AppDataAdapter.savePage(
  //   "DEECEEA730A751A5C637EFA2A87435EC1E71544C",
  //   { content: [{ blu: "bli" }], root: {} }
  // );

  return NextResponse.json({});
}
