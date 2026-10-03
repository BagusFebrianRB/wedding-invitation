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

      <h1 className="absolute top-[8%] left-1/2 -translate-x-1/2 font-script text-4xl text-burgundy-900">
        Location
      </h1>

      <a
        href={weddingData.resepsi.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group absolute top-[17%] left-1/2 -translate-x-1/2 flex items-center gap-2 whitespace-nowrap rounded-full bg-burgundy-900 py-1.5 pl-1.5 pr-4 font-sans text-[10px] tracking-[0.15em] text-ivory uppercase shadow-md shadow-burgundy-900/30 ring-1 ring-burgundy-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:scale-95"
      >
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ivory/15 transition-colors duration-300 group-hover:bg-ivory/25">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-3 w-3"
          >
            <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        </span>
        <span>Get Directions</span>
      </a>
    </section>
  );
}