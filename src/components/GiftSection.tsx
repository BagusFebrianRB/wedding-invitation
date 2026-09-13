"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { weddingData } from "@/data/content";

export default function GiftSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <Image src="/weddinggift.png" alt="Wedding gift" fill className="object-cover object-top" />

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-[8%] left-1/2 text-center -translate-x-1/2 font-script text-3xl text-burgundy-900"
      >
        Wedding Gift
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.8, ease: "easeOut" }}
        className="absolute top-[14%] left-1/2 -translate-x-1/2 w-[75%] font-sans text-xs leading-relaxed text-charcoal text-center"
      >
        Kehadiran dan doa restu Anda adalah hadiah terindah bagi kami. Namun,
        apabila Anda tidak dapat hadir dan ingin tetap menunjukkan kasih
        sayang kepada kami, Anda dapat menggunakan fitur di bawah ini.
      </motion.p>

    </section>
  );
}