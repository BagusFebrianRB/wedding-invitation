import Image from "next/image";

export default function SaveTheDate() {
  return (
    <section className="relative min-h-screen w-full">
      <Image
        src="/save-the-date.png"
        alt="Save the date"
        fill
        className="object-cover object-center"
      />
    </section>
  );
}