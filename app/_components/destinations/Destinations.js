"use client";

import { useState } from "react";
import Image from "next/image";
import ButtonsDestination from "./ButtonsDestination";
import data from "@/data.json";
import Planets from "./Planets";

function Destinations() {
  const [showDestination, setShowDestination] = useState(1);

  return (
    <div className="flex w-full flex-col items-center justify-center gap-10 px-5 md:justify-between lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-36">
      <div className="max-w-64 md:max-w-80 lg:max-w-[30rem]">
        {data.destinations.map(
          (item) =>
            showDestination === item.id && (
              <Image
                key={item.id}
                width={500}
                height={500}
                alt={item.name}
                src={item.images.png}
                quality={100}
              />
            ),
        )}
      </div>
      <div className="flex flex-col items-center gap-10 lg:items-end">
        <div className="flex h-8 w-full items-center justify-center gap-3 tracking-[2px] sm:gap-5 lg:justify-start">
          {data.destinations.map((item) => (
            <ButtonsDestination
              setShowDestination={setShowDestination}
              showDestination={showDestination}
              key={item.id}
              item={item}
            />
          ))}
        </div>
        <div className="max-w-[23rem] md:max-w-[35rem] lg:max-w-[28rem]">
          {data.destinations.map(
            (item) =>
              showDestination === item.id && (
                <Planets key={item.id} item={item} />
              ),
          )}
        </div>
      </div>
    </div>
  );
}

export default Destinations;
