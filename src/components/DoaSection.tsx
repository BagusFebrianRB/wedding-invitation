"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import ParallaxImage from "@/components/ParallaxImage";

export default function DoaSection() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-start pt-12 px-8 py-20 text-center gap-3 overflow-hidden">
      <ParallaxImage src="/doa-background.png" alt="" />

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="relative font-poppins text-xs tracking-widest text-burgundy-900 uppercase"
      >
        QS. Ar-Rum: 21
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative font-poppins text-xs leading-relaxed max-w-sm"
      >
        &ldquo;And of His signs is that He created for you from yourselves
        mates that you may find tranquility in them; and He placed between
        you affection and mercy. Indeed in that are signs for a people who
        give thought.&rdquo;
      </motion.p>


    </section>
  );
}