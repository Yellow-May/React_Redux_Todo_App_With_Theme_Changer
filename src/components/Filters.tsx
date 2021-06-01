import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { changeState, clearCompleted, currentState, todosData } from "../redux/slices/todoSlice";
import { Box, Button, FilterGroup } from "../styles";

const filterBtns = ["all", "active", "completed"];

const Filters = () => {
	const todos = useAppSelector(todosData);
	const appState = useAppSelector(currentState);
	const dispatch = useAppDispatch();

	const itemsLeft = () => {
		if (appState === "active") return todos.filter(todo => todo.pending === true).length;
		if (appState === "completed") return todos.filter(todo => todo.pending === false).length;
		return todos.length;
	};

	const handleStateChange = (e: React.MouseEvent<HTMLButtonElement>) => {
		const name = e.currentTarget.name;

		name === "all" && dispatch(changeState("all"));
		name === "active" && dispatch(changeState("active"));
		name === "completed" && dispatch(changeState("completed"));
	};

	return (
		<Box flexBetween roundedBot>
			<small>{itemsLeft()} items left</small>
			<FilterGroup>
				{filterBtns.map(btn => (
					<Button
						className={`btn btn-filter ${btn === appState ? "on" : ""}`}
						key={btn}
						name={btn}
						title={`view ${btn}`}
						onClick={handleStateChange}>
						{btn}
					</Button>
				))}
			</FilterGroup>
			<Button className='btn btn-filter' title='clear completed' onClick={() => dispatch(clearCompleted())}>
				clear completed
			</Button>
		</Box>
	);
};

export default Filters;
