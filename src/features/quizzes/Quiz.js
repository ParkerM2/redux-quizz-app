import { Link, useParams } from "react-router-dom";
import Card from "../cards/Card";
import ROUTES from "../../app/routes";
import { useSelector } from 'react-redux';
import { selectQuiz } from "./QuizSlice";
import { selectCards } from './../cards/CardSlice';


export default function Topic() {
  const { quizzes } = useSelector(selectQuiz);
  let { quizId } = useParams();


  const matchId = (quiz) => {
    if (quiz.id === quizId) {
      return quiz
    }
  } 
  const quiz = quizzes.quizzes.filter(matchId);
  
  return (
    <>
      {
        quiz ? (
          <section>
            {quiz.map((quiz) => (
              <div key={quiz.id}>
                <h1>{quiz.name}</h1>
                <ul className="cards-list">
                  {quiz.cardIds.map((id) => (
                    <Card key={id} id={id} />
                  ))}
                </ul>
                <Link to={ROUTES.newQuizRoute()} className="button center">
                  Create a New Quiz
                </Link>
              </div>
            ))}
          </section>

        ) : (
          <div> loading .... </div>
        )}
    </>
  );
}
