import { Link } from "react-router-dom";
import styles from "../styles/Listquizpage.module.scss";
import { timestampToTime } from "../utils/utils";
const Listquizpage = ({ tests }: any) => {
  return (
    <div className={styles.content}>
      <h1>Тесты</h1>
      <ul className={styles.list}>
        {tests.map((test: any) => {
          return (
            <li className={styles.listElement} key={test.id}>
              <img src={require(`../images/${test.image}`)} alt="" />
              <div className={styles.information}>
                <div className={styles.name}>{test.name}</div>
                <div className={styles.icons}>
                  <div>
                    <i className="fi fi-rr-question-square"></i>{" "}
                    <span>{test.questions.length}</span>
                  </div>
                  <div>
                    <i className="fi fi-rr-clock"></i>{" "}
                    <span>
                      {timestampToTime(
                        test.questions.length * 10 * (test.difficulty + 1)
                      )}
                    </span>
                  </div>
                  <div>
                    <i className="fi fi-rr-chart-histogram"></i>{" "}
                    <span>
                      {test.difficulty === 0
                        ? "Легкий"
                        : test.difficulty === 1
                        ? "Средний"
                        : "Сложный"}
                    </span>
                  </div>
                </div>
              </div>

              <Link to={`/test/${test.id}`}>Пройти тест {"->"}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Listquizpage;
