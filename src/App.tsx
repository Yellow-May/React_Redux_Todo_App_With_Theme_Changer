import React from "react";
import { useAppSelector } from "./redux/hooks";
import AddTodo from "./components/AddTodo";
import Filters from "./components/Filters";
import Header from "./components/Header";
import ViewTodos from "./components/ViewTodos";
import { currentTheme } from "./redux/slices/themeSlice";

function App() {
	const theme = useAppSelector(currentTheme);
	const classes = theme === "dark" ? "App dark" : "App light";

	return (
		<div className={classes}>
			<Header />
			<AddTodo />
			<main>
				<ViewTodos />
				<Filters />
			</main>
		</div>
	);
}

export default App;
