import React from "react";
import { TodoType } from "../redux/slices/todoSlice";
import closeIcon from "../assets/icons/icon-cross.svg";

const Todo = (props: TodoType) => {
	return (
		<div className='todo-item'>
			<div className='check'>
				<input type='checkbox' name='markTodo' />
				<span></span>
			</div>
			<h3 className='title'>{props.title}</h3>
			<button className='btn btn-del' title='delete Todo'>
				<img src={closeIcon} alt='close' />
			</button>
		</div>
	);
};

export default Todo;
