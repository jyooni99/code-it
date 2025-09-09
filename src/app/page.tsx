"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const { ref, inView } = useInView({ threshold: 1 });

  const [items, setItems] = useState([...Array(10)].map((_, i) => i + 1));
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const loadMoreItems = async () => {
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const nextPage = page + 1;
    const newItems = [...Array(10)].map((_, i) => items.length + i + 1);

    setItems((prevItems) => [...prevItems, ...newItems]);
    setPage(nextPage);
    setIsLoading(false);
  };

  useEffect(() => {
    if (inView) {
      loadMoreItems();
    }
  }, [inView]);

  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <div className="h-48 border border-gray-500" key={item}>
            {item}
          </div>
        ))}
      </div>
      {/* 해당 div가 뷰포트에 다 보일 때 더 로드 */}
      <div className="py-4 text-center" ref={ref}>
        <div className="flex items-center justify-center space-x-2">
          <div className="h-4 w-4 animate-pulse rounded-full bg-blue-500"></div>
          <div className="h-4 w-4 animate-pulse rounded-full bg-blue-500"></div>
          <div className="h-4 w-4 animate-pulse rounded-full bg-blue-500"></div>
          <span className="text-gray-500">로딩 중...</span>
        </div>
      </div>
    </div>
  );
}
