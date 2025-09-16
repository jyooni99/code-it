"use client";

import { useEffect, useState } from "react";
import axios from "axios";

type Post = {
  id: number;
  title: string;
  body: string;
};

export default function Home() {
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:4000/posts");
      setData(response.data);
    };
    fetchData();
  }, []);
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id} className="border p-4">
          <h3 className="font-bold">
            {item.id}: {item.title}
          </h3>
          <p>{item.body}</p>
        </li>
      ))}
    </ul>
  );
}
