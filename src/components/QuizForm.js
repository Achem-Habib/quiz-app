import CheckboxInput from "./CheckboxInput";

export default function QuizForm({ options = [], handleChange }) {
  return (
    <div className="grid md:grid-cols-2 gap-x-4 gap-y-4 mt-4">
      {options.map((option, index) => (
        <CheckboxInput
          className="bg-sky-300 hover:bg-sky-500 text-lg max-w-xl w-auto h-14 px-4 py-3 rounded-md"
          key={index}
          checked={option.checked}
          text={option.title}
          value={index}
          onChange={(e) => handleChange(e, index)}
        />
      ))}
    </div>
  );
}
