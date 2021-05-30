import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface themeState {
	theme: "dark" | "light";
}

const initialState: themeState = {
	theme: "dark",
};

export const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		toggleTheme: state => {
			state.theme = state.theme === "dark" ? "light" : "dark";
		},
	},
});

export const { toggleTheme } = themeSlice.actions;

export const currentTheme = (state: RootState) => state.theme.theme;

export default themeSlice.reducer;
