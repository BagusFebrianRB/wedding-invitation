"use client";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Scene1 from "@/components/Scene1";
import PhotoHero from "@/components/PhotoHero";
import DoaSection from "@/components/DoaSection";
import CoupleProfile from "@/components/CoupleProfile";
import { weddingData } from "@/data/content";

export default function HomeClient({ guestName }: { guestName: string }) {
  const [stage, setStage] = useState<"gate" | "opening" | "opened">("gate");

  useEffect(() => {
    document.body.style.overflow = stage === "opened" ? "auto" : "hidden";
  }, [stage]);

  return (
    <>
      <AnimatePresence>
        {stage === "gate" && (
          <Scene1 guestName={guestName} onOpen={() => setStage("opening")} />
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
            </>
          )}
        </>
      )}
    </>
  );
}