import { getPage } from "../data/actions";

import { notFound } from "next/navigation";
import { puckConfig } from "../pageBuilder/config";
import { Render } from "@measured/puck/rsc";

export default async function Page() {
  const result = await getPage("home");

  if (!result?.page) {
    notFound();
  }
  return (
    <Render
      //@ts-ignore
      config={puckConfig}
      data={result.page}
    />
  );
}
