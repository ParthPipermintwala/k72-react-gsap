import { gsap } from "gsap";
import { useRef, Fragment } from "react";

function NavBarLink({ title, src, tagline, onclick,isContact = false, imgWidth="w-1/5" }) {
  const arr = Array(5).fill(undefined);
  const boxRef = useRef(null);
  const handleHoverEnter = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const midpoint = rect.top + rect.height / 2;
    const fromTop = e.clientY < midpoint;
    gsap.killTweensOf(boxRef.current);

    gsap.set(boxRef.current, { yPercent: fromTop ? -100 : 100, autoAlpha: 1 });
    gsap.to(boxRef.current, {
      yPercent: 0,
      duration: 0.2,
      ease: "power4.out",
    });
  };
  const handleHoverLeave = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const exitTop = e.clientY < rect.top + rect.height / 2;
    gsap.killTweensOf(boxRef.current);
    gsap.to(boxRef.current, {
      yPercent: exitTop ? -100 : 100,
      duration: 0.2,
      ease: "power4.in",
      onComplete: () => gsap.set(boxRef.current, { autoAlpha: 0 }),
    });
  };

  return (
    <div
      className="link border-y-[0.1px] w-full relative overflow-hidden cursor-pointer group font-[font2] "
      {...(isContact
        ? {}
        : { onMouseEnter: handleHoverEnter, onMouseLeave: handleHoverLeave })}
        onClick={onclick}
    >
      <h1 className="text-center text-[8vw] font-bold leading-[0.9] pt-6 max-xl:pt-3 max-sm:pt-2 max-sm:leading-[1]">
        {title}
      </h1>
      <div
        className={`absolute w-full h-full bg-[#d3fd50] top-0 left-0 text-black pl-28 pointer-events-none ${
          isContact ? "opacity-100" : "opacity-0"
        }`}
        ref={boxRef}
        style={{ willChange: "transform" }}
      >
        <div className="h-full moveX" style={{ willChange: "transform" }}>
          <div className="items-center flex gap-12 h-full">
            {arr.map((_, i) => (
              <Fragment key={i}>
                <h2 className="text-center text-[8vw] font-bold leading-[0.8] pt-5 max-xl:pt-3 max-sm:pt-2 max-sm:leading-[1] flex-shrink-0 z-50">
                  {tagline}
                </h2>
                <img
                  className={`h-10/12 ${imgWidth} rounded-full flex-shrink-0 z-50`}
                  src={src[0]}
                  alt="nav image 0"
                />
                <h2 className="text-center text-[8vw] font-bold leading-[0.8] pt-5 max-xl:pt-3 max-sm:pt-2 max-sm:leading-[1] flex-shrink-0 z-50">
                  {tagline}
                </h2>
                <img
                  className={`h-10/12 ${imgWidth} rounded-full flex-shrink-0 z-50`}
                  src={src[1]}
                  alt="nav image 1"
                />
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBarLink;
