import type { JSX } from "react";
import "../styles/UslugeOsiguranja.css";
import { FaPlane, FaHome, FaHeart, FaCar, FaBriefcase, FaUsers, FaChartLine } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";
import { Link } from "react-router-dom";

interface ServiceButton {
  // Dodati novi tipovi ovde
  type: "detalji" | "kontakt" | "kupi" | "kupiIndividualno" | "kupiPorodicno" | "kupiKasko" | "kupiPomocNaPutu";
  link: string;
}

interface Service {
  title: string;
  desc: string;
  icon: JSX.Element;
  buttons: ServiceButton[];
  span?: number;
  email?: string;
  lists?: { title: string; items: string[] }[];
  footerText?: string;
  slug: string;
}

export const services: Service[] = [
  {
    title: "Putno zdravstveno osiguranje",
    desc: "Sigurno putujte uz pokriće troškova lečenja i asistenciju u inostranstvu.",
    icon: <FaPlane />,
    buttons: [
      { type: "kupiIndividualno", link: "https://webshop.uniqa.rs/Putno-osiguranje/2/Individualno/Podaci-o-osiguranju?Agent=1158733" },
      { type: "kontakt", link: "mailto:jakovljevicml980@gmail.com?subject=Putno zdravstveno osiguranje" },
      { type: "kupiPorodicno", link: "https://webshop.uniqa.rs/Putno-osiguranje/1/Porodicno/Podaci-o-osiguranju?Agent=1158733" }
    ],
    span: 2,
    slug: "putno-zdravstveno-osiguranje"
  },
  {
    title: "Osiguranje domaćinstva",
    desc: "Zaštitite svoj dom, imovinu i ukućane od nepredviđenih situacija.",
    icon: <FaHome />,
    buttons: [
      { type: "detalji", link: "/usluga/osiguranje-domacinstva" },
      { type: "kontakt", link: "mailto:jakovljevicml980@gmail.com?subject=Osiguranje domaćinstva" },
      { type: "kupi", link: "https://webshop.uniqa.rs/Domacinstvo/Podaci-o-objektu?Agent=1158733"}
    ],
    slug: "osiguranje-domacinstva"
  },
  {
    title: "Životno osiguranje",
    desc: "Finansijska sigurnost za vas i vašu porodicu uz dugoročnu zaštitu i štednju.",
    icon: <FaHeart />,
    buttons: [
      { type: "detalji", link: "/usluga/zivotno-osiguranje" },
      { type: "kontakt", link: "mailto:jakovljevicml980@gmail.com?subject=Životno osiguranje" }
    ],
    slug: "zivotno-osiguranje"
  },
  {
    title: "Kasko osiguranje i pomoć na putu",
    desc: "Kasko osiguranje obezbeđuje zaštitu od šteta nastalih oštećenjem, uništenjem ili krađom vozila. Premija osiguranja zavisi od vrednosti, starosti i namene vozila. Uz ovaj program možete ugovoriti i osiguranje Pomoć na putu – dostupno 24 časa dnevno, 365 dana u godini, koje pruža organizovanu pomoć u slučaju kvara ili nepredviđenih situacija tokom vožnje.",
    icon: <FaCar />,
    buttons: [
      { type: "detalji", link: "/usluga/kasko-osiguranje-i-pomoc-na-putu" },
      { type: "kontakt", link: "mailto:jakovljevicml980@gmail.com?subject=Kasko osiguranje i pomoć na putu" },
      { type: "kupiKasko", link: "https://zmart-h5.core.uniqasee.online/sr/motor/d2c/srb/quick-quote?clientId=Wm1hcnQ6dW5pcWFzcmI6SFE&module=m_551f7a8fe58c4ce586cdba1ca968d103&agentCode=1158733&branchCode=03%2520-%2520Generalne%2520agencije&agreementCode=16119&timestamp=4933577455&salt=3bb7183d-0581-42e3-8169-2ca8924676bc&signature=d485f740d7481564151a7fbf12f9e25b957dbe5f129c6e4bc9042c479176583f&isClient=true" }, 
      { type: "kupiPomocNaPutu", link: "https://www.uniqa.rs/UNIQA/534/Online-kupovina/Pomoc-na-putu-Web-shop?Agent=1158733"}
    ],
    span: 2,
    slug: "kasko-osiguranje-i-pomoc-na-putu"
  },
  {
    title: "Dobrovoljno zdravstveno osiguranje",
    desc: "Brži i lakši pristup kvalitetnim zdravstvenim uslugama bez čekanja.",
    icon: <MdHealthAndSafety />,
    buttons: [
      { type: "detalji", link: "/usluga/dobrovoljno-zdravstveno-osiguranje" },
      { type: "kontakt", link: "mailto:jakovljevicml980@gmail.com?subject=Dobrovoljno zdravstveno osiguranje" }
    ],
    slug: "dobrovoljno-zdravstveno-osiguranje"
  },
  {
    title: "Osigurajte vaš posao",
    desc: "Zaštitite svoje poslovanje od rizika i obezbedite stabilnost firme.",
    icon: <FaBriefcase />,
    buttons: [
      { type: "kontakt", link: "mailto:jakovljevicml980@gmail.com?subject=Osigurajte vaš posao" },
    ],
    slug: "osigurajte-vas-posao"
  },
  {
    title: "Osigurajte vaše zaposlene",
    desc: "Obezbedite dodatnu sigurnost i benefite za vaš tim.",
    icon: <FaUsers />,
    buttons: [
      { type: "kontakt", link: "mailto:jakovljevicml980@gmail.com?subject=Osigurajte vaše zaposlene" },
    ],
    slug: "osigurajte-vase-zaposlene"
  },
  {
    title: "Moj biznis",
    desc: "Paket osiguranja predviđen za preduzetnike i preduzeća koji na vreme misle o svom poslovanju tako što određene rizike, koji mogu ugroziti neometano poslovanje, na breme prebace na UNIQA osiguranje.",
    icon: <FaChartLine />,
    buttons: [
      { type: "kontakt", link: "mailto:jakovljevicml980@gmail.com?subject=Moj biznis" }
    ],
    span: 3,
    lists: [
      {
        title: "Šta sve može da se osigura?",
        items: ["Građevinski objekti (poslovni prostor)", "Oprema", "Zalihe", "Novac"]
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
    footerText: "Uz sve nabrojano moguće je ostvariti popuste za neodređeno i višegodišnje trajanje osiguranja, za godišnje plaćanje premije, za preduzeće mere zaštite.",
    slug: "moj-biznis"
  }
];

function UslugeOsiguranja() {
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

              {service.footerText && <p className="service-footer">{service.footerText}</p>}

              <div className="card-buttons">
                {service.buttons.map((btn, i) => {
                  if (btn.type === "detalji")
                    return (
                      <Link key={i} to={btn.link} className="btn btn-secondary">
                        Detaljnije
                      </Link>
                    );
                  if (btn.type === "kontakt")
                    return (
                      <a key={i} href={btn.link} className="btn btn-outline">
                        Kontaktiraj savetnika
                      </a>
                    );
                  if (btn.type === "kupi")
                    return (
                      <a key={i} href={btn.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        Kupi online
                      </a>
                    );
                  if (btn.type === "kupiIndividualno")
                    return (
                      <a key={i} href={btn.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                        Kupi individualno
                      </a>
                    );
                  if (btn.type === "kupiPorodicno")
                    return (
                      <a key={i} href={btn.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                        Kupi porodicno
                      </a>
                    ); 
                  // NOVI TIPOVI DUGMADI:
                  if (btn.type === "kupiKasko")
                    return (
                      <a key={i} href={btn.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                        Kupi kasko
                      </a>
                    );
                  if (btn.type === "kupiPomocNaPutu")
                    return (
                      <a key={i} href={btn.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                        Kupi pomoc na putu
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

export default UslugeOsiguranja;