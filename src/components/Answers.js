import Answer from "./Answer";

export default function Answers({ answers }) {
  return answers.map((answer, index) => (
    <div key={index}>
      <Answer questionTitle={answer.title} options={answer.options} />
    </div>
  ));
}
