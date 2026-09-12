"use client";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Scene1 from "@/components/Scene1";
import PhotoHero from "@/components/PhotoHero";

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
        <PhotoHero
          onExpandComplete={() => setStage("opened")}
          textVisible={stage === "opened"}
        />
      )}
    </>
  );
}