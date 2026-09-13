"use client";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import Scene1 from "@/components/Scene1";
import PhotoHero from "@/components/PhotoHero";
import DoaSection from "@/components/DoaSection";
import CoupleProfile from "@/components/CoupleProfile";
import SaveTheDate from "@/components/SaveTheDate";
import LocationSection from "@/components/LocationSection";
import GiftSection from "@/components/GiftSection";
import Penutup from "@/components/Penutup";
import { weddingData } from "@/data/content";
import { Volume2, VolumeX } from "lucide-react";

export default function HomeClient({ guestName }: { guestName: string }) {
  const [stage, setStage] = useState<"gate" | "opening" | "opened">("gate");4
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    document.body.style.overflow = stage === "opened" ? "auto" : "hidden";
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
        {stage === "gate" && (
          <Scene1 guestName={guestName} onOpen={handleOpen}/>
        )}
      </AnimatePresence>

      {stage !== "gate" && (
        <>
          <PhotoHero
            onExpandComplete={() => setStage("opened")}
            textVisible={stage === "opened"}
          />
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
              <LocationSection />
              <GiftSection />
              <Penutup />
            </>
          )}
        </>
      )}
    </>
  );
}