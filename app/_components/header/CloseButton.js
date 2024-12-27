import Image from "next/image";
import closeBtn from "@/public/shared/icon-close.svg";

function CloseButton({ setNavShow }) {
  return (
    <button
      onClick={() => setNavShow(false)}
      className="mb-16 flex w-full justify-end p-8 md:hidden"
    >
      <Image src={closeBtn} alt="Close button" />
    </button>
  );
}

export default CloseButton;
