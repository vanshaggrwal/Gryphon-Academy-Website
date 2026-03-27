export default function Brochure() {
  return (
    <section className="bg-[#01295f] py-0">
      <div className="w-full px-0">
        <div
          className="relative flex min-h-[180px] w-full items-center overflow-hidden rounded-none px-5 py-5 sm:px-7 md:min-h-[210px] md:px-10"
          style={{
            backgroundColor: "#022a63",
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(66,117,196,0.22) 0 1px, transparent 1px 68px), repeating-linear-gradient(60deg, rgba(66,117,196,0.24) 0 1px, transparent 1px 92px), repeating-linear-gradient(-60deg, rgba(66,117,196,0.24) 0 1px, transparent 1px 92px)"
          }}
        >

          <div className="relative z-10 flex w-full flex-col items-center gap-5 text-center py-6 md:py-10">
            <h3 className="text-[1.45rem] font-extrabold leading-tight text-white md:text-[2.2rem] lg:text-[2.5rem]">
              Everything You Need to Know — In One Document.
            </h3>
            <p className="max-w-2xl text-sm leading-relaxed text-[#b0c7e6] sm:text-base md:text-lg">
              Download our programme brochure for a complete overview of our
              training modules, placement outcomes, institutional partnerships,
              and service offerings. Built for decision-makers who want the full
              picture before the conversation.
            </p>

            <div className="mt-2 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <a
                href="#"
                className="inline-flex items-center gap-2.5 rounded-xl bg-[#2f67e6] px-6 py-3 text-base font-semibold text-white shadow-[0_12px_24px_rgba(0,0,0,0.28)] transition hover:bg-[#2458cf]"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 4v9" />
                  <path d="m8.5 10.5 3.5 3.5 3.5-3.5" />
                  <rect x="4" y="17" width="16" height="3.5" rx="1.2" />
                </svg>
                <span>Download Brochure</span>
              </a>

              <span className="hidden text-[#5a86bf] sm:inline">·</span>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-base font-medium text-[#8ab4f0] transition hover:text-white"
              >
                Speak to Our Team Instead
                <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.19l-2.47-2.47a.75.75 0 0 1 1.06-1.06l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
