"use client";

import { motion } from "motion/react";
import { useState } from "react";

export default function Home() {
  const [isOn, setIsOn] = useState<boolean>(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <button
        className={`flex h-18 w-36 cursor-pointer rounded-full p-3 ${
          isOn ? "justify-end bg-blue-500" : "justify-start bg-gray-300"
        }`}
        onClick={toggleSwitch}
      >
        <motion.div
          className={`h-12 w-12 rounded-full bg-white`}
          layout // layout이 부모 요소의 width를 계산하여 애니메이션 자동 구현
          transition={{
            type: "spring",
            visualDuration: 0.2,
            bounce: 0.2,
          }}
        />
      </button>
    </div>
  );
}
