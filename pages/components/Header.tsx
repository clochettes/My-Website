
import Link from "next/link";

export default function Header() {
  return (
    <ul className="max-sm:flex-col flex flex-row justify-around my-2 ">
      <li className=" flex inline flex-row text-lg my-0.2 ">
        <a>clochettes</a>
      </li>
      <div className="max-sm:space-x-4 flex inline flex-row text-xl space-x-10">
        <a>Home</a>
        <a>About</a>
        <Link href="components/EdenGarden">Projects</Link>
        <a>Contact</a>
      </div>
    </ul>
  );
}