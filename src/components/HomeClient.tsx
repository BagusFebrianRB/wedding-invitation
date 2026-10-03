"use client";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import Scene1 from "@/components/Scene1";
import PhotoHero from "@/components/PhotoHero";
import DoaSection from "@/components/DoaSection";
import CoupleProfile from "@/components/CoupleProfile";
import SaveTheDate from "@/components/SaveTheDate";
import Countdown from "@/components/Countdown";
import LocationSection from "@/components/LocationSection";
import GiftSection from "@/components/GiftSection";
import Penutup from "@/components/Penutup";
import { weddingData } from "@/data/content";
import { Volume2, VolumeX } from "lucide-react";

export default function HomeClient({ guestName }: { guestName: string }) {
  const [stage, setStage] = useState<"gate" | "opening" | "opened">("gate");
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const photoHeroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = stage === "gate" ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [stage]);

  const handleOpen = () => {
    setStage("opening");
    // Play musik pas user klik (user gesture) - ini yang bikin autoplay diizinkan browser
    audioRef.current?.play().then(() => {
      setIsPlaying(true);
    }).catch((err) => {
      console.log("Autoplay diblokir:", err);
    });
  };

  useEffect(() => {
    if (stage === "opening") {
      requestAnimationFrame(() => {
        const target = photoHeroRef.current;
        if (!target) return;

        const start = window.scrollY;
        const end = target.getBoundingClientRect().top + window.scrollY;
        const duration = 2500;
        const startTime = performance.now();

        const animateScroll = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);

          const eased =
            progress < 0.5
              ? 2 * progress * progress
              : 1 - Math.pow(-2 * progress + 2, 2) / 2;

          window.scrollTo(0, start + (end - start) * eased);

          if (progress < 1) {
            requestAnimationFrame(animateScroll);
          } else {
            setStage("opened");
          }
        };

        requestAnimationFrame(animateScroll);
      });
    }
  }, [stage]);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio ref={audioRef} src="/music.mp3" loop preload="auto" />
      {stage !== "gate" && (
        <button
          onClick={toggleMusic}
          className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-11 h-11 rounded-full bg-black/40 backdrop-blur-sm text-white shadow-lg hover:bg-black/60 transition"
          aria-label={isPlaying ? "Pause musik" : "Putar musik"}
        >
          {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
        </button>
      )}
      <AnimatePresence>
        {stage !== "opened" && (
          <Scene1 guestName={guestName} onOpen={handleOpen}/>
        )}
      </AnimatePresence>

      {stage !== "gate" && (
        <>
          <div ref={photoHeroRef}>
            <PhotoHero
              onReady={() => {}}
              textVisible={stage === "opened"}
            />
          </div>
          {stage === "opened" && (
            <>
              <DoaSection />
              <CoupleProfile
                photo="/cpw.jpg"
                label="Putri dari"
                parentText={`Bapak ${weddingData.bride.father} & Ibu ${weddingData.bride.mother}`}
                fullName={weddingData.bride.fullName}
              />
              <CoupleProfile
                photo="/cpp.jpg"
                label="Putra dari"
                parentText={`Bapak ${weddingData.groom.father} & Ibu ${weddingData.groom.mother}`}
                fullName={weddingData.groom.fullName}
              />
              <SaveTheDate />
              <Countdown />
              <LocationSection />
              <Penutup />
            </>
          )}
        </>
      )}
    </>
  );
}