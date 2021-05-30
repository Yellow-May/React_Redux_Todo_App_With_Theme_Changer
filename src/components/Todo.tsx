import React from "react";

const Todo = () => {
	return (
		<div className='todo-item'>
			<div className='check'>
				<input type='checkbox' name='markTodo' />
				<span></span>
			</div>
			<h3 className='title'>Title</h3>
			<button className='btn btn-del' title='delete Todo'></button>
		</div>
	);
};

export default Todo;
