import Special from "../components/Special";
import Testimonial from "../components/Testimonial";

export default function HomePage() {
  return (
    <>
      <section class="bg-primary text-primary-foreground">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium">
              Before they sold out
              <br class="hidden lg:inline-block" />
              readymade gluten
            </h1>
            <p class="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-dark bg-secondary border-0 py-2 px-6 focus:outline-none hover:bg-secondary/80 rounded text-lg">
                Button
              </button>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
        </div>
      </section>

      <section>
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20">
            <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-dark">
                This weeks specials!
              </h1>
            </div>
            <div class="lg:w-1/2 w-full flex justify-end">
              <button class="inline-flex text-dark bg-secondary border-0 py-2 px-6 focus:outline-none hover:bg-secondary/80 rounded text-lg">
                Button
              </button>
            </div>
          </div>
          <div class="flex flex-wrap -m-4">
            <Special />
            <Special />
            <Special />
            <Special />
          </div>
        </div>
      </section>

      <section>
        <div class="container px-5 py-24 mx-auto">
          <h1 class="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
            Testimonials
          </h1>
          <div class="flex flex-wrap -m-4">
            <Testimonial />
            <Testimonial />
          </div>
        </div>
      </section>
    </>
  );
}
