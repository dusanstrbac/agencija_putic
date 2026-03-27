import { useParams } from "react-router-dom";
import { services } from "./UslugeOsiguranja";
import { serviceDetails } from "../Data/serviceDetails";
import "../styles/Usluga.css";

function Usluga() {
  const { slug } = useParams<{ slug: string }>();

  const service = services.find((s) => s.slug === slug);
  const detail = serviceDetails.find((d) => d.slug === slug);

  if (!service) {
    return (
      <section className="service-detail section">
        <div className="container">
          <h2>Usluga nije pronađena</h2>
        </div>
      </section>
    );
  }

  // LOGIKA: Uvek uzmi dugmad iz osnovnog 'services' niza jer tamo imamo prave linkove
  // Filtriramo 'detalji' jer smo već na toj stranici
  const buttonsToRender = (service.buttons || []).filter(btn => btn.type !== "detalji");

  return (
    <section className="service-detail section">
      <div className="container">
        <div className="top-container">
          <h2 className="service-title">{service.title}</h2>
          <div className="icon">{service.icon}</div>
        </div>

        <div className="content-wrapper">
          {detail ? (
            <div className="service-content">{detail.content}</div>
          ) : (
            <p>{service.desc}</p>
          )}

          {service.footerText && <p className="service-footer">{service.footerText}</p>}
        </div>

        <div className="service-buttons">
          {buttonsToRender.map((btn, index) => {
            const isKupi = btn.type === "kupi";
            
            // Provera da li je link definisan
            if (!btn.link || btn.link === "#") {
                if (isKupi) return null; // Ne prikazuj "Kupi" ako nema linka
            }

            return (
              <a
                key={index}
                href={btn.link}
                className={`btn ${isKupi ? "btn-primary" : "btn-outline"}`}
                target={isKupi ? "_blank" : undefined}
                rel={isKupi ? "noopener noreferrer" : undefined}
              >
                {isKupi ? "Kupi online" : "Kontaktiraj savetnika"}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Usluga;