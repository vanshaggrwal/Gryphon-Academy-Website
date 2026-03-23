export default function Navbar({ isVisible, isFullWidth, logoSrc }) {
  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`mx-auto flex items-center justify-between px-3 py-2.5 sm:px-3.5 sm:py-3 transition-[width,border-radius,background-color,box-shadow,padding] duration-500 ease-in-out ${
          isFullWidth
            ? "rounded-none bg-[#01224F] shadow"
            : "rounded-xl bg-[#01224F]/95 shadow-lg"
        }`}
        style={{
          width: isFullWidth ? "100%" : "min(90vw, clamp(920px, 70vw, 1140px))",
        }}
      >
        <a href="#home" className="shrink-0">
          <img
            src={logoSrc}
            alt="Gryphon Academy"
            className="h-10 w-auto md:h-12 xl:h-14"
          />
        </a>

        <div className="hidden md:flex gap-4 px-3 font-medium text-white lg:gap-5 lg:px-4 xl:gap-6 xl:px-6">
          <a href="#home" className="hover:text-yellow-400 transition">
            Home
          </a>
          <a href="#about" className="hover:text-yellow-400 transition">
            About
          </a>
          <a href="#services" className="hover:text-yellow-400 transition">
            Services
          </a>
          <a href="#why-us" className="hover:text-yellow-400 transition">
            Why Us
          </a>
          <a href="#events" className="hover:text-yellow-400 transition">
            Events
          </a>
          <a href="#blogs" className="hover:text-yellow-400 transition">
            Blog
          </a>
          <a href="#contact" className="hover:text-yellow-400 transition">
            Contact
          </a>
        </div>

        <button className="rounded-lg bg-white px-3.5 py-1.5 font-semibold text-[#01224F] transition hover:bg-gray-100 lg:px-4 lg:py-2">
          Apply Now
        </button>
      </div>
    </nav>
  );
}
