"use client";

import { useState } from "react";
import ButtonsCrew from "./ButtonsCrew";
import CrewMembers from "./CrewMembers";
import data from "@/data.json";
import Image from "next/image";

function Crew() {
  const [crewMember, setCrewMember] = useState(1);
  return (
    <div className="flex w-full flex-col items-center justify-between lg:grid lg:grid-cols-2 lg:gap-10">
      <div className="flex h-full max-w-[23rem] flex-col items-center justify-center md:max-w-[37rem] lg:grid lg:max-w-[35rem] lg:grid-rows-[3fr_1fr] lg:items-end">
        <div className="pb-20 lg:flex lg:items-end lg:justify-end lg:pb-0">
          {data.crew.map((item) => {
            if (item.id === crewMember)
              return <CrewMembers key={item.id} item={item} />;
          })}
        </div>

        <div className="flex h-full w-full items-center justify-center gap-5 pb-10 lg:items-end lg:justify-start">
          {data.crew.map((btn) => (
            <ButtonsCrew
              key={btn.id}
              btn={btn}
              crewMember={crewMember}
              setCrewMember={setCrewMember}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center lg:justify-end">
        {data.crew.map(
          (item) =>
            crewMember === item.id && (
              <Image
                src={item.images?.png}
                key={item.id}
                width={500}
                height={500}
                alt={`Image of ${item.role} - ${item.name}`}
                quality={100}
              />
            ),
        )}
      </div>
    </div>
  );
}

export default Crew;
