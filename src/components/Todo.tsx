import React from "react";
import { useAppDispatch } from "../redux/hooks";
import { delTodo, markTodo, TodoType } from "../redux/slices/todoSlice";
import closeIcon from "../assets/icons/icon-cross.svg";

const Todo = (props: TodoType) => {
	const dispatch = useAppDispatch();

	return (
		<div className='todo-item'>
			<div className='check'>
				<input
					type='checkbox'
					name='markTodo'
					checked={!props.pending}
					onChange={() => dispatch(markTodo(props.id))}
				/>
				<span></span>
			</div>
			<h3 className='title'>{props.title}</h3>
			<button className='btn btn-del' title='delete Todo' onClick={() => dispatch(delTodo(props.id))}>
				<img src={closeIcon} alt='close' />
			</button>
		</div>
	);
};

export default Todo;
