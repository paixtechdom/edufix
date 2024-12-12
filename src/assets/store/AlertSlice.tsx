import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface AlertInterface{
    showAlert: boolean,
    alertType: string,
    alertMessage: string,
}

const initialState: AlertInterface = {
    showAlert: false,
    alertType: "",
    alertMessage: "",
}

const alertSlice = createSlice({
    name: "alert",
    initialState,
    reducers: {
        toggleShowAlert: (state, action: PayloadAction<boolean>) => {
            state.showAlert = action.payload;
        },
        setAlertType: (state, action: PayloadAction<string>) => {
            state.alertType = action.payload
        },        
        setAlertMessage: (state, action: PayloadAction<string>) => {
            state.alertMessage = action.payload
        }
    }
})


export const { toggleShowAlert, setAlertType, setAlertMessage } = alertSlice.actions


export default alertSlice.reducer