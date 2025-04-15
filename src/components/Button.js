export default function Button({ children, className, ...props }) {
  return (
    <button className="inline-flex text-dark bg-secondary border-0 py-2 px-6 focus:outline-none hover:bg-secondary/80 rounded text-lg h-11 cursor-pointer" {...props}>
      {children}
    </button>
  );
}
