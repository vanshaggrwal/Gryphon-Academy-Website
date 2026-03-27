import { useMemo, useState } from "react";

const pathways = [
  {
    id: "colleges",
    label: "For Colleges",
    title: "Your Institution's Complete Growth Partner.",
    intro:
      "From student training and faculty development to digital branding, admissions, and corporate placement - we handle every dimension of institutional growth, so you focus on academics.",
    points: [
      "Professional training embedded in your curriculum (IRP & CLDP)",
      "Faculty Development Programmes (FDPs)",
      "Digital marketing, branding & website development",
      "End-to-end admissions support",
    ],
  },
  {
    id: "corporate",
    label: "For Corporate",
    title: "Trained Talent. Zero Cost. Pan-India.",
    intro:
      "Skip the friction of unready candidates. We deliver pre-trained, role-aligned graduates from 55+ institutions and manage your entire campus drive - at no charge.",
    points: [
      "Zero-cost end-to-end campus hiring",
      "Pre-trained talent across all major streams",
      "JD-aligned candidate preparation",
      "Pan-India drives across 25+ cities",
      "Corporate training & L&D solutions",
    ],
  },
  {
    id: "students",
    label: "For Students",
    title: "We Train You. We Prepare You. We Place You.",
    intro:
      "Two years of structured, practitioner-led training inside your college - building the skills, tools, and confidence that India's top employers hire for. Free of charge, always.",
    points: [
      "Communication, aptitude & domain training",
      "Power BI, SQL, Excel, Looker Studio & Gen AI",
      "CV prep, mock GDs & PI practice",
      "Personal branding & LinkedIn optimisation",
      "Access to 450+ hiring partners",
    ],
  },
];

function ConnectorArrow({ activeIndex, totalItems }) {
  const pathData = useMemo(() => {
    const minY = 60;
    const maxY = 360;
    const step = totalItems > 1 ? (maxY - minY) / (totalItems - 1) : 0;
    const startY = minY + activeIndex * step;
    const isLast = activeIndex === totalItems - 1;
    const startX = 74;
    const elbowX = 166;
    const endX = 224;
    const radius = 18;
    const verticalTravel = 70;
    const arrowTravel = 92;

    if (isLast) {
      return {
        lineY: startY,
        d: `M ${startX} ${startY} H ${elbowX - radius} Q ${elbowX} ${startY} ${elbowX} ${startY - radius} V ${startY - verticalTravel} Q ${elbowX} ${startY - arrowTravel} ${elbowX + radius} ${startY - arrowTravel} H ${endX}`,
        arrowY: startY - arrowTravel,
      };
    }

    return {
      lineY: startY,
      d: `M ${startX} ${startY} H ${elbowX - radius} Q ${elbowX} ${startY} ${elbowX} ${startY + radius} V ${startY + verticalTravel} Q ${elbowX} ${startY + arrowTravel} ${elbowX + radius} ${startY + arrowTravel} H ${endX}`,
      arrowY: startY + arrowTravel,
    };
  }, [activeIndex, totalItems]);

  return (
    <svg
      viewBox="0 0 240 420"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      <line
        x1="0"
        y1={pathData.lineY}
        x2="28"
        y2={pathData.lineY}
        stroke="#3a10b9ff"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="40"
        y1={pathData.lineY}
        x2="68"
        y2={pathData.lineY}
        stroke="#3a10b9ff"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d={pathData.d}
        fill="none"
        stroke="#3a10b9ff"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d={`M 232 ${pathData.arrowY} L 220 ${pathData.arrowY - 10} M 232 ${pathData.arrowY} L 220 ${pathData.arrowY + 10}`}
        fill="none"
        stroke="#3a10b9ff"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function AudiencePathways() {
  const [activeId, setActiveId] = useState(pathways[0].id);
  const activeIndex = pathways.findIndex((item) => item.id === activeId);
  const activePath = pathways[activeIndex] || pathways[0];

  return (
    <section className="bg-[#f4f5f9] py-20 md:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-6">
        <h2 className="mx-auto max-w-3xl text-center text-3xl font-bold tracking-tight text-[#101322] md:text-5xl">
          One solution built for colleges, corporates, and students.
        </h2>

        <div className="mt-14 grid items-stretch gap-8 lg:grid-cols-[minmax(0,1fr)_clamp(170px,20vw,290px)_minmax(0,1.2fr)]">
          <div className="flex h-[clamp(320px,36vw,500px)] flex-col">
            {pathways.map((item) => {
              const isActive = item.id === activeId;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  className={`flex h-full min-h-[98px] w-full items-center gap-0 rounded-xl px-2 py-2 text-left text-3xl font-semibold transition md:text-5xl ${
                    isActive
                      ? "text-[#211953]"
                      : "text-[#b4b5c5] hover:text-[#9d9fb2]"
                  }`}
                >
                  <span
                    className="mr-[20px] inline-flex w-auto items-center gap-[10px]"
                    aria-hidden
                  >
                    <span
                      className={`h-[3px] w-10 rounded-full ${
                        isActive ? "bg-[#3a10b9ff]" : "bg-transparent"
                      }`}
                    />
                    <span
                      className={`h-[3px] w-10 rounded-full ${
                        isActive ? "bg-[#3a10b9ff]" : "bg-transparent"
                      }`}
                    />
                  </span>
                  <span className="whitespace-nowrap">
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="hidden h-[clamp(320px,36vw,500px)] lg:block lg:pl-4 xl:pl-6">
            <ConnectorArrow
              activeIndex={Math.max(activeIndex, 0)}
              totalItems={pathways.length}
            />
          </div>

          <div>
            <div className="overflow-hidden rounded-3xl border border-[#d7d9e8] bg-gradient-to-br from-[#f4f6ff]/80 via-[#eef1ff]/75 to-[#e8ecff]/75 shadow-[0_12px_40px_rgba(70,80,140,0.14)] backdrop-blur-xl">
              <article className="p-5 md:p-7">
                <p className="text-xs font-bold uppercase tracking-wide text-[#3a10b9ff] md:text-sm">
                  {activePath.label}
                </p>
                <h3 className="mt-2 text-3xl font-bold leading-tight text-[#1e2340] md:text-4xl">
                  {activePath.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-[#5a6282] md:text-lg">
                  {activePath.intro}
                </p>
                <ul className="mt-5 space-y-2 text-[#2b3154]">
                  {activePath.points.map((point) => (
                    <li key={`${activePath.id}-${point}`} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#3a10b9ff]" />
                      <span className="text-base font-semibold leading-snug md:text-[1.04rem]">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
