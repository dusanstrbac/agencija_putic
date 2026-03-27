import { useEffect, useRef, useState } from "react";
import "../styles/Hero.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const slides = [
  {
    title: "Sigurnost na svakom koraku",
    subtitle: "Putno zdravstveno osiguranje za bezbrižna putovanja.",
    button: "Saznaj više",
    image: "/putno-osiguranje.jpg",
    link: "/usluga/putno-zdravstveno-osiguranje",
  },
  {
    title: "Zaštitite svoj dom",
    subtitle: "Osiguranje domaćinstva za vašu sigurnost.",
    button: "Pogledaj ponudu",
    image: "/domacinstvo-osiguranje.jpg",
    link: "/usluga/osiguranje-domacinstva",
  },
  {
    title: "Planirajte svoju budućnost",
    subtitle: "Životno osiguranje za vas i vašu porodicu.",
    button: "Pogledaj ponudu",
    image: "/zivotno-osiguranje.png",
    link: "/usluga/zivotno-osiguranje",
  },
];

function Hero() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // AUTO SLIDE (sa pause)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => clearInterval(interval);
  }, [current, isPaused]);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // SWIPE LOGIKA
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) nextSlide();     // swipe left
    if (diff < -50) prevSlide();    // swipe right
  };

  return (
    <section
      className="hero"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="hero-slider"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="hero-slide" key={index}>
            <img src={slide.image} alt="" className="hero-bg" />
            <div className="hero-overlay" />

            <div className="hero-content container">
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>

              {slide.link ? (
                <a
                  href={slide.link}
                  className="btn btn-primary"
                  rel="noopener noreferrer"
                >
                  {slide.button}
                </a>
              ) : (
                <button className="btn btn-primary">{slide.button}</button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Strelice */}
      <button className="hero-arrow left" onClick={prevSlide} aria-label="Prethodni slajd">
        <FiChevronLeft />
      </button>
      <button className="hero-arrow right" onClick={nextSlide} aria-label="Sledeći slajd">
        <FiChevronRight />
      </button>

      {/* INDICATORS */}
      <div className="hero-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${current === index ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;