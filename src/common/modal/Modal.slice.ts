import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';


export interface CounterState {
    details: {
        isError: boolean,
        type: number;
        message: string;
    },
    status: 'idle' | 'loading' | 'failed';
}

const initialState: CounterState = {
    details: {
        isError: false ,
        type: 1,
        message: "info!!!",
    },
    status: 'idle',
};

// reducer
export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {

        setModalMessage: (state, action: PayloadAction<any>) => {
            state.details += action.payload?.details;
        },
    },
});

// actions
export const { setModalMessage } = modalSlice.actions;

// selectors
export const modalDetailsSelector = (state: RootState) => state.modal.details;


export default modalSlice.reducer;