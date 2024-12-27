import Link from "next/link";

function Homepage() {
  return (
    <div className="flex flex-col gap-10 gap-y-10 filter md:px-36 md:pt-28 lg:grid lg:grid-cols-[1.5fr_1fr] lg:py-48">
      <div className="flex flex-col items-center justify-center gap-8 px-4 lg:items-start lg:justify-start">
        <p className="text-medium md:text-xxMedium w-full text-center font-barlowCon font-normal uppercase tracking-[4px] lg:text-start">
          So, you want to travel to
        </p>

        <h1 className="md:text-xxxLarge text-xxLarge mb-5 text-center uppercase lg:text-start">
          Space
        </h1>

        <p className="max-w-[24rem] text-center text-blue-200 md:max-w-[36rem] lg:max-w-[34rem] lg:text-start">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="flex items-center justify-center py-44 lg:py-0">
        <button className="text-small sm:text-xxxMedium bg-white-0 text-darkBlue-0 hover:text-lightBlue-0 grid h-36 w-36 items-center justify-center rounded-full font-bellefair uppercase ring-blue-50 ring-offset-0 duration-300 hover:ring-[5.5rem] hover:ring-opacity-10 sm:h-[272px] sm:w-[272px]">
          <Link href="/destination">Explore</Link>
        </button>
      </div>
    </div>
  );
}

export default Homepage;
