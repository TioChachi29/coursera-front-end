import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="md:ml-auto">
      <ul className="flex flex-wrap gap-6 items-center text-base justify-center">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <span>About</span>
        </li>
        <li>
          <span>Menu</span>
        </li>
        <li>
          <span>Reservations</span>
        </li>
        <li>
          <span>Order Online</span>
        </li>
        <li>
          <span>Login</span>
        </li>
      </ul>
    </nav>
  );
}
