import { Link } from "react-router-dom";
import Button from "../Button";

export default function ConfirmedBookingPage() {
  return (
    <>
      <header className="bg-primary text-primary-foreground">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow flex flex-col items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
              Booking has been confirmed!
            </h1>
            <p className="leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="flex justify-center mt-6">
              <Link to="/">
                <Button>Back to Home</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
