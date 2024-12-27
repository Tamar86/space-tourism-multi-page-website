import Image from "next/image";

function Images({ item }) {
  return (
    <div>
      <Image
        src={item.images.portrait}
        quality={100}
        alt={item.name}
        className="w-full max-w-full sm:hidden lg:block lg:w-[35rem]"
        width={500}
        height={500}
      />

      <Image
        src={item.images.landscape}
        alt={item.name}
        quality={100}
        className="hidden w-full sm:block lg:hidden"
        width={500}
        height={500}
      />
    </div>
  );
}

export default Images;
