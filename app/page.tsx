// src/app/page.tsx

"use client";

import { useEffect, useState } from "react";
import axios from "axios";

type Post = {
  id: number;
  title: string;
  body: string;
};

export default function Home() {
  const [data, setData] = useState<Post | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:4000/posts/1");
      setData(response.data);
    };
    fetchData();
  }, []);
  return (
    <ul>
      {data && (
        <li key={data.id} className="border p-4">
          <h3 className="font-bold">
            {data.id}: {data.title}
          </h3>
          <p>{data.body}</p>
        </li>
      )}
    </ul>
  );
}
