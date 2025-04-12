import logo from "../assets/Logo.svg";
import Nav from "./Nav";

export default function Header() {
    return (
        <header className="grid grid-cols-1 gap-4 items-center p-4 md:grid-cols-2">
            <img src={logo} alt="Little Lemon" className="grid-colspan-2" />
            <Nav />
        </header>
    )
}