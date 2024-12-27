function ButtonsCrew({ crewMember, setCrewMember, btn }) {
  return (
    <button
      key={btn.id}
      className={
        crewMember === btn.id
          ? "h-small w-small rounded-full bg-white-0"
          : "h-small w-small rounded-full bg-gray-0"
      }
      onClick={() => setCrewMember(btn.id)}
    ></button>
  );
}

export default ButtonsCrew;
