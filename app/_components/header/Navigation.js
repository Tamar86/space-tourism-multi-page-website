import Link from "next/link";
import { usePathname } from "next/navigation";
import CloseButton from "./CloseButton";

function Navigation({ navShow, setNavShow }) {
  const pathname = usePathname();

  const navItems = [
    { id: "00", label: "Home", path: "/" },
    { id: "01", label: "Destination", path: "/destination" },
    { id: "02", label: "Crew", path: "/crew" },
    { id: "03", label: "Technology", path: "/technology" },
  ];

  return (
    <nav
      className={`fixed right-0 top-0 z-20 h-full w-[50%] transform backdrop-blur-[80px] backdrop-brightness-125 duration-500 ease-in-out md:h-24 md:w-[86%] md:grid-cols-[2rem_1fr] lg:w-[55%] ${navShow ? "translate-x-0" : "translate-x-full"} md:relative md:top-0 md:translate-x-0`}
    >
      <CloseButton setNavShow={setNavShow} />
      <ul className="flex h-full w-full flex-col items-start gap-8 pl-8 text-base uppercase tracking-[2px] md:flex md:h-full md:flex-row md:items-center md:justify-between md:gap-3 md:px-16 lg:pl-24 lg:pr-36">
        {navItems.map((item) => (
          <li
            className="group flex h-fit w-full justify-between md:h-full md:w-fit md:flex-col"
            key={item.id}
          >
            <Link
              className="flex h-full items-center justify-center gap-2"
              href={item.path}
            >
              <span className="font-bold">{item.id}</span>
              <span>{item.label}</span>
            </Link>

            {pathname === item.path && (
              <div className="bg-white-0 h-full w-1 md:relative md:bottom-0 md:h-1 md:w-full"></div>
            )}
            {pathname !== item.path && (
              <div className="bg-lightBlue-0 relative h-full w-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:relative md:bottom-0 md:h-1 md:w-full"></div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
