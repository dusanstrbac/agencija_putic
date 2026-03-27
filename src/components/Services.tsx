import "../styles/Services.css";
import {
  FaPlane,
  FaHome,
  FaHeart,
  FaCar,
  FaBriefcase,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";

const services = [
  {
    title: "Putno zdravstveno osiguranje",
    desc: "Sigurno putujte uz pokriće troškova lečenja i asistenciju u inostranstvu.",
    icon: <FaPlane />,
    buttons: [
      { type: "detalji", link: "/usluga/putno-zdravstveno-osiguranje" },
      { type: "kontakt", link: "mailto:mladen.jakovljevic@uniqa.rs?subject=Putno zdravstveno osiguranje" },
      { type: "kupi", link: "#" }
    ],
    span: 2,
  },
  {
    title: "Osiguranje domaćinstva",
    desc: "Zaštitite svoj dom, imovinu i ukućane od nepredviđenih situacija.",
    icon: <FaHome />,
    buttons: [
      { type: "kontakt", link: "mailto:mladen.jakovljevic@uniqa.rs?subject=Osiguranje domaćinstva" },
      { type: "kupi", link: "https://webshop.uniqa.rs/Domacinstvo/Podaci-o-objektu" }
    ],
  },
  {
    title: "Životno osiguranje",
    desc: "Finansijska sigurnost za vas i vašu porodicu uz dugoročnu zaštitu i štednju.",
    icon: <FaHeart />,
    buttons: [
      { type: "kontakt", link: "mailto:mladen.jakovljevic@uniqa.rs?subject=Životno osiguranje" }
    ],
  },
  {
    title: "Kasko osiguranje i pomoć na putu",
    desc: "Kasko osiguranje obezbeđuje zaštitu od šteta nastalih oštećenjem, uništenjem ili krađom vozila. Premija osiguranja zavisi od vrednosti, starosti i namene vozila. Uz ovaj program možete ugovoriti i osiguranje Pomoć na putu – dostupno 24 časa dnevno, 365 dana u godini, koje pruža organizovanu pomoć u slučaju kvara ili nepredviđenih situacija tokom vožnje.",
    icon: <FaCar />,
    buttons: [
      { type: "kontakt", link: "mailto:mladen.jakovljevic@uniqa.rs?subject=Kasko osiguranje i pomoć na putu" },
      { type: "kupi", link: "https://www.uniqa.rs/fizicka-lica/automobili-i-putovanja/pomoc-na-putu?Agent=1158733" }
    ],
    span: 2,
  },
  {
    title: "Dobrovoljno zdravstveno osiguranje",
    desc: "Brži i lakši pristup kvalitetnim zdravstvenim uslugama bez čekanja.",
    icon: <MdHealthAndSafety />,
    buttons: [
      { type: "kontakt", link: "mailto:mladen.jakovljevic@uniqa.rs?subject=Dobrovoljno zdravstveno osiguranje" }
    ],
  },
  {
    title: "Osigurajte vaš posao",
    desc: "Zaštitite svoje poslovanje od rizika i obezbedite stabilnost firme.",
    icon: <FaBriefcase />,
    buttons: [
      { type: "kontakt", link: "mailto:mladen.jakovljevic@uniqa.rs?subject=Osigurajte vaš posao" }
    ],
  },
  {
    title: "Osigurajte vaše zaposlene",
    desc: "Obezbedite dodatnu sigurnost i benefite za vaš tim.",
    icon: <FaUsers />,
    buttons: [
      { type: "kontakt", link: "mailto:mladen.jakovljevic@uniqa.rs?subject=Osigurajte vaše zaposlene" }
    ],
  },
  {
    title: "Moj biznis",
    desc: "Paket osiguranja predviđen za preduzetnike i preduzeća koji na vreme misle o svom poslovanju tako što određene rizike, koji mogu ugroziti neometano poslovanje, na breme prebace na UNIQA osiguranje.",
    icon: <FaChartLine />,
    buttons: [
      { type: "kontakt", link: "mailto:mladen.jakovljevic@uniqa.rs?subject=Moj biznis" }
    ],
    span: 3,
    lists: [
      {
        title: "Šta sve može da se osigura?",
        items: [
          "Građevinski objekti (poslovni prostor)",
          "Oprema",
          "Zalihe",
          "Novac"
        ]
      },
      {
        title: "Od kojih rizika može da se osigura:",
        items: [
          "Osnovni rizici (požar i druge opasnosti)",
          "Rizik zemljotresa",
          "Zaštita od provalne krađe i razbojništva",
          "Osiguranje stakla od loma",
          "Zaštita mašina od loma i drugih opasnosti"
        ]
      }
    ],
    footerText: "Uz sve nabrojano moguće je ostvariti popuste za neodređeno i višegodišnje trajanje osiguranja, za godišnje plaćanje premije, za preduzeće mere zaštite."
  },
];

function Services() {
  return (
    <section className="services section">
      <div className="container">
        <h2 className="section-title">Naše usluge osiguranja</h2>
        <p className="section-subtitle">
          Nudimo širok spektar osiguranja kako biste vi i vaša porodica bili sigurni u svakom trenutku.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card ${service.span ? `span-${service.span}` : ""}`}
            >
              <div className="card-header">
                <div className="icon">{service.icon}</div>
                <h3>{service.title}</h3>
              </div>

              <p>{service.desc}</p>

              {/* Renderovanje lista za Moj biznis */}
              {service.lists && (
                <div className="service-lists">
                  {service.lists.map((list, i) => (
                    <div className="service-list" key={i}>
                      <strong>{list.title}</strong>
                      <ul>
                        {list.items.map((item, j) => (
                          <li key={j}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {/* Footer text */}
              {service.footerText && <p className="service-footer">{service.footerText}</p>}

              <div className="card-buttons">
                {service.buttons.map((btn, i) => {
                  if (btn.type === "detalji")
                    return (
                      <a key={i} href={btn.link} className="btn btn-secondary">
                        Detaljnije
                      </a>
                    );
                  if (btn.type === "kontakt")
                    return (
                      <a key={i} href={btn.link} className="btn btn-outline">
                        Kontaktiraj savetnika
                      </a>
                    );
                  if (btn.type === "kupi")
                    return (
                      <a key={i} href={btn.link} className="btn btn-primary" target="_blank">
                        Kupi online
                      </a>
                    );
                  return null;
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;