export default function ProgressBar({
  nextQuestion,
  prevQuestion,
  submit,
  progress,
}) {
  return (
    <div className="flex justify-between  bg-white h-16 w-auto mt-8 sticky bottom-0 rounded-md">
      <div
        className="bg-gray-300 hover:cursor-pointer hover:bg-green-400 w-10 h-10 rounded-md my-auto mx-3"
        onClick={prevQuestion}
      >
        <span className="material-icons-outlined mx-2 my-2"> arrow_back </span>
      </div>
      <div className=" bg-gray-300 w-3/4 h-1 my-auto rounded-md">
        <div
          className="border-2 border-black bg-black rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {progress === 100 ? (
        <button
          className="flex bg-gray-300 hover:bg-green-400 max-w-2xl w-auto h-10 rounded-md my-auto mx-3 gap-x-2"
          onClick={submit}
        >
          <span className=" font-semibold text-purple-900 my-2 mx-4">
            Submit
          </span>
        </button>
      ) : (
        <button
          className="bg-gray-300 hover:bg-green-400 max-w-2xl w-auto h-10 rounded-md my-auto mx-3"
          onClick={nextQuestion}
        >
          <div className="flex gap-x-2 my-2 mx-4">
            <span className="hidden xl:block text-md text-purple-900 font-semibold ">
              Next Question
            </span>
            <span className="material-icons-outlined">arrow_forward</span>
          </div>
        </button>
      )}
    </div>
  );
}
