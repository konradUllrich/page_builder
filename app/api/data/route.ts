
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

import { FSDB } from 'file-system-db'
import { initialData } from "@/app/pageBuilder/config/initialData";

const content = 'Some content!';

const db = new FSDB("./db.json", false);

export async function GET(request: Request) {


  Object.entries(initialData).forEach(([key, value]) => {
    db.set(key, value)
  })


  // const data = await AppDataAdapter.savePage(
  //   "DEECEEA730A751A5C637EFA2A87435EC1E71544C",
  //   { content: [{ blu: "bli" }], root: {} }
  // );

  return NextResponse.json({});
}
