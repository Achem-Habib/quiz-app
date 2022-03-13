import { getDatabase, ref, set } from "firebase/database";
import _ from "lodash";
import { useEffect, useReducer, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import useQuestionList from "../../hooks/useQuestionList";
import Miniplayer from "../Miniplayer";
import ProgressBar from "../ProgressBar";
import QuizForm from "../QuizForm";

const initialState = null;

const reducer = (state, action) => {
  switch (action.type) {
    case "questions":
      action.value.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false;
        });
      });
      return action.value;
    case "answer":
      const questions = _.cloneDeep(state);
      questions[action.questionID].options[action.optionIndex].checked =
        action.value;

      return questions;
    default:
      return state;
  }
};

export default function Quiz() {
  const { id } = useParams();
  const { loading, error, questions } = useQuestionList(id);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [qna, dispatch] = useReducer(reducer, initialState);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const location = useLocation();
  const state = location.state;
  const { videoTitle } = state;

  useEffect(() => {
    dispatch({
      type: "questions",
      value: questions,
    });
  }, [questions]);

  function handleAnswerChange(e, index) {
    dispatch({
      type: "answer",
      questionID: currentQuestion,
      optionIndex: index,
      value: e.target.checked,
    });
  }

  // handle when user clicks the next button to get the next question
  function nextQuestion() {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prevCurrent) => prevCurrent + 1);
    }
  }

  // handle when user clicks the prev button to get back to the previous question
  function prevQuestion() {
    if (currentQuestion >= 1 && currentQuestion <= questions.length) {
      setCurrentQuestion((prevCurrent) => prevCurrent - 1);
    }
  }

  // submit quiz
  async function submit() {
    const { uid } = currentUser;

    const db = getDatabase();
    const resultRef = ref(db, `result/${uid}`);

    await set(resultRef, {
      [id]: qna,
    });

    navigate(`/result/${id}`, {
      state: { qna },
    });
  }

  // calculate percentage of progress
  const percentage =
    questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0;

  return (
    <div>
      {loading && <div>Loading... </div>}
      {error && <div>There was something wrong!</div>}
      {!loading && !error && qna && qna.length > 0 && (
        <div className="mx-8 mt-10 mb-6">
          <div className="pb-4 border-b border-black">
            <h1 className="text-4xl font-semibold">
              {qna[currentQuestion].title}
            </h1>
            <h4 className="text-lg font-semibold">
              Question can have multiple answers
            </h4>
          </div>
          <QuizForm
            options={qna[currentQuestion].options}
            handleChange={handleAnswerChange}
          />
          <ProgressBar
            nextQuestion={nextQuestion}
            prevQuestion={prevQuestion}
            progress={percentage}
            submit={submit}
          />
          <Miniplayer youtubeID={id} title={videoTitle} />
        </div>
      )}
    </div>
  );
}
