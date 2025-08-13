import HeroNav from "./blocks/hero-nav";
// import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-5xl font-bold">Nichelle Hayes</h1>
        <p>I am a UI engineer with 6 years experience of crafting performant interfaces using React, TypeScript, and modern CSS frameworks. I am passionate about design systems, accessibility, and creating seamless user experiences through close collaboration with product and design teams. I am currently looking for my next opportunity to continue making an impact across industries and expand my knowledge in web and app development.</p>
        <h2 className="text-3xl">"It's kinda boring here... What's next?"</h2>
        <p>Yeah, I know right? I was so engrossed in work and learning more for the past five years that I abandoned this beautiful place. Don't worry! I am currently re-doing my portfolio site from scratch. My skills are far more advanced now than they were six years ago. But, since you're here, check out the links below to connect!{/*<Link className="font-bold hover:underline" href="/changelog">Check out what's next for this hub!</Link>*/}</p>
        <HeroNav />
      </main>
    </div>
  );
}
