import Image from "next/image";
import { weddingData } from "@/data/content";

export default function LocationSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <Image
        src="/lokasi.png"
        alt="Lokasi acara"
        fill
        className="object-cover object-top"
      />

      <h1 className="absolute top-[14%] left-1/2 -translate-x-1/2 font-script text-4xl text-burgundy-900">
        Location
      </h1>

      <a
        href={weddingData.resepsi.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-[6%] left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-rose-950 px-6 py-2 font-sans text-xs tracking-widest text-ivory uppercase shadow-lg active:scale-95 transition-transform"
      >
        Get Directions
      </a>
    </section>
  );
}