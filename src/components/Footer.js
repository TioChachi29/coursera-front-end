import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";

export default function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img src={logo} alt="Little Lemon" />
          </div>
          <p className="mt-2 text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h3 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Doormat Navigation
            </h3>
            <nav className="list-none mb-10">
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
            </nav>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h3 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Contact
            </h3>
            <nav className="list-none mb-10">
              <li>
                <span>Address</span>
              </li>
              <li>
                <span>Phone number</span>
              </li>
              <li>
                <span>Email</span>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h3 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Social media links
            </h3>
            <nav className="list-none mb-10">
              <li>
                <span>Address</span>
              </li>
              <li>
                <span>Phone number</span>
              </li>
              <li>
                <span>Email</span>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2025 Little Lemon
          </p>
        </div>
      </div>
    </footer>
  );
}
