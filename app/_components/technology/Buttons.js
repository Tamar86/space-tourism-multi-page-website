function Buttons({ showTechnology, setShowTechnology, item }) {
  return (
    <button
      className={
        showTechnology === item.id
          ? "h-10 w-10 rounded-full bg-white-0 font-light leading-relaxed sm:h-10 sm:w-10 md:h-14 md:w-14 md:text-4xl lg:h-20 lg:w-20"
          : "h-10 w-10 rounded-full border-[0.5px] font-light text-white-0 sm:h-10 sm:w-10 md:h-14 md:w-14 md:text-4xl lg:h-20 lg:w-20"
      }
      onClick={() => setShowTechnology(item.id)}
    >
      {item.id}
    </button>
  );
}

export default Buttons;
