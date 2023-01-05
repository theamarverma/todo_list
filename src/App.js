import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
// import TodoForm from './components/TodoForm';
// import TodoList from './components/TodoList';

const App = (props) => {
	const [input, setInput] = useState('APPLE');
	const [items, setItems] = useState([]);
	const handleChange = (e) => {
		setInput(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	const addList = () => {
		setItems((items) => {
			return [...items, input]; //Add items via spread operator
		});
		setInput(''); //Reset Input
	};
	const deleteItem = (id) => {
		setItems((items) => {
			return items.filter((arrElem, index) => {
				return index !== id;
			});
		});
		console.log('deleted');
	};
	return (
		<>
			<div className="main_div">
				<div className="center_div">
					<br />
					<h1>Todo List</h1>
					<br />
					<input
						type="text"
						placeholder="Add a item"
						className="input"
						id=""
						onChange={handleChange}
						value={input}
					/>
					<button onClick={addList}>+</button>
					<ol>
						{items.map((itemval, index) => {
							return (
								<TodoList
									text={itemval}
									key={index}
									id={index}
									onSelect={deleteItem}
								/>
							);
						})}
					</ol>
				</div>
			</div>
		</>
	);
};

export default App;
