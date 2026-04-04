import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import image from "./assets/images/bg-landing.png";
import SlideTiket from "./components/slider/SlideTiket";
import TicketCard from "./components/Ticket/TicketCard";
import icon from "../src/assets/react.svg";
import Benfit from "./components/benfit/Benfit";
import image2 from "./assets/images/bg-landing4.png";
import PopularTickets from "./components/populartickets/PopularTickets";
import BookingSteps from "./components/bookingSteps/BookingSteps";
import InsightsSection from "./components/insightsSection/InsightsSection";
import AroundTextIcons from "./components/aroundTexticons/AroundTextIcons";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<div />} />
          <Route path="/explore" element={<div />} />
          <Route path="/popular" element={<div />} />
          <Route path="/articles" element={<div />} />
        </Routes>
      </BrowserRouter>


      <section className="relative text-center overflow-hidden">
        <img
          src={image}
          className="w-full h-full object-cover object-center absolute inset-0 -z-10"
          alt=""
        />

        <div className="relative z-10 pt-20 md:pt-24 pb-24 md:pb-32 px-4">
          <h1 className="mx-auto max-w-4xl mb-6 leading-tight font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl animate-pulse text-lime-950">
            One platform for every <br /> ticket you need
          </h1>

          <p className="mx-auto max-w-2xl text-sm sm:text-base md:text-lg opacity-70 font-semibold mb-8">
            one place for all your ticket booking needs
          </p>

          <button className="bg-lime-900 hover:bg-lime-800 active:bg-lime-700 text-white font-bold py-2.5 px-6 sm:px-8 rounded-full transition">
            Find tickets now
          </button>

          <SlideTiket />
          <TicketCard />
        </div>

        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-white" />
      </section>

      {/* BENEFITS */}
      <div className="text-center pt-16 md:pt-24 px-4 mb-6">
        <p className="mx-auto text-sm opacity-70 font-semibold mb-3">WHY Us</p>

        <h1 className="mx-auto mb-12 md:mb-20 font-bold text-2xl sm:text-3xl md:text-4xl text-lime-950">
          Why choose this platform
        </h1>

        <div className="relative max-w-5xl mx-auto">
          {/* خطوط فقط برای دسکتاپ */}
          <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-zinc-300 to-transparent" />

          <div className="hidden md:block absolute top-1/2 left-0 -translate-y-1/2 h-px w-full bg-gradient-to-r from-transparent via-zinc-300 to-transparent" />

          <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rotate-45 bg-zinc-300 z-20" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6 relative z-10">
            <Benfit
              icon={
                <div className="w-12 h-12 rounded-xl bg-lime-950 flex items-center justify-center">
                  <img src={icon} alt="" className="w-5 h-5 animate-spin-slow" />
                </div>
              }
              title="One Platform, All Tickets"
              description="Book flights, trains, concerts, movies, and events without switching apps or websites."
              buttonText="Learn More"
            />

            <Benfit
              icon={
                <div className="w-12 h-12 rounded-xl bg-lime-950 flex items-center justify-center">
                  <img src={icon} alt="" className="w-5 h-5 animate-spin" />
                </div>
              }
              title="Fast & Intuitive Booking"
              description="From search to checkout in just a few steps."
              buttonText="Learn More"
            />

            <Benfit
              icon={
                <div className="w-12 h-12 rounded-xl bg-lime-950 flex items-center justify-center">
                  <img src={icon} alt="" className="w-5 h-5 animate-spin-slow" />
                </div>
              }
              title="Transparent Price Comparison"
              description="Compare prices, schedules, and seat options instantly."
              buttonText="Learn More"
            />

            <Benfit
              icon={
                <div className="w-12 h-12 rounded-xl bg-lime-950 flex items-center justify-center">
                  <img src={icon} alt="" className="w-5 h-5 animate-spin-slow" />
                </div>
              }
              title="Secure & Reliable Payments"
              description="Your data and transactions are protected at every step."
              buttonText="Learn More"
            />
          </div>
        </div>
      </div>

      <PopularTickets />

      <BookingSteps />
      <InsightsSection />
      <AroundTextIcons/>
      <Footer/>
    </>
  );
}

export default App;