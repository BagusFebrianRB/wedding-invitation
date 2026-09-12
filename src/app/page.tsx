import HomeClient from "@/components/HomeClient";

export default async function Home({ searchParams }: { searchParams: Promise<{ to?: string }> }) {
  const params = await searchParams;
  const guestName = params.to ? decodeURIComponent(params.to) : "Tamu Undangan";
  return <HomeClient guestName={guestName} />;
}