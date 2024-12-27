import data from "../../../data.json";

function CrewMembers({ item }) {
  return (
    <div className="flex flex-col items-center justify-center gap-10 lg:items-start">
      <div className="flex flex-col items-center justify-center gap-3 lg:items-start">
        <h2>{item.role}</h2>
        <h1>{item.name}</h1>
      </div>
      <p>{item.bio}</p>
    </div>
  );
}

export default CrewMembers;
