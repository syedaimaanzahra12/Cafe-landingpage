import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-red-950 bg-opacity-90 flex flex-col flex-wrap justify-between fixed bottom-0  w-full sm:flex-row ">
      <div>
        <p className="text-orange-400 text-opacity-80 font-serif font-bold text-sm italic m-2  sm:text-lg">
          Quaint Cafe
        </p>
        <p className="text-orange-400 text-opacity-85 font-serif font-semibold italic text-[10px] m-2 sm:text-base">
          Your cozy corner for the best coffee and snacks in town.
        </p>
      </div>
      <ul className=" flex space-x-1 font-medium italic text-xs m-2 text-orange-200 sm:text-base sm:flex-col">
        <li>
          <Link href="/"  target="_main" className="hover:text-red-800">
            Facebook
          </Link>
        </li>
        <li>
          <Link href="/" target="_main" className="hover:text-red-800">
            Instagram
          </Link>
        </li>
        <li>
          <Link href="/" target="_main" className="hover:text-red-800">
            Location
          </Link>
        </li>
      </ul>
      <div className="flex text-[10px] text-center m-2 text-orange-200 sm:text-sm">
        &copy; All rights reserved
      </div>
    </footer>
  );
}
