"use client";

import { motion } from "framer-motion";

export default function CourseCard({
  title,
  progress,
}: {
  title: string;
  progress: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.5 }}
      className="bg-zinc-900 p-5 rounded-2xl"
    >
      <h3 className="text-lg font-semibold">{title}</h3>

      <p>{progress}% Complete</p>

      <div className="w-full bg-zinc-700 h-2 rounded-full mt-2">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1 }}
          className="bg-green-500 h-2 rounded-full"
        />
      </div>
    </motion.div>
  );
}