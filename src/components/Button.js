export default function Button({ ...rest }) {
  return (
    <button
      className="flex justify-center h-12 max-w-4xl mt-8 bg-green-400 rounded-md hover:bg-violet-800"
      {...rest}
    >
      <span className="my-auto font-semibold">SUBMIT NOW</span>
    </button>
  );
}
