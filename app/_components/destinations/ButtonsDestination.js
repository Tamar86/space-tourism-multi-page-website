function ButtonsDestination({ showDestination, setShowDestination, item }) {
  return (
    <button
      key={item.id}
      className={
        showDestination === item.id
          ? "text flex h-full justify-start border-b-2 uppercase"
          : "text flex h-full justify-start uppercase hover:border-b-2 hover:border-b-lightBlue-0"
      }
      onClick={() => setShowDestination(item.id)}
    >
      {item.name}
    </button>
  );
}

export default ButtonsDestination;
