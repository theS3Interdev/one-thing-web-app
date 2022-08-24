import { CheckCircleIcon } from '@heroicons/react/solid';

const CustomButton = ({ text, handleCompleteThing }) => {
	return (
		<button
			className="flex items-center space-x-3 rounded-md bg-teal-500 px-6 py-3 text-2xl text-slate-200 ring-teal-500 ring-offset-4 ring-offset-slate-200 transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-4 disabled:opacity-50 dark:bg-teal-500 dark:ring-teal-500 dark:ring-offset-slate-800"
			autoFocus
			onClick={handleCompleteThing}
		>
			<span className="pointer-events-none">{text}</span>
			<CheckCircleIcon className="pointer-events-none h-12 w-12" />
		</button>
	);
};

export default CustomButton;
