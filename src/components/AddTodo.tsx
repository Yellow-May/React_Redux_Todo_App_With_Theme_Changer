import React from "react";
import { useAppDispatch } from "../redux/hooks";
import { addTodo } from "../redux/slices/todoSlice";
import { v4 as uuidv4 } from "uuid";
import { Button, Box, BoxInput, CheckBox } from "../styles";

const AddTodo = () => {
	const [title, setTitle] = React.useState<string>("");

	const dispatch = useAppDispatch();

	return (
		<Box
			rounded
			as='form'
			onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
				e.preventDefault();
				if (title !== "") {
					dispatch(
						addTodo({
							id: uuidv4(),
							title,
							pending: true,
						})
					);
					setTitle("");
				}
			}}>
			<CheckBox>
				<input type='checkbox' name='markTodo' aria-label='inactive' disabled />
				<span></span>
			</CheckBox>
			<BoxInput
				className='title'
				type='text'
				name='newTodo'
				value={title}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
				autoComplete='off'
				placeholder='Enter new task...'
			/>
			<Button className='btn btn-form' type='submit' title='add new todo'>
				add
			</Button>
		</Box>
	);
};

export default AddTodo;
