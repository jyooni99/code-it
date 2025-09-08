"use client";

import { motion } from "motion/react"; // use client 추가해야 함
// import * as motion from "motion/react-client"; -> 서버 컴포넌트에서 animation 사용 가능

export default function Home() {
  return (
    <motion.div
      initial={{ translateX: -100, opacity: 0 }} // 초기 값
      animate={{ translateX: 0, opacity: 1 }} // 애니메이션
      transition={{ duration: 0.8 }} // 애니메이션 지속 시간
    >
      왼쪽에서 슬라이드 인!
    </motion.div>
  );
}
