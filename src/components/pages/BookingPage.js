import BookingForm from "../BookingForm";

export default function BookingPage(props) {
  return (
    <>
      <header className="bg-primary text-primary-foreground">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow flex flex-col items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
              Reserve a table
            </h1>
            <p className="leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </header>

      <section className="bg-gray-100/50">
        <div className="max-w-xl mx-auto px-4 py-24">
          <BookingForm
            availableTimes={props.availableTimes}
            dispatch={props.dispatch}
            submitForm={props.submitForm}
          />
        </div>
      </section>
    </>
  );
}
