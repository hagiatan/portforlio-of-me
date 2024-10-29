"use client";

import React from "react";
import { motion } from "framer-motion";
import { span } from "framer-motion/client";

export default function Divider() {
  return (
    <>
      <motion.div
        className="bg-gray-800 mt-24 mb-8 h-16 w-1 rounded-full hidden sm:block dark:bg-opacity-20"
        initial={{ opacity: 0, y: 0 }} // Bắt đầu ở vị trí ban đầu
        animate={{
          opacity: 1,
          y: [0, 50, 0], // Di chuyển xuống 50px rồi quay về
        }}
        transition={{
          duration: 1, // Thời gian cho toàn bộ animation
          times: [0, 0.5, 1], // Tỉ lệ thời gian cho từng keyframe
          repeat: Infinity, // Lặp lại vô hạn
          repeatType: "loop", // Kiểu lặp lại
          ease: "easeInOut", // Hiệu ứng chuyển tiếp
        }}
      ></motion.div>
      <motion.span
        className="font-semibold mt-8 mb-16 hidden sm:block dark:bg-opacity-20"
        initial={{ opacity: 0, y: 0 }}
        animate={{
          opacity: 1,
        }}
      >
        Scroll Down
      </motion.span>
    </>
  );
}
