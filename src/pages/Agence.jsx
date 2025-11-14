import { useRef } from "react";
import HeroSection from "../components/Agence/HeroSection";
import Post from "../components/Agence/Post";
import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";
import Footer from "../components/common/Footer";
import post1 from "../assets/Photos/Agence_Photos/post1.jpg";
import post2 from "../assets/Photos/Agence_Photos/post2.jpg";
import post3 from "../assets/Photos/Agence_Photos/post3.jpg";

export function Component() {
  gsap.registerPlugin(ScrollTrigger);
  const postDiv = useRef(null);

  useGSAP(() => {
    const scrollTrigger = ScrollTrigger.create({
      trigger: postDiv.current,
      start: "top center",
      end: "bottom center",
      onEnter: () => {
        gsap.to("body, .post", { backgroundColor: "#000" });
      },
      onLeaveBack: () => {
        gsap.to("body", { backgroundColor: "#fff" }),
          gsap.to(".post", { backgroundColor: "#fff" });
      },
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: postDiv.current,
        start: "top top",
        end: "300%",
        scrub: true,
        pin: true,
      },
    });

    tl.from(".post-2", { top: "100%" }).from(".post-3", { top: "200%" });
    return () => {
      tl.kill();
      scrollTrigger.kill();
    };
  });

  return (
    <div className="w-full overflow-hidden">
      <HeroSection />
      <div ref={postDiv} className="relative h-screen">
        <div className="absolute flex items-center justify-center post-1 z-10 w-screen h-screen post">
          <Post
            src={post1}
            fname="JOËL"
            lname="LETARTE"
            role="Associate Creative Director"
          />
        </div>

        <div className="absolute flex items-center justify-center post-2 z-30 w-screen h-screen post">
          <Post
            src={post2}
            fname="MARIE-ÈVE"
            lname="LAVOIE"
            role="Creative Director"
          />
        </div>

        <div className="absolute flex items-center justify-center post-3 z-50 w-screen h-screen post">
          <Post src={post3} fname="ALEX" lname="BROWN" role="Producer" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
