import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

interface TodoState {
  todos: Todo[];
  loading: boolean;
  error: string | null;
}

const initialState: TodoState = {
  todos: [],
  loading: false,
  error: null,
};

const TodoSlice = createSlice({
  name: "todos",
  initialState,
    reducers: {
      setLoading: (state) => {
        state.loading = true;
        state.error = null;
      },
      setError: (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.error = action.payload;
      },
      setTodos: (state, action: PayloadAction<Todo[]>) => {
        state.loading = false;
        state.todos = action.payload;
      },
      addNewTodo: (state, action: PayloadAction<Todo>) => {
        state.todos.push(action.payload);
      },
      updateTodo: (state, action: PayloadAction<Todo>) => {
        state.todos = state.todos.map(todo =>
          todo.id === action.payload.id ? action.payload : todo
        );
      },
      removeTodo: (state, action: PayloadAction<number>) => {
        state.todos = state.todos.reduce<Todo[]>((accum, todo) => {
          if (todo.id !== action.payload) {
            accum.push(todo)
          }
          return accum;
        }, [])
      }
    },
});

export const {setLoading,
  addNewTodo,
  updateTodo,
  removeTodo} = TodoSlice.actions;

export default TodoSlice.reducer;