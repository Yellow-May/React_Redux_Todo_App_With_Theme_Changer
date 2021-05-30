import React from "react";
import { useAppSelector } from "../redux/hooks";
import { currentState, todosData } from "../redux/slices/todoSlice";
import Todo from "./Todo";

const ViewTodos = () => {
	const todos = useAppSelector(todosData);
	const appState = useAppSelector(currentState);

	const filtered = () => {
		switch (appState) {
			case "active":
				return todos.filter(todo => (todo.pending = false));
			case "all":
				return todos;
			case "completed":
				return todos.filter(todo => (todo.pending = true));
			default:
				return todos;
		}
	};

	return (
		<div className='view-todos'>
			{filtered().map(todo => (
				<Todo key={todo.id} {...todo} />
			))}
		</div>
	);
};

export default ViewTodos;
