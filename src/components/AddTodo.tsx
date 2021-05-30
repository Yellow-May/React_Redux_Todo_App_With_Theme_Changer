import React from "react";
import { useAppDispatch } from "../redux/hooks";
import { addTodo } from "../redux/slices/todoSlice";
import { v4 as uuidv4 } from "uuid";

const AddTodo = () => {
	const [title, setTitle] = React.useState<string>("");

	const dispatch = useAppDispatch();

	return (
		<form
			onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
				e.preventDefault();
				dispatch(
					addTodo({
						id: uuidv4(),
						title,
						pending: false,
					})
				);
				setTitle("");
			}}>
			<div className='check'>
				<input type='checkbox' name='markTodo' />
				<span></span>
			</div>
			<input
				className='title'
				type='text'
				name='newTodo'
				value={title}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
				autoComplete='off'
			/>
			<button className='btn btn-form' type='submit' title='add new todo'>
				add
			</button>
		</form>
	);
};

export default AddTodo;
