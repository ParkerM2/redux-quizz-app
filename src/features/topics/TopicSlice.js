import { createSlice } from "@reduxjs/toolkit";


const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {
            name: 'parker',
            id: '123',
            icon: '234234',
            quizIds: [],
        }
    },
    reducers: {
        addTopic(state, action) {
            action.payload.quizIds = [];
                state.topics = {
                    ...state.topics,
                    ...action.payload,
                }
           
        },
    },
});

export const selectTopics = state => {
    return state;
}

export const { addTopic } = topicsSlice.actions
export default topicsSlice.reducer