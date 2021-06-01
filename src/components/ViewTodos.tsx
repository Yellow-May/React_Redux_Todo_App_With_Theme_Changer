import React from "react";
import { useAppSelector } from "../redux/hooks";
import { currentState, todosData } from "../redux/slices/todoSlice";
import Todo from "./Todo";

const ViewTodos = () => {
	const todos = useAppSelector(todosData);
	const appState = useAppSelector(currentState);

	const filtered = () => {
		if (appState === "active") return todos.filter(todo => todo.pending === true);
		if (appState === "completed") return todos.filter(todo => todo.pending === false);
		return todos;
	};

	return (
		<>
			{filtered().map(todo => (
				<Todo key={todo.id} {...todo} />
			))}
		</>
	);
};

export default ViewTodos;
