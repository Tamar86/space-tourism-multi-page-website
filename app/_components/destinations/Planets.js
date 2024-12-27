function Planets({ item }) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-5 border-b-2 pb-14 text-center lg:items-start">
        <h1 className="text-large md:text-xLarge lg:text-xxLarge">
          {item.name}
        </h1>
        <p>{item.description}</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-5 text-center uppercase md:flex-row md:justify-between md:gap-10 md:px-16 lg:justify-start lg:gap-16 lg:px-0 lg:text-start">
        <div>
          <p className="text-xxxSmall">Avg. distance</p>
          <p className="text-xxMedium text-white-0">{item.distance}</p>
        </div>
        <div>
          <p className="text-xxxSmall">Est. travel time</p>
          <p className="text-xxMedium text-white-0">{item.travel}</p>
        </div>
      </div>
    </div>
  );
}

export default Planets;
