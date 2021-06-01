import React from "react";
import { useAppDispatch } from "../redux/hooks";
import { delTodo, markTodo, TodoType } from "../redux/slices/todoSlice";
import { Box, BoxTitle, Button, CheckBox } from "../styles";
import closeIcon from "../assets/icons/icon-cross.svg";

const Todo = (props: TodoType) => {
	const dispatch = useAppDispatch();

	return (
		<Box>
			<CheckBox>
				<input
					type='checkbox'
					name='markTodo'
					aria-label={`mark ${props.title} as ${props.pending ? "complete" : "incomplete"}`}
					checked={!props.pending}
					onChange={() => dispatch(markTodo(props.id))}
				/>
				<span></span>
			</CheckBox>
			<BoxTitle checked={!props.pending}>{props.title}</BoxTitle>
			<Button opacity={0} title={`delete ${props.title}`} onClick={() => dispatch(delTodo(props.id))}>
				<img src={closeIcon} alt='close' />
			</Button>
		</Box>
	);
};

export default Todo;
