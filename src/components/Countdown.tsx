"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const TARGET = new Date("2026-10-31T10:00:00+07:00").getTime();

const CALENDAR_URL =
  "https://calendar.google.com/calendar/render?" +
  new URLSearchParams({
    action: "TEMPLATE",
    text: "Resepsi Aya & Bagus",
    dates: "20261031T100000/20261031T120000",
    ctz: "Asia/Jakarta",
    details: "Resepsi Aya & Bagus",
    location:
      "D’Sultan Cafe Tuban, Jl. Basuki Rachmad No.282, Ronggomulyo, Kec. Tuban, Kabupaten Tuban, Jawa Timur 62315, Indonesia",
  }).toString();

function getTimeLeft() {
  const diff = Math.max(TARGET - Date.now(), 0);
  return {
    hari: Math.floor(diff / (1000 * 60 * 60 * 24)),
    jam: Math.floor((diff / (1000 * 60 * 60)) % 24),
    menit: Math.floor((diff / (1000 * 60)) % 60),
    detik: Math.floor((diff / 1000) % 60),
  };
}

function Unit({ label, value }: { label: string; value?: number }) {
  const text = value === undefined ? "--" : String(value).padStart(2, "0");
  return (
    <div className="flex w-20 flex-col items-center">
      <div className="relative flex h-16 w-full items-center justify-center overflow-hidden">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={text}
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -24, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl font-light tabular-nums text-burgundy-900"
          >
            {text}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="mt-1 h-px w-8 bg-burgundy-900/30" />
      <span className="mt-2 font-sans text-[9px] uppercase tracking-[0.3em] text-burgundy-600">
        {label}
      </span>
    </div>
  );
}

export default function Countdown() {
  const [time, setTime] = useState<ReturnType<typeof getTimeLeft> | null>(null);

  useEffect(() => {
    setTime(getTimeLeft());
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const items = [
    { label: "Days", value: time?.hari },
    { label: "Hours", value: time?.jam },
    { label: "Minutes", value: time?.menit },
    { label: "Seconds", value: time?.detik },
  ];

  return (
    <section className="relative min-h-screen w-full">
      <Image
        src="/countdown-bg.png"
        alt="Countdown"
        fill
        unoptimized
        className="object-cover object-center"
      />

        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-[8%] left-1/2 -translate-x-1/2 whitespace-nowrap font-script text-4xl text-burgundy-900"
            >
            The Day Draws Near
        </motion.h2>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-[46%] left-1/2 grid -translate-x-1/2 -translate-y-1/2 grid-cols-2 gap-x-6 gap-y-6"
            >
            {items.map((item) => (
                <Unit key={item.label} label={item.label} value={item.value} />
            ))}
        </motion.div>

      <motion.a
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        href={CALENDAR_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group absolute top-[76%] left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-burgundy-900 py-1.5 pl-1.5 pr-4 font-sans text-[9px] uppercase tracking-[0.18em] text-ivory shadow-md shadow-burgundy-900/30 transition-all duration-300 active:scale-95"
      >
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-ivory/15">
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-3 w-3"
            >
                <rect x="3" y="5" width="18" height="16" rx="2" />
                <path d="M16 3v4M8 3v4M3 10h18" />
            </svg>
            </span>
            <span>Add to Calendar</span>
      </motion.a>
    </section>
  );
}