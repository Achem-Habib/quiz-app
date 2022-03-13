import CheckboxInput from "./CheckboxInput";

export default function Answer({ questionTitle, options }) {
  return (
    <div className="bg-white mt-6 p-6 pt-4 rounded-md">
      <div className="flex gap-x-2">
        <span className="material-icons-outlined mt-1">help_outline</span>
        <span className="text-lg font-semibold">{questionTitle}</span>
      </div>
      <div className="grid md:grid-cols-2 gap-x-3 gap-y-2 mt-4">
        {options.map((option, index) => (
          <CheckboxInput
            className={`text-lg max-w-xl w-auto h-14 px-4 py-3 rounded-md ${
              option.correct
                ? "bg-green-500"
                : option.checked
                ? "bg-red-300"
                : "bg-sky-300"
            }`}
            key={index}
            text={option.title}
            value={index}
            defaultChecked={option.checked}
            disabled
          />
        ))}
      </div>
    </div>
  );
}
