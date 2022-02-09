import { createSlice } from "@reduxjs/toolkit";


const CardsSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: {}
    },
    reducers: {
        addCard(state, action) {
            const { id } = action.payload;        
            state.cards[id] = { ...action.payload }
        }
    },
});

export const selectCards = state => {
    return state.cards;
};

export const { addCard } = CardsSlice.actions;
export default CardsSlice.reducer;