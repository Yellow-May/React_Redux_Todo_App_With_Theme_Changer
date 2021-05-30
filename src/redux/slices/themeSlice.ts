import { createSlice } from "@reduxjs/toolkit";

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

export const currentTheme = (state: themeState) => state.theme;

export default themeSlice.reducer;
