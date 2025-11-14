import { useGSAP } from "@gsap/react";
import TalkAbout from "../components/Contact/TalkAbout";
import gsap, { ScrollTrigger } from "gsap/all";
import Icon from "../components/Contact/Icon";
import { useRef } from "react";

export function Component() {
  const current = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(current.current, { scale: 1.3, delay: 0.83, duration: 0.8 });
    gsap.set("body", { backgroundColor: "black", delay: 1.4 });
    gsap.set(".routatediv", { rotate: -8 });
    const scrollTrigger = ScrollTrigger.create({
      trigger: document.body,
      onUpdate: (self) => {
        const direction = self.direction;
        if (direction === 1 && self.scroll() > 1) {
          gsap.to(".routatediv", { rotate: 8, duration: 1 });
        } else if (direction === -1) {
          gsap.to(".routatediv", { rotate: -8, duration: 1 });
        }
      },
    });
    return () => {
      scrollTrigger.kill();
      gsap.killTweensOf(current.current);
      gsap.killTweensOf(document.body);
      gsap.killTweensOf(".routatediv");
    };
  });

  return (
    <div
      className="bg-black text-white max-w-screen overflow-hidden min-h-screen cursor-pointer pb-10"
      ref={current}
    >
      <TalkAbout about="your project" />
      <TalkAbout about="your brand" />
      <Icon />
      <TalkAbout about="your feelings" />
      <TalkAbout about="nothing in particular" />
      <Icon />
      <TalkAbout about="your startup" />
      <TalkAbout about="your results" />
      <Icon />
    </div>
  );
}
