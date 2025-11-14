import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

export default function HeroSection() {
  const imgdivRef = useRef(null);
  const imgRef = useRef(null);
  const contentRef = useRef(null);
  const textDiv = useRef(null);
  const imageArray = [
    "src/assets/Photos/Agence_Photos/image_1761532623624_compressed.webp",
    "src/assets/Photos/Agence_Photos/image_1761532623096_compressed.webp",
    "src/assets/Photos/Agence_Photos/image_1761532624132_compressed.webp",
    "src/assets/Photos/Agence_Photos/image_1761532624636_compressed.webp",
    "src/assets/Photos/Agence_Photos/image_1761532625150_compressed.webp",
    "src/assets/Photos/Agence_Photos/image_1761532626184_compressed.webp",
    "src/assets/Photos/Agence_Photos/image_1761532626689_compressed.webp",
    "src/assets/Photos/Agence_Photos/image_1761532627193_compressed.webp",
    "src/assets/Photos/Agence_Photos/image_1761532627702_compressed.webp",
    "src/assets/Photos/Agence_Photos/image_1761532628212_compressed.webp",
    "src/assets/Photos/Agence_Photos/image_1761532628732_compressed.webp",
    "src/assets/Photos/Agence_Photos/image_1761532629251_compressed.webp",
    "src/assets/Photos/Agence_Photos/image_1761532629763_compressed.webp",
    "src/assets/Photos/Agence_Photos/image_1761532625668_compressed.webp",
  ];
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    let mm = gsap.matchMedia();
    gsap.from(contentRef.current, {
      scale: 1.5,
      delay: 0.8,
      duration: 0.6,
    });
    gsap.from(imgRef.current, {
      scale: 1.9,
      delay: 0.8,
      opacity: 0,
      duration: 0.6,
    });

    mm.add("(min-width: 751px)", () => {
      gsap.to(imgdivRef.current, {
        scrollTrigger: {
          trigger: imgdivRef.current,
          start: "top 28%",
          end: "top -53%",
          pin: true,
          scrub: true,
          ease: "power3.out",
          onUpdate: (self) => {
            imgRef.current.src =
              imageArray[Math.floor(self.progress * (imageArray.length - 1))];
            if (self.progress >= 0.8) {
              gsap.to(textDiv.current, { color: "rgb(0, 0, 0)", duration: 1 });
            } else {
              gsap.to(textDiv.current, {
                color: "rgb(255, 255, 255)",
                duration: 0.5,
              });
            }
          },
        },
      });
    });
    mm.add("(max-width: 750px)", () => {
      gsap.to(imgdivRef.current, {
        scrollTrigger: {
          trigger: imgdivRef.current,
          start: "top 22%",
          end: "top -26%",
          pin: true,
          scrub: true,
          ease: "power3.out",
          onUpdate: (self) => {
            imgRef.current.src =
              imageArray[Math.floor(self.progress * (imageArray.length - 1))];
            if (self.progress >= 0.9) {
              gsap.to(textDiv.current, { color: "rgb(0, 0, 0)", duration: 1 });
            } else {
              gsap.to(textDiv.current, {
                color: "rgb(255, 255, 255)",
                duration: 0.5,
              });
            }
          },
        },
      });
    });
  });
  return (
    <div className="section1 h-screen mb-[20vh]">
      <div
        ref={imgdivRef}
        className="absolute overflow-hidden h-[22vw] rounded-3xl w-[16vw] top-[28vh] left-[22vw] max-md:w-[170px] max-md:h-[230px] max-[1100px]:w-[24vw] max-[1100px]:h-[28vw] max-sm:top-[22%] max-sm:left-[20vw]"
      >
        <img
          ref={imgRef}
          className="h-full object-cover w-full"
          src={imageArray[0]}
          loading="lazy"
        />
      </div>
      <div className="relative" ref={contentRef}>
        <div className="mt-[50vh]">
          <h1 className="text-[20vw] leading-[17vw] text-center font-[font2]">
            SEVEN7Y <br /> TWO
          </h1>
        </div>
        <div className="pl-[42%] max-lg:pl-[25%] pr-9 max-md:px-5 font-[font1] mt-20 max-sm:mt-72 ">
          <p
            className="text-4xl max-md:text-2xl text-justify  indent-[12vw] max-md:indent-[18vw] text-white"
            ref={textDiv}
          >
            We're inquisitive and open-minded, and we make sure creativity
            crowds out ego from every corner.A brand is a living thing,with
            values,a personality and a story.If we ignore that,we can achieve
            short-term success,but not influence that goes the distance.We bring
            that perspective to every brand story we help tell.
          </p>
        </div>
      </div>
    </div>
  );
}
