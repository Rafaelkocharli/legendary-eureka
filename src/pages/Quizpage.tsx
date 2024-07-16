import { Link, useParams } from "react-router-dom";
import styles from "../styles/Quizpage.module.scss";
import { useState } from "react";
import { timestampToTime } from "../utils/utils";
import ProgressBar from "../components/ProgressBar";

const Quizpage = ({ tests }: any) => {
  const params = useParams();
  const [questionId, setQuestionId] = useState(0);
  const [isTestStarted, setIsTestStarted] = useState(0);
  const [numberOfCorrectAnswers, setNumberOfCorrectAnswers] = useState(0);
  const test = tests[Number(params.id) - 1];

  const testDifficulty =
    test.difficulty === 0
      ? "Легкая"
      : test.difficulty === 1
      ? "Средняя"
      : "Сложная";
  const testTime = timestampToTime(
    test.questions.length * 10 * (test.difficulty + 1)
  );

  function nextQuestion(answerId: number) {
    if (answerId + 1 === test.questions[questionId].correct) {
      setNumberOfCorrectAnswers(numberOfCorrectAnswers + 1);
    }
    setQuestionId(questionId + 1);
    console.log(numberOfCorrectAnswers);
  }

  return (
    <div className={styles.content}>
      <div className={styles.card}>
        {isTestStarted === 1 && questionId !== test.questions.length ? (
          <div className={styles.question}>
            <ProgressBar current={questionId} maximum={test.questions.length} />
            <h1>{test.questions[questionId].name}</h1>
            <ul>
              {test.questions[questionId].answers.map(
                (answer: string, id: number) => {
                  return (
                    <li
                      onClick={() => {
                        nextQuestion(id);
                      }}
                      key={id}
                    >
                      {answer}
                    </li>
                  );
                }
              )}
            </ul>
          </div>
        ) : isTestStarted === 0 ? (
          <>
            <Link to="/">Вернуться к тестам</Link>
            <div className={styles.question}>
              <h1>{test.name}</h1>
              <div>
                <span>Количество вопросов: {test.questions.length}</span>
                <span>Сложность: {testDifficulty}</span>
                <span>Время прохождения: {testTime}</span>
              </div>
              <button
                onClick={() => {
                  setIsTestStarted(1);
                }}
              >
                Начать
              </button>
            </div>
          </>
        ) : (
          <div className={styles.question}>
            <h1>{test.results[numberOfCorrectAnswers]}</h1>
            <div>
              <span>
                Количество правильных ответов: {numberOfCorrectAnswers}/
                {test.questions.length}
              </span>
            </div>
            <Link to="/" className={styles.buttonLink}>
              <button>Другие тесты</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quizpage;
