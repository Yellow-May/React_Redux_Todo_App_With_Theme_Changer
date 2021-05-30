import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const hardCodedTodos = [
	{ id: 1, title: "Completed online javascript course", pending: true },
	{ id: 2, title: "Jog around the park 3x", pending: false },
	{ id: 3, title: "10 minutes meditation", pending: false },
	{ id: 4, title: "Read for 1 hour", pending: false },
	{ id: 5, title: "Pick up groceries", pending: false },
	{ id: 6, title: "Complete Todo App on Frontend Mentor", pending: false },
];

type TodoType = {
	id: number;
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
		delTodo: (state, action: PayloadAction<number>) => {
			state.todos = state.todos.filter(item => item.id !== action.payload);
		},
		markTodo: (state, action: PayloadAction<number>) => {
			state.todos = state.todos.map(item => {
				if (item.id === action.payload) item.pending = !item.pending;
				return item;
			});
		},
	},
});

export const { addTodo, delTodo, markTodo } = todoSlice.actions;

export const todosData = (state: TodoState) => state.todos;
export const currentState = (state: TodoState) => state.currentState;

export default todoSlice.reducer;
