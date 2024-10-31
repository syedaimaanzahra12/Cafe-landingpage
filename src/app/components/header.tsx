import Link from "next/link";

function Header() {
  return (
    <header className="bg-red-950 bg-opacity-90 fixed top-0 w-full">
      <nav>
        <div className=" container flex flex-col p-4 sm:flex-row sm:justify-between ">
          {/* <!-- Brand Name/Logo --> */}
          <Link
            href="/"
            className="font-bold font-serif text-opacity-95 text-orange-300 hover:text-rose-400  italic text-center sm:text-lg md:text-xl  xl:text-3xl 2xl:text-5xl "
          >
            Quaint Cafe
          </Link>


          {/* <!-- Navigation Links --> */}
          <ul className="flex flex-1 justify-evenly xl:space-x-8">
            <li>
              <Link
                href="#home"
                className="italic font-serif text-xs  font-medium text-opacity-90 text-orange-400 hover:text-red-300 sm:text-base md:text-lg xl:text-2xl 2xl:text-4xl"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#menu"
                className="italic font-serif text-xs font-medium text-opacity-90 text-orange-400  hover:text-red-300 sm:text-base md:text-lg xl:text-2xl 2xl:text-4xl"
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="italic font-serif text-xs font-medium text-opacity-90 text-orange-400  hover:text-red-300 sm:text-base md:text-lg xl:text-2xl 2xl:text-4xl"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="italic font-serif text-xs font-medium text-opacity-90 text-orange-400  hover:text-red-300 sm:text-base md:text-lg xl:text-2xl 2xl:text-4xl"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
