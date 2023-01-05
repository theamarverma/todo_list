import React, { useState } from 'react';

const TodoForm = () => {
	const [input, setInput] = useState('');
	const handleChange = (e) => {
		setInput(e.target.value);
	};
	const handleSubmit = (e) => e.preventDefault();
	setInput('');
	return (
		<div>
			<title>TodoForm</title>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					className="task"
					id=""
					onChange={handleChange}
					value={input}
				/>
				<button></button>
			</form>
		</div>
	);
};

export default TodoForm;
