import { createSlice } from "@reduxjs/toolkit";


const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: []
    },
    reducers: {
        addTopic(state, action) {
            // init empty array for quizIds as it isn't declared in the obj returned from the form
            action.payload.quizIds = [];
            
            // push new topic + empty quizId array into store
            state.topics.push(action.payload)
        },
        addQuizId(state, action) {
            // payload = {quizId: '123', topicId: '456'}
            let quizId = action.payload.id
            // filtering current topics array to see if I can grab the matching topic id
            state.topics.filter((item) => item.id === action.payload.topicId ? item.quizIds.push(quizId) : null)
        }
    },
});

export const selectTopics = state => {
    return state;
};

export const { addTopic, addQuizId } = topicsSlice.actions;
export default topicsSlice.reducer;