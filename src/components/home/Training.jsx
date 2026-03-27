import trainEvaImage from "../../assets/traineva.avif";

export default function Training() {
  return (
    <section className="w-full bg-[#f4f5f9]">
      <div className="mx-auto w-full max-w-[1920px]">
        <div className="w-full overflow-hidden bg-white">
          <img
            src={trainEvaImage}
            alt="Training and evaluation"
            className="w-full h-auto object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
