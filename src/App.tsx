import React from "react";
import AddTodo from "./components/AddTodo";
import Filters from "./components/Filters";
import Header from "./components/Header";
import ViewTodo from "./components/ViewTodo";

function App() {
	return (
		<div className='App'>
			<Header />
			<AddTodo />
			<ViewTodo />
			<Filters />
		</div>
	);
}

export default App;
