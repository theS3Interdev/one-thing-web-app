import React, { useState } from 'react';
import JSConfetti from 'js-confetti';
import CustomForm from './components/custom-form';
import OneThing from './components/one-thing';

const jsConfetti = new JSConfetti();

function getSuccessMessage() {
	const messages = [
		'Congratulations!',
		'Congrats!',
		'Great Job!',
		"Don't you feel accomplished?",
		'To infinity and beyod!',
		'Um...that was easy',
		"Don't you like it when a plan comes together?",
		'You tried your best, now to the next one!',
	];
	return messages[Math.floor(Math.random() * messages.length)];
}

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

	const handleCompleteThing = async (e) => {
		e.target.setAttribute('disabled', true);
		setThing(getSuccessMessage());

		await jsConfetti.addConfetti({
			emojis: ['🫡', '📈', '🚀'],
		});

		e.target.removeAttribute('disabled');
		setThing('');
		setIsComplete(true);
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
				{!isComplete && (
					<OneThing thing={thing} handleCompleteThing={handleCompleteThing} />
				)}
			</div>
		</main>
	);
};

export default App;
