import Button from "./Button";

export default function Special({ ...props }) {
  return (
    <div className="xl:w-1/3 md:w-1/2 p-4">
      <div className="bg-gray-100 p-6 rounded-lg">
        <img
          className="h-40 rounded w-full object-cover object-center mb-6"
          src={props.image}
          alt="content"
        />
        <p className="text-base leading-relaxed mb-4 float-right text-tertiary font-bold">{props.price}</p>
        <h3 className="card-title font-medium title-font mb-4">
          {props.title}
        </h3>
        <p className="leading-relaxed text-base mb-4">{props.description}</p>
        <Button>Order a Delivery</Button>
      </div>
    </div>
  );
}
