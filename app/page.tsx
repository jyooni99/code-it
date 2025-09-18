// src/app/page.tsx

import axios from "axios";

type Post = {
  id: number;
  title: string;
  body: string;
};

export default async function Home() {
  const response = await axios.get<Post>("http://localhost:4000/posts/1");
  const data = response.data;
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
