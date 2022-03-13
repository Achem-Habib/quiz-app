export default function CheckboxInput({ text, className, ...rest }) {
  return (
    <label className={className}>
      <input className="mr-2" type="checkbox" {...rest} />
      {text}
    </label>
  );
}
