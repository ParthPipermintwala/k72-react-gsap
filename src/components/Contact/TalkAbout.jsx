import NavBarLink from "../Navigation/NavBarLink.jsx";
import heart from "../../assets/Photos/FullNavigation_Photos/heart.svg";
export default function TalkAbout({ about }) {
  return (
    <>
      <div className="bg-black pt-[10vw] max-md:pt-[18vw] grid grid-cols-[0.5fr_2fr_0.5fr] text-center  justify-end max-md:grid-cols-1 px-3">
        <p className="self-end justify-self-center max-md:hidden py-6 text-sm w-fit">
          Onscreen or in an office. <br />
          Here. There. <br />
          Anywhere.
        </p>
        <h1 className=" font-bold font-[font2] text-[10vw] leading-[0.85] w-[60vw] m-auto justify-self-center uppercase">
          TO Talk About {about}
        </h1>
        <p className="self-end justify-self-center max-md:hidden py-5 text-sm">
          Call us, email us. <br />
          We’re ready when you are.
        </p>
      </div>

      <div className="mt-25 -ml-10 w-[120vw] overflow-hidden routatediv max-md:mt-8">
        <NavBarLink
          title="CONTACT"
          src={[heart, heart]}
          tagline="PARTHPIPERMINTWALA@GMAIL.COM"
          isContact={true}
          imgWidth="w-1/16"
        />
      </div>
    </>
  );
}
