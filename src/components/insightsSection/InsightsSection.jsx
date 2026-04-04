import img1 from "../../assets/images/insightsSection/InsightsSection-1.png";
import img2 from "../../assets/images/insightsSection/InsightsSection-2.png";
import img3 from "../../assets/images/insightsSection/InsightsSection-3.png";
function InsightsSection() {
    return (
        <div className="relative z-10 px-4 sm:px-6 md:px-10 pb-16 md:pb-20">
            <div className="max-w-5xl mx-auto text-center">

                <h1 className="mx-auto mt-32 mb-6 md:mb-8 font-bold text-2xl sm:text-3xl md:text-5xl text-lime-950">
                    Insights & Updates
                </h1>

                <p className="text-zinc-500 text-xs sm:text-sm md:text-base mb-12 md:mb-16">
                    From search to checkout — everything is designed to be fast and effortless.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
                    <div className=" text-center md:text-left w-full">
                        <div className="w-full h-[450px] sm:h-[420px] md:h-[450px] rounded-[15px] md:rounded-[12px] overflow-hidden mb-6">
                            <img src={img1} alt="" className="w-full h-full object-cover" />
                        </div>
                        <h3 className="text-lg font-semibold text-zinc-900 mb-2 pl-2">
                            How One Platform Simplifies Everything
                        </h3>

                        <p className="text-zinc-500 text-sm leading-6 mb-5 pl-2">
                            Booking tickets often means jumping between different apps and websites.
                        </p>

                        
                        <button className="border bg-zinc-100 text-zinc-900 text-sm px-5 py-2 rounded-full hover:bg-zinc-200 active:bg-zinc-300 transition">
                            Read More
                        </button>
                    </div>
                    <div className="w-full text-center md:text-left">
                        <div className="w-full h-[450px] sm:h-[420px] md:h-[450px] rounded-[15px] md:rounded-[12px] overflow-hidden mb-6">
                            <img src={img2} alt="" className="w-full h-full object-cover" />
                        </div>
                        <h3 className="text-lg font-semibold text-lime-950 mb-2 pl-2">
                            Designing a Faster, Frictionless Booking Flow
                        </h3>

                        <p className="text-sm text-zinc-500 leading-6 mb-5 pl-2">
                           Speed matters when booking tickets. Every extra step increases drop-off.
                        </p>

                        <button className="border bg-zinc-100 text-zinc-900 text-sm px-5 py-2 rounded-full hover:bg-zinc-200 active:bg-zinc-300 transition">
                            Read More
                        </button>
                    </div>
                    <div className="w-full text-center md:text-left">
                        <div className="w-full h-[450px] sm:h-[420px] md:h-[450px] rounded-[15px] md:rounded-[12px] overflow-hidden mb-6">
                            <img src={img3} alt="" className="w-full h-full object-cover" />
                        </div>
                        <h3 className="text-lg font-semibold text-lime-950 mb-2 pl-2">
                           Why Transparent Pricing Builds User Trust
                        </h3>


                        <p className="text-sm text-zinc-500 leading-6 mb-5 pl-2">
                            Hidden fees are one of the biggest pain points in ticket booking.
                        </p>
                        <button className="border bg-zinc-100 text-zinc-900 text-sm px-5 py-2 rounded-full hover:bg-zinc-200 active:bg-zinc-300 transition">
                            Read More
                        </button>
                    </div>
                    
                </div>
        <button className="mt-10 md:mt-14 bg-zinc-50 hover:bg-zinc-100 active:bg-zinc-200 text-zinc-900 text-xs sm:text-sm font-medium py-2.5 sm:py-3 px-6 sm:px-10 rounded-full border border-zinc-200 transition animate-bounce">
          View More
        </button>
            </div>
        </div>

    )
}
export default InsightsSection;