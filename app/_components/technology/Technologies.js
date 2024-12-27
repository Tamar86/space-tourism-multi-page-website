function Technologies({ item }) {
  return (
    <div className="flex flex-col items-center gap-5 lg:items-start">
      <div className="flex flex-col items-center justify-center lg:items-start">
        <h2>The terminology...</h2>
        <h1 className="lg:text-xxxxMedium xl:text-large">{item.name}</h1>
      </div>
      <p>{item.description}</p>
    </div>
  );
}

export default Technologies;
