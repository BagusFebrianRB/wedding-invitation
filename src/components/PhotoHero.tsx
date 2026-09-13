"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { weddingData } from "@/data/content";

export default function PhotoHero({
  onExpandComplete,
  textVisible,
}: {
  onExpandComplete: () => void;
  textVisible: boolean;
}) {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <motion.div
        layoutId="couple-photo"
        onLayoutAnimationComplete={onExpandComplete}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0"
      >
        <Image src="/couple.png" alt="" fill priority className="object-cover" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 bg-gradient-to-b from-burgundy-900/70 via-transparent to-burgundy-900/20"
      />

      <div className="fixed inset-0 flex flex-col items-center justify-start pt-20 px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: -16 }}
          animate={textVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
          className="font-sans text-xs tracking-[0.3em] text-ivory uppercase mb-2"
        >
          The Wedding Of
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: -16 }}
          animate={textVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          className="font-script text-5xl text-ivory"
        >
          {weddingData.bride.name} & {weddingData.groom.name}
        </motion.h1>
      </div>
    </section>
  );
}