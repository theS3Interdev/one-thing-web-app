import React, { useState } from 'react';
import CustomForm from './components/custom-form';

const App = () => {
	/** declare variables */
	const [thing, setThing] = useState('');
	const [isComplete, setIsComplete] = useState(true);

	const handleInput = (e) => {
		setThing(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsComplete(false);
	};

	return (
		<main className="grid min-h-screen place-items-center bg-gradient-to-b from-slate-100 to-slate-200 text-slate-800 dark:from-slate-800 dark:to-slate-900 dark:text-slate-200">
			<div className="m-8 grid place-items-center gap-8">
				{isComplete && (
					<CustomForm
						thing={thing}
						handleInput={handleInput}
						handleSubmit={handleSubmit}
					/>
				)}
			</div>
		</main>
	);
};

export default App;
