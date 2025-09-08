const SLIDES = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"];

export default function Home() {
  return (
    <div>
      <div className="slideWrap">
        <ul className="imgSlide original">
          {SLIDES.map((slide, index) => (
            <li key={`original-${index}`}>{slide}</li>
          ))}
        </ul>
        <ul className="imgSlide clone">
          {SLIDES.map((slide, index) => (
            <li key={`clone-${index}`}>{slide}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
