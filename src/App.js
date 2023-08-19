import "tailwindcss/tailwind.css";

import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="h-full w-full">
        <Home />
        <About />
        <Services />
        <Work />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
