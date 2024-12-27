import Image from "next/image";
import Technology from "../_components/technology/Technology";
import imgDesktop from "@/public/technology/background-technology-desktop.jpg";
import imgTablet from "@/public/technology/background-technology-tablet.jpg";
import imgMobile from "@/public/technology/background-technology-mobile.jpg";

function page() {
  return (
    <div className="">
      <div className="fixed inset-0 -z-10 h-screen">
        <Image
          src={imgDesktop}
          alt="Background image"
          fill
          className="hidden brightness-90 filter sm:hidden md:hidden lg:block"
          quality={100}
          placeholder="blur"
        />

        <Image
          src={imgTablet}
          alt="Background image"
          fill
          className="hidden object-cover object-top brightness-90 filter sm:hidden md:block lg:hidden"
          quality={100}
          placeholder="blur"
        />
        <Image
          src={imgMobile}
          alt="Background image"
          fill
          className="object-cover brightness-90 filter sm:block md:hidden lg:hidden"
          quality={100}
          placeholder="blur"
        />
      </div>

      <div className="flex flex-col items-center gap-16 px-0 md:items-start lg:pl-36">
        <p className="text-xxMedium flex gap-3 px-5 font-barlowCon uppercase tracking-[4px] sm:px-10">
          <span className="text-gray-0 font-extrabold">03</span>
          <span className="text-blue-50">Space launch 101</span>
        </p>

        <Technology />
      </div>
    </div>
  );
}

export default page;
