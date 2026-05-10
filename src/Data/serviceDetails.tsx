import type { ReactNode } from "react";

export interface ServiceDetail {
  slug: string;
  content: ReactNode;
  buttons?: ("kontakt" | "kupi" | "kupiIndividualno" | "kupiPorodicno" | "kupiKasko" | "kupiPomocNaPutu")[];
}

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "putno-zdravstveno-osiguranje",
    content: (
      <>
        <h3>1. Šta su prednosti putnog osiguranja?</h3>
        <p>
          Nikada se ne zna šta može da se desi tokom boravka u inostranstvu.
          Putnim zdravstvenim osiguranjem ugovarate osiguravajuće pokriće koje vas
          štiti od rizika tokom turističkog boravka, privremenog rada,
          rekreativnog ili amaterskog bavljenja sportom u inostranstvu.
          Putno zdravstveno osiguranje pokriva troškove lečenja tokom boravka
          u inostranstvu. Može se ugovarati kao individualno, porodično ili grupno osiguranje.
        </p>

        <h3>2. Pogodnosti za one koji često putuju</h3>
        <p>
          Ako je za vas odlazak na putovanje u inostranstvo razlog zbog čega uvek
          imate spreman kofer za polazak, bilo bi dobro razmisliti o
          jednogodišnjem putnom osiguranju. Za jednokratno uplaćen iznos imate
          ugovoreno zdravstveno osiguranje za neograničen broj puteva u inostranstvo.
        </p>

        <h3>3. Šta sve pokriva putno osiguranje u inostranstvu?</h3>
        <ul>
          <li>Neophodni lekarski tretman za vreme boravka u inostranstvu</li>
          <li>Lekovi, rendgenski i ultrazvučni pregled</li>
          <li>Medicinski prevoz i hospitalizacija</li>
          <li>Povratak dece u zemlju prebivališta</li>
          <li>Šteta nastala usled gubitka ili krađe prtljaga</li>
          <li>Šteta nastala usled kašnjenja avionskog leta</li>
          <li>Organizaciju pomoći i naknadu troškova u slučaju pravne ili prevodilačke usluge</li>
          <li>Pravna zaštita</li>
          <li>Pomoć u slučaju gubitka ili krađe putnih dokumenata</li>
          <li>Ugovaranje dodatnog rizika za COVID-19</li>
        </ul>
      </>
    ),
    buttons: ["kontakt", "kupiIndividualno", "kupiPorodicno"],
  },
  {
    slug: "osiguranje-domacinstva",
    content: (
      <>
        <h3>1. Šta su prednosti osiguranja domaćinstva?</h3>
        <p>Osiguranjem domaćinstva, omogućeno je osiguravajuće pokriće stambenih objekata koji su nastanjeni ili koji nisu stalno nastanjeni, 
          pomoćnih objekata, stvari u domaćinstvu i članova domaćinstva.
        </p>
        
        
        <h3>2. Rizici koje pokriva osiguranje domaćinstva</h3>
        <ul>
          <li>Požar i požarni rizici ( eksplozija, oluja, grad, udar groma, poplave i bujice, udar sopstvenog ili nepoznatog motornog vozila, pad letelice, manifestacije i demonstracije )</li>
          <li>Izliv vode iz instalacije</li>
          <li>Provalna krađa i razbojništvo</li>
          <li>Lom stakala</li>
          <li>Odgovornost prema trećim licima</li>
          <li>Zemljotres i poplava</li>
          <li>Osiguranje od nezgode</li>
        </ul>

        <h3>3. Novi rizici koje pokriva osiguranje</h3>
        <ul>
          <li>Pokriće za posledice prokišnjavanja (atmosferske padavine) – NOVO</li>
          <li>Pokriće za štete na osiguranoj imovini usled požara ostvarenog izvan osiguranog objekta – NOVO</li>
          <li>Osiguranje solarnih panela – NOVO</li>
          <li>Indeksacija suma osiguranja – našim klijentima smo omogućili da se svake godine osiguranja, suma osiguranja uvećava u skladu sa stopom inflacije – NOVO</li>
          <li>Popust za lojalnost – klijenti koji imaju ugovorenu i drugu vrstu osiguranja, dobijaju odgovarajući popust – NOVO</li>
        </ul>
      </>
    ),
    buttons: ["kontakt", "kupi"],
  },
  {
    slug: "zivotno-osiguranje",
    content: (
      <>
        <h3>1. Šta su prednosti životnog osiguranja?</h3>
        <p>
          Osnovna funkcija životnog osiguranja je upravo zaštita klijenta i njegove porodice od rizika smrti, 
          ali i akumulacija finansijskih sredstava koja se ulažu na ovu polisu. Životno osiguranje je dugoročna štednja ali istovremeno i 
          osiguranje za nepredviđene slučajeve koji se mogu desiti u životu. Ulaganje u životno osiguranje je jedan od sigurnijih oblika štednje, 
          dok istovremeno može da pokrije rizik smrti, težih bolesti i nezgodu.
        </p>


        <h3>2. Šta predstavlja životno osiguranje</h3>
        <p>Životno osiguranje predstavlja sjajan način zaštite porodice u svakom pogledu. 
          Funkcija životnog osiguranja je dvojaka! Za iznos uloženih sredstava imate dve pogodnosti: osiguranje života od nepredviđenih događaja i štednju za budućnost.
        </p>

        <h3>3. U zavisnosti od vaših želja, potreba, mogućnosti i zdravstvenog stanja izdvajamo sledeće programe</h3>
        <ul>
          <li>Spektar – Osiguranje života i Štednja, uz mogućnost dodavanja čitavog spektra dopunskih osiguranja ( invalidnost, nezgoda, teže bolesti, bolnički dan, prelom kostiju, hirurške intervencije …)</li>
          <li>Joker – Osiguranje za slučaj doživljenja – Štednja i mogućnost osiguranja dopunskih rizika …</li>
          <li>Favorit – Štednja za decu, za njihovo osamostaljenje, školovanje, venčanje i stvaranje porodice, uz mogućnost ugovaranja dopunskih rizika</li>
          <li>Riziko – Osiguranje života bez štedne komponente. Omogućava izuzetnu ličnu i porodičnu sigurnost kroz visoke osigurane sume I pristupačnu premiju.</li>
          <li>Riziko kredit – Osiguranje života kao lična i porodična zaštita za korisnike kredita. Niska premija uz visoke osigurane sume uz pogodnost da se premija ne plaća sve vreme trajanja kredita.</li>
        </ul>
      </>
    ),
    buttons: ["kontakt"],
  },
  {
    slug: "kasko-osiguranje-i-pomoc-na-putu",
    content: (
      <>
        <h2>Kasko osiguranje</h2>

        <h3>1. Šta obezbeđuje kasko osiguranje</h3>
        <p>
          Kasko osiguranje obezbeđuje zaštitu od nastalih šteta usled oštećenja, uništenja ili krađe vozila. 
          Premija osiguranja zavisi od procene vrednosti vozila, starosti i namene vozila. Uz ovaj program možete da ugovorite i osiguranje pomoći na putu.
        </p>

        <h3>2. Osiguranje pravne zaštite uz kasko polisu</h3>
        <ul>
          <li>Jedinstveno na tržištu – pokriće pravnih troškova u krivičnom ili prekršajnom postupku koji je protiv osiguranika pokrenut zbog saobraćajne nezgode izazvane upotrebom motornog vozila.</li>
          <li>Pokriće troškova advokata u slučaju zastupanja.</li>
          <li>Pokriće troškova krivičnog ili prekršajnog postupka, kao što su sudske takse, troškovi veštaka, prevodioca i svedoka.</li>
        </ul>

        <h3>3. Kasko 30+</h3>
        <ul>
          <li>Kasko osiguranje istorijskih vozila (putničkih vozila starijih od 30 godina) koji poseduju odgovoarajuću potvrdu Srpskog saveza za istorijska vozila, kao i procenu vrednosti ovlašćenog veštaka da njihova vrednost iznosi 5.000 evra ili više</li>
          <li>Uz sve kasko polise, uključeno je i osiguranje pomoći na putu</li>
          <li>Fleksibilna dinamika plaćanja – klijent sam bira način plaćanja, u celosti ili na rate</li>
          <li>Mogućnost ugovaranja osiguranja na kraći vremenski period – po danima ili mesecima</li>
          <li>Mogućnost prijave štete putem telefona</li>
          <li>Mogućnost ekspresne prijave štete</li>
        </ul>

        <h2>Pomoć na putu</h2>

        <h3>1. Šta je pomoć na putu</h3>
        <p>
          Ukoliko ste do sada brinuli da se na vašem automobilu ne desi kvar ili neki drugi nepredviđeni događaj tokom vožnje, 
          sada je tome došao kraj. Ugovorite osiguranje Pomoć na putu i UNIQA vam pruža organizaciju pomoći 24 časa dnevno, 
          365 dana u godini. Pomoć na putu možete kupiti u svim UNIQA poslovnicama, ali i putem vebšopa, iz udobnosti svog doma ili kancelarije.
        </p>

        <h3>2. Šta obezbeđuje pomoć na putu</h3>
        <ul>
          <li>Organizaciju pomoći 24h,kao i pokrivanje troškova pružene pomoći</li>
          <li>Popravku na licu mesta u slučaju manjeg kvara</li>
          <li>Dostava goriva u slučaju nestanka istog</li>
          <li>Pokrivanje velikog segmenta troškova ( šlepanje vozila,troškovi u slučaju gubitka ili oštećenja ključeva,prenoćište,prevoz do odredišta,povratak oštećenog vozila,rezervni delovi ).</li>
        </ul>

        <h3>3. Kupite pomoć na putu online</h3>
        <ul>
          <li>Osiguranje na klik od vas</li>
          <li>Brzo i jednostavno, bez odlaska u poslovnicu</li>
          <li>Polisa se dostavlja na imejl korisnika osiguranja</li>
          <li>Bez dodatnih papira – polisu možete čuvati i u telefonu</li>
        </ul>

      </>
    ),
    buttons: ["kupiKasko", "kupiPomocNaPutu", "kontakt"],
  },
  {
    slug: "dobrovoljno-zdravstveno-osiguranje",
    content: (
      <>
        <h3>Šta je zdravstveno osiguranje?</h3>
        <p>Dobrovoljno zdravstveno osiguranje obezbeđuje pokriće troškova vanbolničkog lečenja, bolničkog lečenja i medicinskih usluga do ugovorene sume osiguranja.</p>
        <p>MedUNIQA privatno zdravstveno osiguranje tokom cele godine omogućava organizaciju i pokriće troškova lečenja u više od 1.000 privatnih i državnih ustanova na teritoriji cele Srbije.</p>

        <h3>1. Bolničko lečenje</h3>
        <ul>
          <li>Smeštaj u bolnici u poluprivatnim sobama</li>
          <li>Usluge lekara svih specijalnosti</li>
          <li>Dijagnostičke metode, laboratorijska ispitivanja, testovi i analize po medicinskoj indikaciji</li>
          <li>Intervencije u lokalnoj i opštoj anesteziji</li>
          <li>Lekovi i sanitetski materijal propisan za upotrebu, u toku bolničkog lečenja</li>
          <li>Davanje terapije</li>
          <li>Troškovi nabavke medicinsko-tehničkih pomagala</li>
          <li>Troškovi operacije</li>
        </ul>

        <h3>2. Vanbolničko lečenje</h3>
        <ul>
          <li>Pregled lekara opšte prakse i lekara specijaliste</li>
          <li>Dijagnostičke metode, laboratorijska ispitivanja i testovi po medicinskoj indikaciji</li>
          <li>Davanje terapije</li>
        </ul>

        <h3>3. Zdravstvena zaštita truudnica i porodilja</h3>
        <ul>
          <li>Pregledi, brisevi i laboratorijske analize</li>
          <li>Troškovi ultrazvučnih pregleda ploda</li>
          <li>Ekspertski ultrazvuk u slučaju visokorizične trudnoće</li>
          <li>Biohemijski skrining</li>
          <li>Troškovi porođaja</li>
        </ul>

        <h3>4. Dopunska osiguranja</h3>
        <ul>
          <li>Sistematski pregledi</li>
          <li>Fizikalne terapije</li>
          <li>Oftamološki pregledi</li>
          <li>Stomatološki pregledi</li>
          <li>Lekovi propisani od strane lekara</li>
          <li>Lečenje u inostranstvu</li>
        </ul>

        <h3>Telemedicina</h3>
        <p>
          Telemedicina(“Terapija na daljinu”) je modalitet pružanja zdravstvenih usluga korišćenjem informacionih i 
          komunikacionih tehnologija, odnosno prenos medicinski relevantnih informacija na daljinu uz poštovanje medicinskih i tehničko-tehnoloških standarda.
        </p>

      </>
    ),
    buttons: ["kontakt"],
  },
];