"use client";

import { useState } from "react";
import Images from "./Images";
import data from "@/data.json";

import Buttons from "./Buttons";
import Technologies from "./Technologies";

function Technology() {
  const [showTechnology, setShowTechnology] = useState(1);

  return (
    <div className="flex w-full flex-col-reverse gap-8 lg:flex lg:w-full lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-col gap-16 lg:max-w-[40rem] lg:flex-row">
        <div className="flex items-center justify-center gap-3 text-darkBlue-0 lg:flex-col lg:justify-between">
          {data.technology.map((item) => (
            <Buttons
              key={item.id}
              item={item}
              showTechnology={showTechnology}
              setShowTechnology={setShowTechnology}
            />
          ))}
        </div>
        <div className="flex justify-center">
          <div className="max-w-[21.5rem] md:max-w-[32rem] lg:max-w-[35rem]">
            {data.technology.map(
              (item) =>
                item.id === showTechnology && (
                  <Technologies key={item.id} item={item} />
                ),
            )}
          </div>
        </div>
      </div>
      {data.technology.map(
        (item) =>
          item.id === showTechnology && <Images key={item.id} item={item} />,
      )}
    </div>
  );
}

export default Technology;
