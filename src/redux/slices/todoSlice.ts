import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const hardCodedTodos = [
	{ id: "1", title: "Completed online javascript course", pending: true },
	{ id: "2", title: "Jog around the park 3x", pending: false },
	{ id: "3", title: "10 minutes meditation", pending: false },
	{ id: "4", title: "Read for 1 hour", pending: false },
	{ id: "5", title: "Pick up groceries", pending: false },
	{ id: "6", title: "Complete Todo App on Frontend Mentor", pending: false },
];

type TodoType = {
	id: string;
	title: string;
	pending: boolean;
};

export interface TodoState {
	todos: TodoType[];
	currentState: "all" | "active" | "completed";
}

const initialState: TodoState = {
	todos: hardCodedTodos,
	currentState: "all",
};

export const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		addTodo: (state, action: PayloadAction<TodoType>) => {
			state.todos.push(action.payload);
		},
		delTodo: (state, action: PayloadAction<string>) => {
			state.todos = state.todos.filter(item => item.id !== action.payload);
		},
		markTodo: (state, action: PayloadAction<string>) => {
			state.todos = state.todos.map(item => {
				if (item.id === action.payload) item.pending = !item.pending;
				return item;
			});
		},
	},
});

export const { addTodo, delTodo, markTodo } = todoSlice.actions;

export const todosData = (state: RootState) => state.todo.todos;
export const currentState = (state: RootState) => state.todo.currentState;

export default todoSlice.reducer;
