export default function Special({ ...props}) {
  return (
    <div className="xl:w-1/3 md:w-1/2 p-4">
      <div className="bg-gray-100 p-6 rounded-lg">
        <img
          className="h-40 rounded w-full object-cover object-center mb-6"
          src={props.image}
          alt="content"
        />
        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
          {props.title}
        </h2>
        <p className="leading-relaxed text-base mb-4">
          {props.description}
        </p>
        <button className="inline-flex text-dark bg-secondary border-0 py-2 px-6 focus:outline-none hover:bg-secondary/80 rounded text-lg">
          Order a Delivery
        </button>
      </div>
    </div>
  );
}
