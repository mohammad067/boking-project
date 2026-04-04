import board from "../../assets/images/PopularTickets.png";
import board1 from "../../assets/images/PopularTickets1.png";

function PopularTickets() {
  return (
    <section className="w-full px-4 sm:px-6 md:px-10 py-16 md:py-20">
      <div className="max-w-5xl mx-auto text-center">

        <p className="mx-auto text-xs sm:text-sm opacity-60 font-semibold mb-3">
          Product
        </p>

        <h1 className="mx-auto mb-6 md:mb-9 font-bold text-2xl sm:text-3xl md:text-4xl text-lime-950">
          Popular tickets right now
        </h1>

        <p className="text-zinc-500 text-xs sm:text-sm md:text-base mb-12 md:mb-16">
          The most booked flights, events, and shows — updated in real time.
        </p>

        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {/* card 1 */}
          <div className="w-full h-[450px] sm:h-[420px] md:h-[450px] rounded-[24px] md:rounded-[28px] overflow-hidden">
            <img src={board} alt="" className="w-full h-full object-cover" />

            <div className="bg-white rounded-xl md:rounded-2xl mx-2 -mt-[100px] md:-mt-[125px] relative z-10 px-4 md:px-5 py-3 md:py-4">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-zinc-900">CGK</h3>
                <span className="text-xl sm:text-2xl md:text-3xl text-zinc-900">🛬</span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-zinc-900">SIN</h3>
              </div>

              <div className="flex items-center justify-between text-[10px] sm:text-xs text-zinc-500 mb-2 md:mb-3">
                <span>Indonesia</span>
                <span>Singapore</span>
              </div>

              <div className="flex items-center justify-between text-[10px] sm:text-xs text-zinc-400">
                <span>DEP 08:00</span>
                <span>ETA 09:15</span>
              </div>
            </div>
          </div>

          {/* card 2 */}
          <div className="w-full h-[450px] sm:h-[420px] md:h-[450px] rounded-[24px] md:rounded-[28px] overflow-hidden">
            <img src={board1} alt="" className="w-full h-full object-cover" />

            <div className="bg-white rounded-xl md:rounded-2xl mx-2 -mt-[100px] md:-mt-[125px] relative z-10 px-4 md:px-5 py-3 md:py-4">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-zinc-900">CGK</h3>
                <span className="text-xl sm:text-2xl md:text-3xl text-zinc-900">🛬</span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-zinc-900">NRT</h3>
              </div>

              <div className="flex items-center justify-between text-[10px] sm:text-xs text-zinc-500 mb-2 md:mb-3">
                <span>Indonesia</span>
                <span>Japan</span>
              </div>

              <div className="flex items-center justify-between text-[10px] sm:text-xs text-zinc-400">
                <span>DEP 08:00</span>
                <span>ETA 10:15</span>
              </div>
            </div>
          </div>

          {/* card 3 */}
          <div className="w-full h-[450px] sm:h-[420px] md:h-[450px] rounded-[24px] md:rounded-[28px] overflow-hidden">
            <img src={board} alt="" className="w-full h-full object-cover" />

            <div className="bg-white rounded-xl md:rounded-2xl mx-2 -mt-[100px] md:-mt-[125px] relative z-10 px-4 md:px-5 py-3 md:py-4">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-zinc-900">CGK</h3>
                <span className="text-xl sm:text-2xl md:text-3xl text-zinc-900">🛬</span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-zinc-900">KEF</h3>
              </div>

              <div className="flex items-center justify-between text-[10px] sm:text-xs text-zinc-500 mb-2 md:mb-3">
                <span>Indonesia</span>
                <span>Iceland</span>
              </div>

              <div className="flex items-center justify-between text-[10px] sm:text-xs text-zinc-400">
                <span>DEP 08:00</span>
                <span>ETA 12:45</span>
              </div>
            </div>
          </div>

        </div>

        <button className="mt-10 md:mt-14 bg-zinc-100 hover:bg-zinc-200 active:bg-zinc-300 text-zinc-900 text-xs sm:text-sm font-medium py-2.5 sm:py-3 px-6 sm:px-10 rounded-full border border-zinc-200 transition">
          View More
        </button>

      </div>
    </section>
  );
}

export default PopularTickets;