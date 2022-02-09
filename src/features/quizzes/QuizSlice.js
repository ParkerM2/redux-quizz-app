import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/TopicSlice";


const quizSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: []
    },
    reducers: {
        addQuiz(state, action) {
            state.quizzes.push(action.payload)
        },
    },
});

export const thunkActionCreatorQuiz = (payload) => {
    return (dispatch) => {
        dispatch(addQuiz(payload))
        dispatch(addQuizId(payload))
    };
}

export const selectQuiz = state => {
    return state;
};

export const { addQuiz } = quizSlice.actions;
export default quizSlice.reducer;