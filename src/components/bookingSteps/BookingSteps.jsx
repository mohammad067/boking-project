import image2 from "../../assets/images/bg-landing/bg-landing4.png";

function BookingSteps() {
  return (
    <section className="relative w-full overflow-hidden py-20">

      <img
        src={image2}
        alt="bg-landing4"
        className="absolute inset-0 w-full h-full object-cover rounded-b-2xl -z-10"
      />
      <div className="relative z-10 px-4 sm:px-6 md:px-10 pb-16 md:pb-20">
        <div className="max-w-5xl mx-auto text-center">
          <p className="mx-auto text-xs sm:text-sm opacity-60 font-semibold mb-3">
            HOW IT WORKS
          </p>

          <h1 className="mx-auto mb-6 md:mb-8 font-bold text-2xl sm:text-3xl md:text-5xl text-lime-950">
            Book tickets in 3 simple steps
          </h1>

          <p className="text-zinc-500 text-xs sm:text-sm md:text-base mb-12 md:mb-16">
            From search to checkout — everything is designed to be fast and effortless.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-1 max-w-6xl mx-auto">
            <div className="bg-white rounded-[15px] p-6 min-h-[350px] md:p-8 text-center shadow-sm md:text-left">
              <div className="w-14 h-14 mx-auto md:mx-0 bg-lime-950 justify-center items-center flex text-4xl text-white rounded-xl mb-16 pb-1">
                🔍
              </div>
              <h2 className=" text-3xl text-zinc-900  font-medium mb-5 ">
                /01
              </h2>
              <h3 className="text-xl font-semibold text-zinc-900 mb-4">
                Search Any Ticket
              </h3>
              <p className="text-zinc-500">
                Find flights, trains, concerts, movies, or events in one search.
                Use smart filters to quickly narrow down by date, price, or location.
              </p>
            </div>
            <div className="bg-white rounded-[15px] p-6 min-h-[350px] md:p-8 text-center shadow-sm md:text-left">
              <div className="w-14 h-14 pb-1 mx-auto md:mx-0 bg-lime-950 justify-center items-center flex text-4xl text-white rounded-xl mb-16">
                ⇄
              </div>
              <h2 className=" text-3xl text-zinc-900  font-medium mb-5 ">
                /01
              </h2>
              <h3 className="text-xl font-semibold text-zinc-900 mb-4">
                Search Any Ticket
              </h3>
              <p className="text-zinc-500">
                Find flights, trains, concerts, movies, or events in one search.
                Use smart filters to quickly narrow down by date, price, or location.
              </p>
            </div>
            <div className="bg-white rounded-[15px] p-6 min-h-[350px] md:p-8 text-center shadow-sm md:text-left ">
              <div className="w-14 h-14 mx-auto md:mx-0 bg-lime-950 justify-center items-center flex text-4xl text-white rounded-xl mb-16 pb-1 ">
                🎫
              </div>
              <h2 className=" text-3xl text-zinc-900  font-medium mb-5 ">
                /01
              </h2>
              <h3 className="text-xl font-semibold text-zinc-900 mb-4">
                Search Any Ticket
              </h3>
              <p className="text-zinc-500">
                Find flights, trains, concerts, movies, or events in one search.
                Use smart filters to quickly narrow down by date, price, or location.
              </p>
            </div>

          </div>
          <div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookingSteps;