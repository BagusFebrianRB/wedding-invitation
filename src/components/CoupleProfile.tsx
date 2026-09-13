"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import ParallaxImage from "@/components/ParallaxImage";

export default function CoupleProfile({
  photo,
  label,
  parentText,
  fullName,
}: {
  photo: string;
  label: string;
  parentText: string;
  fullName: string;
}) {
  return (
    <section className="relative z-10 h-screen w-full overflow-hidden">
      <ParallaxImage src={photo} alt="" fill className="object-cover" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute inset-x-0 bottom-20 px-8 text-center"
      >
        <h2 className="font-script text-4xl text-rose-950 mb-2">{fullName}</h2>
        <p className="font-sans text-xs tracking-widest text-rose-950 uppercase mb-2">{label}</p>
        <p className="font-sans text-sm text-rose-950 mb-3">{parentText}</p>
        
      </motion.div>
    </section>
  );
}