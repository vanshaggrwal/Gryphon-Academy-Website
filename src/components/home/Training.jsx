import trainEvaImage from "../../assets/traineva.avif";

export default function Training() {
  return (
    <section className="h-screen w-full bg-[#f4f5f9]">
      <div className="h-full w-full px-0">
        <div className="h-full w-full overflow-hidden border-y border-[#e5e7ef] bg-white">
          <img
            src={trainEvaImage}
            alt="Training and evaluation"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
