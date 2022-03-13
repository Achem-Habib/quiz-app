import successImage from "../assets/images/success.png";

export default function Summury({ score, noq }) {
  return (
    <div className="flex flex-col gap-y-4 ">
      <div className="grid justify-center md:grid-cols-2">
        <h1 className="text-xl font-semibold mx-auto md:self-center ">
          Your score is{" "}
          <p>
            {score} out of {noq * 5}
          </p>
        </h1>
        <img className="w-auto max-w-sm" src={successImage} alt="success" />
      </div>
      <div className="flex flex-col gap-y-2 border-b border-gray-400 pb-6">
        <h1 className="text-4xl font-bold">Question Analysis</h1>
      </div>
    </div>
  );
}
