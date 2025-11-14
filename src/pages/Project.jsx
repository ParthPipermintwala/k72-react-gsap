import CardContainer from "../components/projects/CardContainer";
import Footer from "../components/common/Footer";
import { useRef } from "react";
import gsap from "gsap/all";
import { useGSAP } from "@gsap/react";

export function Component() {
  const current = useRef(null);

  useGSAP(() => {
    gsap.from(current.current, { scale: 1.5, delay: 0.83, duration: 0.6 });
  });

  return (
    <>
      <div className="pt-[30vh] p-4 max-md:pt-[70vh]" ref={current}>
        <h1 className="font-[font2] text-[12vw] uppercase">Project</h1>
        <CardContainer />
      </div>
      <Footer />
    </>
  );
}
