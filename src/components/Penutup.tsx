import Image from "next/image";

export default function Penutup() {
  return (
    <section className="relative min-h-screen w-full">
      <Image
        src="/penutup.png"
        alt="Penutup"
        fill
        className="object-cover object-center"
      />
      <p className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap font-sans text-[7px] tracking-[0.25em] text-burgundy-900/70 uppercase">
        Made by Groom & Bride
      </p>
    </section>
  );
}