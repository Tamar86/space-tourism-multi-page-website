import Image from "next/image";
import hamburger from "@/public/shared/icon-hamburger.svg";

function Modal({ setNavShow }) {
  return (
    <button
      className="relative z-20 md:hidden"
      onClick={() => setNavShow((show) => !show)}
    >
      <Image src={hamburger} alt="Menu button" />
    </button>
  );
}

export default Modal;
