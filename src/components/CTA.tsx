import "../styles/CTA.css";
import { FaEnvelope } from "react-icons/fa";

function CTA() {
  return (
    <section className="cta-section">
      <div className="container cta-container">
        <h2 className="cta-title">Imate pitanja ili trebate savet?</h2>
        <p className="cta-subtitle">
          Naši stručnjaci za osiguranje su tu da vam pomognu. Kontaktirajte nas i saznajte više o našim uslugama.
        </p>
        <a href="/contakt" className="btn btn-cta">
          <FaEnvelope style={{ marginRight: "8px" }} />
          Kontaktirajte nas
        </a>
      </div>
    </section>
  );
}

export default CTA;