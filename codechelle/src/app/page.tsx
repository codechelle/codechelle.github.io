import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodepen } from "@fortawesome/free-brands-svg-icons";
import ButtonList from "./blocks/button-list";
import { certItems } from "./data/certs";
import { heroNavItems } from "./data/hero-nav-items";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-5xl font-bold">Nichelle Hayes</h1>
        <p>A resource and self-motivated UI engineer with 6 years of experience crafting performant interfaces using React, TypeScript, and modern CSS frameworks. I have a track record of quickly mastering new skills, adapting to dynamic environments, and consistently exceeding performance targets. I am passionate about design systems, accessibility, and creating seamless user experiences through close collaboration with stakeholders, product, and design teams.</p>
        <h2 className="text-3xl">"It's kinda boring here... What's next?"</h2>
        <p>Yeah, I know right? I've been heads down in work and learning more for the past five years that I abandoned this beautiful place. Don't worry! I am currently re-doing my portfolio site from scratch. My skills are far more advanced now than they were six years ago. I suppose a good place to start is revisiting my projects done here at <a className="underline" href="https://codepen.io/codechelle">Codepen <FontAwesomeIcon icon={faCodepen} className="w-[16px] h-[16px] inline ml-[1px]"/></a> and bring them over. Well, since you're here, check out the links below to learn more about me and connect!{/*<Link className="font-bold hover:underline" href="/changelog">Check out what's next for this hub!</Link>*/}</p>
        <ButtonList buttons={heroNavItems} />
        <h2 className="text-2xl">Certifications</h2>
        {<ButtonList buttons={certItems} /> }
      </main>
    </div>
  );
}
