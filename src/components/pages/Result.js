import _ from "lodash";
import { useLocation, useParams } from "react-router-dom";
import useAnswersList from "../../hooks/useAnswersList";
import Answers from "../Answers";
import Summury from "../Summury";

export default function Result() {
  const { id } = useParams();
  const location = useLocation();
  const state = location.state;
  const { qna } = state;

  const { loading, error, answers } = useAnswersList(id);

  function calculate() {
    let score = 0;

    answers.forEach((question, index1) => {
      let correctIndexes = [],
        checkedIndexes = [];

      question.options.forEach((option, index2) => {
        if (option.correct) {
          correctIndexes.push(index2);
        }
        if (qna[index1].options[index2].checked) {
          checkedIndexes.push(index2);
          option.checked = true;
        }
      });

      if (_.isEqual(correctIndexes, checkedIndexes)) {
        score = score + 5;
      }
    });

    return score;
  }

  const userScore = calculate();

  return (
    <div className="mx-8 mt-10 mb-20">
      {loading && <div>Loading...</div>}
      {error && <div>There was something error!</div>}
      {!loading && !error && (
        <>
          <Summury score={userScore} noq={answers.length} />
          <Answers answers={answers} />
        </>
      )}
    </div>
  );
}
