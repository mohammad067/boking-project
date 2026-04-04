import Input from "../input/Input";
import facebook from "../../assets/images/footer/facebook.png";
import instagram from "../../assets/images/footer/instagram.png";
import telegram from "../../assets/images/footer/telegram.png";
import twitter from "../../assets/images/footer/twitter.png";
function Footer() {
    const socials = [
        { icon: facebook, alt: "Facebook", href: "https://facebook.com" },
        { icon: instagram, alt: "Instagram", href: "https://instagram.com" },
        { icon: telegram, alt: "Telegram", href: "https://telegram.org" },
        { icon: twitter, alt: "X", href: "https://x.com" },
    ];
    return (
        <footer className="relative overflow-hidden">

            {/* لایه تیره */}
            <div className="relative z-10 bg-lime-900 py-2 px-3">

                {/* کارت سفید */}
                <div className="max-w-14xl mx-auto bg-white rounded-2xl mb-4 px-5 sm:px-8 md:px-12 py-16">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                        {/* سمت چپ */}
                        <div>
                            <h2 className="text-2xl md:text-3xl italic  font-semibold mb-6 text-zinc-900">
                                Booking
                            </h2>

                            <div className="space-y-3 text-sm md:text-base text-zinc-500 mb-10">
                                <p className="flex gap-2">
                                    <span>📍</span>
                                    <span>Downtown District, San Francisco</span>
                                </p>

                                <p className="flex gap-2">
                                    <span>📞</span>
                                    <span>+1 (555) 019-8421</span>
                                </p>
                            </div>

                            <h3 className="text-base md:text-lg font-semibold text-zinc-900 mb-4">
                                Never Miss the Best Deals
                            </h3>
                            <div className="flex w-72 max-w-72 items-center rounded-full border border-zinc-200 overflow-hidden h-11">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-3 py-4 outline-none text-sm text-zinc-700 placeholder:text-zinc-400"
                                />
                                <button
                                    type="button"
                                    className="px-4 py-3 text-zinc-700 hover:bg-zinc-100 transition"
                                >
                                    →
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col md:items-end">
                            <div className="flex gap-3 flex-row-reverse mb-10 md:mb-16 ">
                                <div className="flex gap-3">
                                    
                                    {socials.map((item) => (
                                        <a
                                            key={item.alt}
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 rounded-full bg-lime-950 flex items-center justify-center"
                                        >
                                            <img
                                                src={item.icon}
                                                alt={item.alt}
                                                className="w-7 h-6 object-contain bg-white rounded-full p-1"
                                            />
                                        </a>
                                    ))}
                                </div>
                            </div>
              <div className="text-left">
                <h3 className="text-base md:text-lg font-semibold text-zinc-900 mb-4">
                  Legal Mentions
                </h3>

                <ul className="space-y-3 text-sm md:text-base text-zinc-500">
                  <li>Terms & Conditions</li>
                  <li>Privacy Policy</li>
                  <li>Cookie Policy</li>
                  <li>Refund & Cancellation Policy</li>
                  <li>User Agreement</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="w-8xl flex flex-col mx-16 sm:flex-row items-start sm:items-center justify-between gap-3 text-white text-xs md:text-sm">
          <p>Copyright © 2026, Mohammahmahdi Rezaeei</p>

          <div className="flex items-center gap-4">
            <span>EN</span>
            <span>EU</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;