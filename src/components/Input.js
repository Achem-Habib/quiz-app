export default function Input({ icon, ...rest }) {
  return (
    <div className="flex justify-between w-auto h-12 max-w-3xl bg-white rounded-md ring-sky-300 ">
      <input
        className="w-11/12 h-full px-4 text-xl rounded-l-md focus:outline-0"
        {...rest}
      />
      <span className="my-auto mr-2 material-icons-outlined"> {icon} </span>
    </div>
  );
}
