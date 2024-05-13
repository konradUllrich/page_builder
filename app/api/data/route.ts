import AppDataAdapter from "@/app/data";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const data = await AppDataAdapter.savePage(
    "DEECEEA730A751A5C637EFA2A87435EC1E71544C",
    { content: [{ blu: "bli" }], root: {} }
  );

  return NextResponse.json(data);
}
