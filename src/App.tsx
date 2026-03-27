import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import UslugeOsiguranja from "./pages/UslugeOsiguranja";
import Usluga from "./pages/Usluga";

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <main className="content">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Services />
                <CTA />
              </>
            } />
            <Route path="/contact" element={<Contact />} />
            <Route path="/usluge-osiguranja" element={<UslugeOsiguranja />} />
            <Route path="/usluga/:slug" element={<Usluga />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;