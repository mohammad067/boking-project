function Benfit(props) {
  return (
    <div className="flex flex-col items-center text-center px-4 sm:px-6 md:px-10 py-8 md:py-12 relative z-10">
      <div className="mb-4 md:mb-5">{props.icon}</div>

      <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 mb-2 md:mb-3">
        {props.title}
      </h3>

      <p className="text-xs sm:text-sm text-zinc-500 leading-6 md:leading-7 max-w-sm md:max-w-xs mb-5 md:mb-6">
        {props.description}
      </p>

      <button className="bg-zinc-100 hover:bg-zinc-200 active:bg-zinc-300 text-lime-950 text-xs sm:text-sm font-semibold py-2.5 sm:py-3 px-6 sm:px-8 rounded-full border border-zinc-200 transition">
        {props.buttonText}
      </button>
    </div>
  );
}

export default Benfit;