"use client";

import { useEffect, useState } from "react";

type Post = {
  id: number;
  title: string;
  body: string;
};

export default function Home() {
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:4000/posts");
      if (!response.ok) {
        throw new Error("에러 발생");
      }
      const posts = await response.json();
      setData(posts);
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
