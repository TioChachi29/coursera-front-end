import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import Nav from "./Nav";

export default function Header() {
  return (
    <div className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Link to="/">
            <img src={logo} alt="Little Lemon" />
          </Link>
        </div>
        <Nav />
      </div>
    </div>
  );
}
