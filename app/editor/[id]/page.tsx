"use client";
import Loader from "@/app/components/loader";
import PageBuilder from "../../pageBuilder/PageBuilder";

import { getPage, savePage } from "@/app/data/actions";
import { EditorData } from "@/app/pageBuilder/DataAdapter/type";
import { useEffect, useState } from "react";

export default function Home({ params }: { params: { id: string } }) {
  const id = params.id;

  const [page, setPage] = useState<EditorData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPage(id).then((r) => {
      if (r?.content) {
        setPage(r.content);
        setLoading(false);
      }
    });
  }, [id]);

  const handleChange = (data: EditorData) => {
    savePage(id, data).then(() => {
      console.log("saved");
    });
  };

  return (
    <main className=" min-h-screen  flex justify-center items-center ">
      <Loader show={loading} />
      {!loading && <PageBuilder initialData={page} onChange={handleChange} />}
    </main>
  );
}
