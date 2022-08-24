import CustomButton from './custom-button';

const OneThing = ({ thing, handleCompleteThing }) => {
	return (
		<>
			<h1 className="text-center text-3xl font-bold sm:text-6xl">{thing}</h1>
			<CustomButton text="Mark as Done" handleCompleteThing={handleCompleteThing} />
		</>
	);
};

export default OneThing;
