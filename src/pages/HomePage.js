import Special from "../components/Special";
import Testimonial from "../components/Testimonial";

import lemonDessert from "../assets/lemon dessert.jpg";
import greekSalad from "../assets/greek salad.jpg";
import chefB from "../assets/restaurant chef B.jpg";

export default function HomePage() {
  const testimonials = [
    {
      testimonial:
        "Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag.",
      name: "Laura",
      occupation: "Designer",
    },
    {
      testimonial:
        "Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.",
      name: "John",
      occupation: "Developer",
    },
    {
      testimonial:
        "Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag.",
      name: "Alice",
      occupation: "Manager",
    },
    {
      testimonial:
        "Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.",
      name: "Bob",
      occupation: "Chef",
    },
  ];

  const specials = [
    {
      title: "Chichen Itza",
      price: "",
      description:
        "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.",
      image: greekSalad,
    },
    {
      title: "Chichen Itza",
      price: "",
      description:
        "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.",
      image: lemonDessert,
    },
  ];

  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
              Before they sold out
              <br className="hidden lg:inline-block" />
              readymade gluten
            </h1>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-dark bg-secondary border-0 py-2 px-6 focus:outline-none hover:bg-secondary/80 rounded text-lg">
                Button
              </button>
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
      </section>

      <section>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-dark">
                This weeks specials!
              </h1>
            </div>
            <div className="lg:w-1/2 w-full flex justify-end">
              <button className="inline-flex text-dark bg-secondary border-0 py-2 px-6 focus:outline-none hover:bg-secondary/80 rounded text-lg">
                Button
              </button>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            {specials.map((special, index) => (
              <Special key={index} {...special} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
            Testimonials
          </h1>
          <div className="flex flex-wrap -m-4">
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section class="bg-primary">
        <div class="container px-5 py-24 mx-auto gap-16 items-center lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div class="font-light text-gray-300 sm:text-lg">
            <h1 className="text-3xl font-medium title-font text-white mb-12">
              We didn't reinvent the wheel
            </h1>
            <p class="mb-4">
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick, but big
              enough to deliver the scope you want at the pace you need. Small
              enough to be simple and quick, but big enough to deliver the scope
              you want at the pace you need.
            </p>
            <p>
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick.
            </p>
          </div>
          <div class="grid grid-cols-2 gap-4 mt-8">
            <img
              class="w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
              alt="office content 1"
            />
            <img
              class="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
              alt="office content 2"
            />
          </div>
        </div>
      </section>
    </>
  );
}
