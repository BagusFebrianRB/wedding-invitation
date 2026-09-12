"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const charVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.01 } },
};

function TypingText({ text, className, delay = 0.3 }: { text: string; className?: string; delay?: number }) {
  const chars = text.split("");
  return (
    <motion.h1
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.12, delayChildren: delay } },
      }}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {chars.map((char, i) => (
        <motion.span key={i} variants={charVariants}>
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h1>
  );
}

export default function Scene1({
  guestName,
  onOpen,
}: {
  guestName: string;
  onOpen: () => void;
}) {
  const [ready, setReady] = useState(false);

  const line1 = "Kepada Yth,";
  const line1Duration = line1.length * 0.12;
  const line2Delay = 0.3 + line1Duration + 0.9;
  const photoDelay = line2Delay + guestName.length * 0.12 + 0.3;
  const photoDuration = 0.9;

  useEffect(() => {
    const totalTime = (photoDelay + photoDuration) * 1000;
    const timer = setTimeout(() => setReady(true), totalTime);
    return () => clearTimeout(timer);
  }, [photoDelay]);

  return (
    <div className="h-screen flex flex-col items-center justify-center px-6 text-center gap-4">
      <TypingText
        text={line1}
        delay={0.3}
        className="font-sans text-sm tracking-widest text-burgundy-600 uppercase"
      />
      <TypingText
        text={guestName}
        delay={line2Delay}
        className="font-script text-3xl text-burgundy-900"
      />

      <motion.div
        layoutId="couple-photo"
        onClick={() => ready && onOpen()}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: photoDuration, ease: [0.22, 1, 0.36, 1], delay: photoDelay }}
        className={`w-56 aspect-[3/4] rounded-lg overflow-hidden mt-4 shadow-lg ${
          ready ? "cursor-pointer" : "cursor-default"
        }`}
      >
        <Image src="/couple.png" alt="" width={400} height={533} priority className="object-cover object-bottom w-full h-full" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: ready ? 1 : 0 }}
        transition={{ duration: 0.6 }}
        className="font-sans text-xs text-charcoal mt-2"
      >
        Tap foto untuk membuka
      </motion.p>
    </div>
  );
}