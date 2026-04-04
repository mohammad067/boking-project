import bus from "../../assets/images/slide/bus.png";
import train from "../../assets/images/slide/train.png";
import plane from "../../assets/images/slide/airplan.png";
import ship from "../../assets/images/slide/ship.png";
import hotel from "../../assets/images/slide/hotel.png";
import image from "../../assets/images/bg-landing/bg-footer.png";

function AroundTextIcons() {
  const icons = [
    { img: plane, pos: "top-4 left-1/2 -translate-x-1/2" },
    { img: bus, pos: "top-12 right-6 sm:right-14 md:right-24" },
    { img: train, pos: "top-1/2 right-0 -translate-y-1/2" },
    { img: hotel, pos: "bottom-16 right-10" },
    { img: ship, pos: "bottom-4 left-1/2 -translate-x-1/2" },
    { img: hotel, pos: "bottom-16 left-10" },
    { img: bus, pos: "top-1/2 left-0 -translate-y-1/2" },
    { img: train, pos: "top-12 left-10" },
  ];

  return (
    <section className="w-full py-10 sm:py-16 md:pt-20 overflow-hidden">
      <div className="relative w-full max-w-[320px] sm:max-w-[520px] md:max-w-[760px] h-[360px] sm:h-[460px] md:h-[520px] mx-auto">
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-center text-xl sm:text-2xl md:text-4xl lg:text-4xl font-semibold text-zinc-900">
            One place <span className="font-light opacity-60">for all your</span>
            <br />
            ticket booking needs.
          </h2>
        </div>

        {icons.map((item, i) => (
          <div key={i} className={`absolute ${item.pos}`}>
            <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-white shadow-md flex items-center justify-center">
              <img
                src={item.img}
                alt=""
                className="w-5 h-5 sm:w-7 sm:h-7 md:w-9 md:h-9 object-contain"
              />
            </div>
          </div>
        ))}
        
      </div>
            <img
              src={image}
              alt=""
              className="inset-0 w-full h-full object-cover -z-10"
            />
    </section>
  );
}

export default AroundTextIcons;