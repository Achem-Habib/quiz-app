import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useAnswersList(videoID) {
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    async function fetchAnswers() {
      const db = getDatabase();
      const answerRef = ref(db, "answers/" + videoID + "/questions");
      const answerQuery = query(answerRef, orderByKey());

      try {
        setLoading(true);
        setError(false);
        const snapshot = await get(answerQuery);
        setLoading(false);
        if (snapshot.exists()) {
          setAnswers((prevAnswers) => {
            return [...prevAnswers, ...Object.values(snapshot.val())];
          });
        } else {
          console.log("No Answers");
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }

    fetchAnswers();
  }, [videoID]);

  return { loading, error, answers };
}
