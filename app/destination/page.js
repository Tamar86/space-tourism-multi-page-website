import Image from "next/image";

import bgImageDesktop from "@/public/destination/background-destination-desktop.jpg";
import bgImageTablet from "@/public/destination/background-destination-tablet.jpg";
import bgImageMobile from "@/public/destination/background-destination-mobile.jpg";

import Destinations from "../_components/destinations/Destinations";

function page() {
  return (
    <div className="">
      <div className="fixed inset-0 -z-10 h-screen px-10">
        <Image
          src={bgImageDesktop}
          alt="Space image"
          className="hidden w-full sm:hidden md:hidden lg:block"
          fill
          quality={100}
          placeholder="blur"
        />
        <Image
          src={bgImageTablet}
          alt="Space image"
          className="hidden object-cover object-top brightness-90 filter sm:hidden md:block lg:hidden"
          fill
          quality={100}
          placeholder="blur"
        />
        <Image
          src={bgImageMobile}
          alt="Space image"
          className="object-cover object-top brightness-90 filter sm:block md:hidden lg:hidden"
          fill
          quality={100}
          placeholder="blur"
        />
      </div>
      <div className="flex flex-col gap-16">
        <p className="lg:text-xxMedium text-white-0 flex w-full justify-center gap-6 font-barlowCon uppercase tracking-[4px] brightness-90 filter md:justify-start md:px-10 md:text-lg lg:px-36">
          <span className="text-gray-0 font-extrabold">01</span>
          <span>Pick your destination</span>
        </p>
        <Destinations />
      </div>
    </div>
  );
}

export default page;
