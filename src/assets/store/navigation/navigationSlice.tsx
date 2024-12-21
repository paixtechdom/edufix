// store

import { PayloadAction, createSlice } from "@reduxjs/toolkit";


interface NavInterface {
    showNavbar: boolean,
    currentNav: number,
    currentDropDownIndex: number,
    scrolledDown: boolean,
    currentDropDown: string;
    selectedCourse: string,
    scrollPageTo: string,
    currentCourse: number
}

const initialState: NavInterface  = {
    showNavbar: false,
    currentNav: 0,
    currentDropDownIndex: 0,
    scrolledDown: false,
    currentDropDown: "",
    selectedCourse: "",
    scrollPageTo: "",
    currentCourse: 0
}

 

const navigationSlice = createSlice({
    name: "navigation",
    initialState,
    reducers: {
        toggleShowNav: (state) => {
            state.showNavbar = !state.showNavbar;
        },
        setCurrentNav: (state, action: PayloadAction<number>) => {
            state.currentNav = action.payload
        },
        setCurrentDropDownIndex: (state, action: PayloadAction<number>) => {
            state.currentDropDownIndex = action.payload
        },
        toggleScrolledDown: (state, action: PayloadAction<boolean>) => {
            state.scrolledDown = action.payload
        },
        setCurrentDropDown: (state, action: PayloadAction<string>) => {
            state.currentDropDown = action.payload
        },
        setSelectedCourse: (state, action: PayloadAction<string>) => {
            state.selectedCourse = action.payload
        },
        setScrollPageTo: (state, action: PayloadAction<string>) => {
            state.scrollPageTo = action.payload
        },
        setCurrentCourse: (state, action: PayloadAction<number>) => {
            state.currentCourse = action.payload
        }
    }
})


export const { toggleShowNav, setCurrentNav, setCurrentDropDownIndex, toggleScrolledDown, setCurrentDropDown, setSelectedCourse, setScrollPageTo, setCurrentCourse } = navigationSlice.actions


export default navigationSlice.reducer