import React from 'react';
import './Todo.css'

const Todo: React.FC = () => {
  return (
    <div className="todo">
      <h1 className="main-title">To Do list</h1>
      <form>
        <input
          type="text"
          />

        <button className="btn btn-add" type="submit">Add</button>
      </form>
      <ul>
        <li>
          <input
          type="checkbox"
          />
          <button>Delete</button>
        </li>
      </ul>
    </div>
  );
};

export default Todo;