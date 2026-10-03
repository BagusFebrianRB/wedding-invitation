"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
  const line1Duration = line1.length * 0.02;
  const line2Delay = 0.3 + line1Duration + 0.9;
  const photoDelay = line2Delay + guestName.length * 0.12 + 0.3;
  const photoDuration = 0.9;

  const sceneRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const guestY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const envelopeY = useTransform(scrollYProgress, [0, 1], [0, 70]);

  useEffect(() => {
    const totalTime = (photoDelay + photoDuration) * 1000;
    const timer = setTimeout(() => setReady(true), totalTime);
    return () => clearTimeout(timer);
  }, [photoDelay]);

  return (
    <div ref={sceneRef} className="relative h-screen flex flex-col items-center justify-center px-6 text-center gap-4 bg-cover bg-center" style={{ backgroundImage: "url('/scene1-bg.png')" }}>
      <div className="absolute inset-0 bg-white/40" />
      <div className="relative z-10">
        <motion.div style={{ y: textY }}>
          <TypingText
          text={line1}
          delay={0.3}
          className="font-sans text-sm tracking-widest text-burgundy-600 uppercase"
        />
        </motion.div>
        
        <motion.div style={{ y: guestY }}>
          <TypingText
          text={guestName}
          delay={line2Delay}
          className="font-script text-3xl text-burgundy-900"
        />
        </motion.div>
        

        <motion.div
          style={{ y: envelopeY }}
          onClick={() => ready && onOpen()}
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: [0, 0, -3, 3, -3, 0],
          }}
          transition={{
            opacity: {
              duration: photoDuration,
              delay: photoDelay,
            },
            scale: {
              duration: photoDuration,
              delay: photoDelay,
              ease: [0.22, 1, 0.36, 1],
            },
            rotate: {
              duration: 2,
              delay: photoDelay + photoDuration,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1,
            },
          }}
          className={`mt-4 ${
            ready ? "cursor-pointer" : "cursor-default"
          }`}
        >
          <Image
            src="/envelope.png"
            alt="Open invitation"
            width={280}
            height={280}
            priority
            unoptimized
            className="object-contain"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: ready ? 1 : 0 }}
          transition={{ duration: 0.6 }}
          className="font-sans text-xs text-charcoal mt-2"
        >
          Tap the envelope to open
        </motion.p>
      </div>
    </div>
  );
}