import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { changeState, currentState, todosData } from "../redux/slices/todoSlice";

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
		<div className='filters-section'>
			<small>{itemsLeft()} items left</small>
			<div className='filters'>
				{filterBtns.map(btn => (
					<button
						className={`btn btn-filter ${btn === appState ? "on" : ""}`}
						key={btn}
						name={btn}
						title={`view ${btn}`}
						onClick={handleStateChange}>
						{btn}
					</button>
				))}
			</div>
			<button className='btn btn-filter' title='clear completed'>
				clear completed
			</button>
		</div>
	);
};

export default Filters;
