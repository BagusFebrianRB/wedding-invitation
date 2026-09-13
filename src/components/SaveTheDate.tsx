"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SaveTheDate() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen w-full"
    >
      <Image
        src="/save-the-date.png"
        alt="Save the date"
        fill
        className="object-cover object-center"
      />
    </motion.section>
  );
}