import { useGSAP } from "@gsap/react";
import Card from "./Card";
import gsap, { ScrollTrigger } from "gsap/all";

export default function CardContainer() {
  const arr = Array(5).fill(undefined);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(".card", {
      height: '200px',
      stagger:{
        amount:1.8,
        duration:0.1,
      },
      scrollTrigger: {
        trigger: ".cardContainer",
        scrub:1.5,
        start: "top 70%",
        end: "top -230%",
        },
      });
      return () => {
        gsap.killTweensOf(".card");
      };
  });
  return (
    <div className="-mt-13 max-lg:-mt-3 cardContainer">
      {arr.map((_, i) => (
        <div
          key={i}
          className="w-full h-[60vh] mb-4 flex gap-2 max-sm:flex-col card"
        >
          <Card src={`src/assets/Photos/Project_Photos/p${i * 2 + 1}.webp`} />
          <Card src={`src/assets/Photos/Project_Photos/p${i * 2 + 2}.webp`} />
        </div>
      ))}
    </div>
  );
}
