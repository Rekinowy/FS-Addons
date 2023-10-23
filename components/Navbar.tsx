import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex-center fixed z-10 w-full sm:h-24 py-4 sm:py-6 bg-black-100 border-b-2 border-black-300 text-gray-100">
      <div className="flex-between w-full max-w-screen-2xl px-4 sm:px-8">
        <Link href="/" className=" w-[120px] sm:w-[150px]">
          <Image src="/logo.png" alt="Logo" width={150} height={43} />
        </Link>

        <Image
          src="/hamburger-menu.svg"
          alt="Hamburger Menu"
          width={30}
          height={30}
          className="block sm:hidden"
        />

        <ul className="flex gap-x-6 body-text max-sm:hidden">
          <li>
            <Link href="/">Updates</Link>
          </li>
          <li>
            <Link href="/">FAQ</Link>
          </li>
          <li className="ml-8">
            <Link
              href="/map"
              className="flex-center gap-2 text-gradient_blue font-semibold"
            >
              <FontAwesomeIcon
                icon={faMapLocationDot}
                style={{
                  color: "#4c73ff",
                }}
              />
              Map
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
