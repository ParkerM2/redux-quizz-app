import { configureStore } from "@reduxjs/toolkit";
import topicsReducer from './../features/topics/TopicSlice';
import QuizSlice from "../features/quizzes/QuizSlice";
import CardSlice from "../features/cards/CardSlice";


export default configureStore({
  reducer: {
    topics: topicsReducer,
    quizzes: QuizSlice,
    cards: CardSlice,
  },
});
