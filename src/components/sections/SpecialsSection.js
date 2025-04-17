import Button from "../Button";
import SpecialCard from "../SpecialCard";

export default function SpecialsSection({ ...props }) {
  const { specials } = props;

  return (
    <section>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-dark">
              This weeks specials!
            </h1>
          </div>
          <div className="lg:w-1/2 w-full flex justify-end">
            <Button>Online menu</Button>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          {specials.map((special, index) => (
            <SpecialCard key={index} {...special} />
          ))}
        </div>
      </div>
    </section>
  );
}
