import { useState } from "react";
import Input from "../input/Input";

function TicketCard() {
  const [tripType, setTripType] = useState("oneway");
  const [from, setFrom] = useState(" select from");
  const [to, setTo] = useState("select to");
  const [date, setDate] = useState("");
  const [passenger, setPassenger] = useState(1);
  const [travelClass, setTravelClass] = useState("");

  const handleSwap = () => {
    setFrom((prevFrom) => {
      setTo(prevFrom);
      return to;
    });
  };

  return (
    <div
      className="w-full max-w-5xl mx-auto mt-10 md:-mt-14
                 rounded-2xl md:rounded-3xl
                 p-4 sm:p-6 md:p-8
                 backdrop-blur-2xl
                 bg-black/30
                 border border-white/10
                 shadow-2xl"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <div>
          <h2 className="text-white text-lg sm:text-xl md:text-2xl font-semibold">
            Flight Ticket
          </h2>
          <p className="text-white/60 text-xs sm:text-sm">
            Let's explore the world now!
          </p>
        </div>

        {/* Tabs */}
        <div className="grid grid-cols-3 gap-2 bg-white/10 p-1 rounded-full w-full  md:w-auto justify-center md:justify-start">
          {["oneway", "round", "multi"].map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setTripType(type)}
              className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm transition
                ${
                  tripType === type
                    ? "bg-white text-black"
                    : "text-white/70 hover:text-white"
                }`}
            >
              {type === "oneway"
                ? "One Way"
                : type === "round"
                ? "Round Trip"
                : "Multi Trip"}
            </button>
          ))}
        </div>
      </div>

      {/* FROM / TO */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-white/10 rounded-xl md:rounded-2xl p-3 md:p-4 border border-white/10">
          <Input
            label="FROM"
            name="from"
            type="text"
            placeholder="SYD"
            value={from}
            handleChange={(e) => setFrom(e.target.value)}
            className="text-xl md:text-2xl font-bold border-0 px-0 py-0 rounded-none focus:border-0"
          />
        </div>

        <div className="bg-white/10 rounded-xl md:rounded-2xl p-3 md:p-4 border border-white/10">
          <Input
            label="TO"
            name="to"
            type="text"
            placeholder="NYC"
            value={to}
            handleChange={(e) => setTo(e.target.value)}
            className="text-xl md:text-2xl font-bold border-0 px-0 py-0 rounded-none focus:border-0"
          />
        </div>

        {/* Swap Button */}
        <button
          type="button"
          onClick={handleSwap}
          className="absolute hidden md:flex left-1/2 top-1/2
                     -translate-x-1/2 -translate-y-1/2
                     bg-white/20 backdrop-blur-md
                     border border-white/20
                     w-10 h-10 md:w-12 md:h-12 rounded-full
                     items-center justify-center
                     text-white hover:bg-white/30 transition"
        >
          ⇄
        </button>
      </div>

      {/* Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white/10 rounded-xl md:rounded-2xl p-3 md:p-4 border border-white/10">
          <Input
            label="DEPARTURE"
            name="date"
            type="date"
            value={date}
            handleChange={(e) => setDate(e.target.value)}
            className="border-0 px-0 py-0 rounded-none focus:border-0"
          />
        </div>

        <div className="bg-white/10 rounded-xl md:rounded-2xl p-3 md:p-4 border border-white/10">
          <Input
            label="PASSENGER"
            name="passenger"
            type="number"
            value={passenger}
            handleChange={(e) => setPassenger(e.target.value)}
            className="border-0 px-0 py-0 rounded-none focus:border-0"
          />
        </div>

        <div className="bg-white/10 rounded-xl md:rounded-2xl p-3 md:p-4 border border-white/10">
          <label className="text-white/50 text-xs block mb-2">CLASS</label>
          <select
            value={travelClass}
            onChange={(e) => setTravelClass(e.target.value)}
            className="w-full bg-transparent text-white outline-none
                       border border-white/10 rounded-xl px-4 py-2
                       focus:border-white/40 transition"
          >
            <option className="text-black" value="Economy">
              Economy
            </option>
            <option className="text-black" value="Business">
              Business
            </option>
            <option className="text-black" value="First">
              First
            </option>
          </select>
        </div>
      </div>

      <button
        type="button"
        className="w-full bg-white text-black py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold
                   hover:bg-white/90 transition active:bg-zinc-300"
      >
        Search Flights
      </button>
    </div>
  );
}

export default TicketCard;