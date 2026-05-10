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
    extraButtons: [
      { 
        text: "Kupi individualno", 
        link: "https://webshop.uniqa.rs/Putno-osiguranje/2/Individualno/Podaci-o-osiguranju?Agent=1158733",
        external: true
      },
      { 
        text: "Kupi porodično", 
        link: "https://webshop.uniqa.rs/Putno-osiguranje/1/Porodicno/Podaci-o-osiguranju?Agent=1158733",
        external: true 
      }
    ]
  },
  {
    title: "Bezbrižni na svakom kilometru",
    subtitle: "Kompletna zaštita za vaše vozilo uz kasko osiguranje.",
    button: "Pogledaj ponudu",
    image: "/kasko-osiguranje.png",
    link: "/usluga/kasko-osiguranje-i-pomoc-na-putu",
    extraButtons: [
      {
        text: "Kupi online",
        link: "https://zmart-h5.core.uniqasee.online/sr/motor/d2c/srb/quick-quote?clientId=Wm1hcnQ6dW5pcWFzcmI6SFE&module=m_551f7a8fe58c4ce586cdba1ca968d103&agentCode=1158733&branchCode=03%2520-%2520Generalne%2520agencije&agreementCode=16119&timestamp=4933577455&salt=3bb7183d-0581-42e3-8169-2ca8924676bc&signature=d485f740d7481564151a7fbf12f9e25b957dbe5f129c6e4bc9042c479176583f&isClient=true",
        external: true
      }
    ]
  },
  {
    title: "Zaštitite svoj dom",
    subtitle: "Osiguranje domaćinstva za vašu sigurnost.",
    button: "Pogledaj ponudu",
    image: "/domacinstvo-osiguranje.jpg",
    link: "/usluga/osiguranje-domacinstva",
    extraButtons: [
      {
        text: "Kupi online",
        link: "https://webshop.uniqa.rs/Domacinstvo/Podaci-o-objektu?Agent=1158733",
        external: true
      }
    ]
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

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();
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

              <div className="hero-btns-group">
                {/* Glavno dugme */}
                {slide.link && (
                  <a href={slide.link} className="btn btn-primary">
                    {slide.button}
                  </a>
                )}

                {/* Dodatna dugmad */}
                {slide.extraButtons && slide.extraButtons.map((extra, idx) => (
                  <a
                    key={idx}
                    href={extra.link}
                    className="btn btn-secondary"
                    target="_blank" // Ovo otvara u novom tabu
                    rel="noopener noreferrer" // Sigurnosni standard
                  >
                    {extra.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="hero-arrow left" onClick={prevSlide} aria-label="Prethodni slajd">
        <FiChevronLeft />
      </button>
      <button className="hero-arrow right" onClick={nextSlide} aria-label="Sledeći slajd">
        <FiChevronRight />
      </button>

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