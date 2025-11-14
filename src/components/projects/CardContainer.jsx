import { useGSAP } from "@gsap/react";
import Card from "./Card";
import gsap, { ScrollTrigger } from "gsap/all";
import p1 from "../../assets/Photos/Project_Photos/p1.webp";
import p2 from "../../assets/Photos/Project_Photos/p2.webp";
import p3 from "../../assets/Photos/Project_Photos/p3.webp";
import p4 from "../../assets/Photos/Project_Photos/p4.webp";
import p5 from "../../assets/Photos/Project_Photos/p5.webp";
import p6 from "../../assets/Photos/Project_Photos/p6.webp";
import p7 from "../../assets/Photos/Project_Photos/p7.webp";
import p8 from "../../assets/Photos/Project_Photos/p8.webp";
import p9 from "../../assets/Photos/Project_Photos/p9.webp";
import p10 from "../../assets/Photos/Project_Photos/p10.webp";

export default function CardContainer() {
  const images = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10];
  const arr = Array(5).fill(undefined);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(".card", {
      height: "200px",
      stagger: {
        amount: 1.8,
        duration: 0.1,
      },
      scrollTrigger: {
        trigger: ".cardContainer",
        scrub: 1.5,
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
          <Card src={images[i * 2]} />
          <Card src={images[i * 2 + 1]} />
        </div>
      ))}
    </div>
  );
}
