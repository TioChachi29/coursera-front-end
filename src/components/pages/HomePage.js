import lemonDessert from "../../assets/lemon dessert.jpg";
import greekSalad from "../../assets/greek salad.jpg";
import bruschetta from "../../assets/bruschetta.jpg";
import chefB from "../../assets/restaurant chef B.jpg";
import marioAdrianA from "../../assets/Mario and Adrian A.jpg";
import marioAdrianB from "../../assets/Mario and Adrian b.jpg";
import Button from "../Button";
import { Link } from "react-router-dom";
import SpecialsSection from "../sections/SpecialsSection";
import TestimonialsSection from "../sections/TestimonialsSection";

export default function HomePage() {
  const testimonials = [
    {
      testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolor? Natus dignissimos a ratione quod.",
      name: "Laura",
      occupation: "DESIGNER",
    },
    {
      testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolor? Natus dignissimos a ratione quod.",
      name: "John",
      occupation: "DEVELOPER",
    },
    {
      testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolor? Natus dignissimos a ratione quod.",
      name: "Alice",
      occupation: "MANAGER",
    },
    {
      testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolor? Natus dignissimos a ratione quod.",
      name: "Bob",
      occupation: "CHEF",
    },
  ];

  const specials = [
    {
      title: "Greek Salad",
      price: "$12.99",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolor? Natus dignissimos a ratione quod? Dolore dignissimos perspiciatis corrupti sapiente beatae laudantium.",
      image: greekSalad,
    },
    {
      title: "Lemon Dessert",
      price: "$12.99",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolor? Natus dignissimos a ratione quod? Dolore dignissimos perspiciatis corrupti sapiente beatae laudantium.",
      image: lemonDessert,
    },
    {
      title: "Bruschetta",
      price: "$12.99",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolor? Natus dignissimos a ratione quod? Dolore dignissimos perspiciatis corrupti sapiente beatae laudantium.",
      image: bruschetta,
    },
  ];

  return (
    <>
      <header className="bg-primary text-primary-foreground">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
              Before they sold out
              <br className="hidden lg:inline-block" />
              readymade gluten
            </h1>
            <p className="mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
              dolor? Natus dignissimos a ratione quod? Dolore dignissimos
              perspiciatis corrupti sapiente beatae laudantium, at ducimus iusto
              labore tempore fugiat voluptate facere.
            </p>
            <div className="flex justify-center">
              <Link to="/booking">
                <Button>Reserve a table</Button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={chefB}
            />
          </div>
        </div>
      </header>

      <SpecialsSection specials={specials} />

      <TestimonialsSection testimonials={testimonials} />

      <section className="bg-primary">
        <div className="container px-5 py-24 mx-auto gap-16 items-center lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="text-gray-300 sm:text-lg">
            <h1 className="text-3xl font-medium title-font text-white mb-2">
              Little Lemon
            </h1>
            <h2 className="text-white mb-8">Chicago</h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
              dolor? Natus dignissimos a ratione quod? Dolore dignissimos
              perspiciatis corrupti sapiente beatae laudantium, at ducimus iusto
              labore tempore fugiat voluptate facere.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
              dolor? Natus dignissimos a ratione quod.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src={marioAdrianA}
              alt="office content 1"
            />
            <img
              className="mt-12 w-full lg:mt-10 rounded-lg -ml-22"
              src={marioAdrianB}
              alt="office content 2"
            />
          </div>
        </div>
      </section>
    </>
  );
}
