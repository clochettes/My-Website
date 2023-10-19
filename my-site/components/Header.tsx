export default function Header() {
  return (
    <ul className="flex flex-row justify-around my-2">
      <li className="flex inline flex-row text-lg my-0.2">
        <a>clochettes</a>
      </li>
      <div className="flex inline flex-row text-xl space-x-10">
        <a>Home</a>
        <a>About</a>
        <a>Projects</a>
        <a>Contact</a>
      </div>
    </ul>
  );
}
