import "../styles/Contact.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact section">
      <div className="container contact-container">
        <h2 className="section-title">Kontaktirajte nas</h2>
        <p className="section-subtitle">
          Agencija Putić – Ljubovija<br />
          <span className="mobile-office">– Mobilna kancelarija –</span>
        </p>

        <div className="contact-grid">
          {/* LEVA STRANA */}
          <div className="contact-left">
            <div className="contact-info">
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>Agencija Putić, Ljubovija</span>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <a href="tel:0648034303">0648034303</a>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <a href="mailto:jakovljevicml980@gmail.com">
                  jakovljevicml980@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-cta">
              <a
                href="mailto:jakovljevicml980@gmail.com"
                className="btn btn-primary"
              >
                Pošaljite nam email
              </a>
            </div>
          </div>

          {/* DESNA STRANA */}
          <div className="contact-right">
            <p>
              Agencija Putić je osnovana 2013. godine. Bavimo se poslovima
              zastupanja u svim vrstama osiguranja na osnovu dozvole Narodne
              Banke Srbije. Ekskluzivni smo zastupnik UNIQA osiguranja, radimo
              na principu mobilne kancelarije i trudimo se da ispratimo i
              zadovoljimo potrebe klijenata.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;