import { ArrowCircleRightIcon } from "@heroicons/react/solid";

const Form = ({ thing, handleInput, handleSubmit }) => {
  return (
    <>
      <h1 className="text-center text-3xl font-bold sm:text-6xl">
        What is your "One Thing"?
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex rounded-md bg-slate-200 ring-4 ring-slate-200 ring-offset-slate-200 focus-within:ring-teal-500 focus-within:ring-offset-4 dark:ring-slate-800 dark:ring-offset-slate-800"
      >
        <input
          type="text"
          className="w-full rounded-md border border-transparent bg-inherit text-xl text-slate-500 placeholder:text-slate-500 focus:border-transparent focus:outline-none"
          placeholder="Enter One Thing"
          autoFocus
          maxLength="55"
          value={thing}
          onInput={handleInput}
        />
        <button className="ml-2 rounded-md bg-inherit py-2 pr-6 text-slate-800 hover:text-teal-500 focus:text-teal-500 focus:outline-0">
          <ArrowCircleRightIcon className="pointer-events-none h-12 w-12" />
        </button>
      </form>
    </>
  );
};

export default Form;
