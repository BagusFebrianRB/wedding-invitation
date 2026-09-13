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
    </section>
  );
}