import React, { useState } from 'react';
import { ArrowCircleRightIcon } from '@heroicons/react/solid';

const App = () => {
	return (
		<main className="grid min-h-screen place-items-center bg-gradient-to-b from-slate-100 to-slate-200 text-slate-800 dark:from-slate-800 dark:to-slate-900 dark:text-slate-200">
			<div className="m-8 grid place-items-center gap-8">
				<h1 className="text-center text-3xl font-bold sm:text-6xl">
					What is your "One Thing"?
				</h1>
				<form className="flex rounded-md bg-slate-200 ring-4 ring-slate-200 ring-offset-slate-200 focus-within:ring-teal-500 focus-within:ring-offset-4 dark:ring-slate-800 dark:ring-offset-slate-800">
					<input
						type="text"
						className="w-full appearance-none rounded-md bg-inherit py-2 px-6 text-xl text-slate-800 caret-teal-500 placeholder:text-slate-500 focus:outline-none sm:text-2xl"
					/>
					<button className="rounded-md bg-inherit py-2 pr-6 text-slate-800 hover:text-teal-500 focus:text-teal-500 focus:outline-none">
						<ArrowCircleRightIcon className="h-12 w-12" />
					</button>
				</form>
			</div>
		</main>
	);
};

export default App;
