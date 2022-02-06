import { createSlice } from "@reduxjs/toolkit";


const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: [
            {
            name: 'parker',
            id: '123',
            icon: '234234',
            quizIds: [],
            }
        ]
    },
    reducers: {
        addTopic(state, action) {
            action.payload.quizIds = [];
            state.topics.push(action.payload)
        },
        addQuizId(state, action) {
            // payload = {quizId: '123', topicId: '456'}
            let quizId = action.payload.id
            // filtering current topics array to see if I can grab the matching topic id
            // clean this up a bit
            state.topics.filter((item) => item.id === action.payload.topicId ? item.quizIds.push(quizId) : console.log(item.id, 'false'))
        }
    },
});

export const selectTopics = state => {
    return state;
};

export const { addTopic, addQuizId } = topicsSlice.actions;
export default topicsSlice.reducer;