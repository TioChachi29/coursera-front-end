import logo from "../assets/Logo.svg";
import Nav from "./Nav";

export default function Header() {
  return (
    <header class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={logo} alt="Little Lemon" />
        </div>
        <Nav />
      </div>
    </header>
  );
}