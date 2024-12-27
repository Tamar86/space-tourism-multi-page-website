import Image from "next/image";
import Crew from "../_components/crew/Crew";
import bgImageDesktop from "@/public/crew/background-crew-desktop.jpg";
import bgImageTablet from "@/public/crew/background-crew-tablet.jpg";
import bgImageMobile from "@/public/crew/background-crew-mobile.jpg";

function page() {
  return (
    <div className="">
      <div className="fixed inset-0 -z-10">
        <Image
          src={bgImageDesktop}
          alt="Space image"
          fill
          className="hidden brightness-90 filter sm:hidden md:hidden lg:block"
        />
        <Image
          src={bgImageTablet}
          alt="Space image"
          fill
          className="hidden w-full object-cover object-top brightness-90 filter sm:hidden md:block lg:hidden"
        />
        <Image
          src={bgImageMobile}
          alt="Space image"
          fill
          className="w-full object-cover brightness-90 filter sm:block md:hidden lg:hidden"
        />
      </div>
      <div className="flex flex-col items-center gap-16 px-5 sm:px-10 md:items-start lg:px-36">
        <p className="text-xxMedium flex gap-3 font-barlowCon uppercase tracking-[4px]">
          <span className="text-gray-0 font-extrabold">02</span>
          <span className="text-blue-50">Meet your crew</span>
        </p>

        <Crew />
      </div>
    </div>
  );
}

export default page;
