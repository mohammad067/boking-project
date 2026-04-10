import { useMemo, useState } from "react";

import bus from "../../assets/images/slide/bus.png";
import train from "../../assets/images/slide/train.png";
import plane from "../../assets/images/slide/airplan.png";
import ship from "../../assets/images/slide/ship.png";
import hotel from "../../assets/images/slide/hotel.png";

function SlideTiket() {
  const items = useMemo(
    () => [
      { id: 1, name: "Flight", image: plane },
      { id: 2, name: "Train", image: train },
      { id: 3, name: "Bus", image: bus },
      { id: 4, name: "Ship", image: ship },
      { id: 5, name: "Hotel", image: hotel },
    ],
    []
  );

  const [active, setActive] = useState(0);

  const wrapOffset = (offset, n) => {
    const half = Math.floor(n / 2);
    let x = offset % n;
    if (x < -half) x += n;
    if (x > half) x -= n; 
    return x;
  };

  const n = items.length;
  const step = 120;

  return (
    <div className="relative z-20 mt-12 py-24">
      <div className="relative mx-auto h-24 md:h-28 w-full max-w-[720px]">
        {items.map((item, idx) => {
          const raw = idx - active;
          const off = wrapOffset(raw, n);
          const isCenter = off === 0;

          const x = off * step;
          const scale = isCenter ? 1.1 : 0.9 - Math.min(Math.abs(off) * 0.08, 0.2);
          const z = isCenter ? 50 : 10 - Math.abs(onabort);

          return (
            <button
              key={item.id}
              onClick={() => setActive(idx)}
              className={`absolute left-1/2 top-1/2 -translate-y-1/2
  flex items-center justify-center
  w-20 h-20 md:w-24 md:h-24 rounded-full
  cursor-pointer
  transition-none 
  ${
    isCenter
      ? "bg-white "
      : "bg-white/20 backdrop-blur-md active:cursor-wait"
  }`}
              
              style={{
                transform: `translateX(calc(-50% + ${x}px)) translateY(-100%) scale(${scale})`,
                zIndex: z,
              }}
            >
              
              {isCenter && (
                <span className="absolute -inset-1 rounded-full border-2 border-dashed border-gray-700 animate-spin-slow" />
              )}

              <img
                src={item.image}
                alt={item.name}
                className={`relative z-10 transition-all 
                  ${isCenter ? "w-16 h-auto" : "w-8 h-8"}
                  `}
                
                
              />
            </button>
          );
        })}
        
      </div>
    </div>
  );
}

export default SlideTiket;