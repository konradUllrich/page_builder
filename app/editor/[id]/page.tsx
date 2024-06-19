"use client";
import Loader from "@/app/components/loader";
import PageBuilder from "@/app/pageBuilder";

import { getPage, savePage } from "@/app/data/actions";

import { useEffect, useState } from "react";
import { Data } from "@measured/puck";
import { PageBuilderData } from "@/app/pageBuilder/config";

export default function Home({ params }: { params: { id: string } }) {
  const id = params.id;

  const [data, setData] = useState<PageBuilderData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPage(id).then((r) => {
      console.log({r});
      if (r?.page) {
        setData(r.page);
      }
      setLoading(false);
    });
  }, [id]);

  
  

  const handleChange = (data: Data) => {
    return savePage(id, data).then(() => {
      console.log("saved");
    });
  };

  return (
    <main className=" min-h-screen  flex justify-center items-center ">
      <Loader show={loading} />
      {!loading && data && <PageBuilder data={data} onSave={handleChange} path={id} />}
    </main>
  );
}
