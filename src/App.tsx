import Nav from "./components/layout/Nav";
import HamburgerMenu from "./components/layout/HamburgerMenu";
import Footer from "./components/layout/Footer";
import Profile from "./components/sections/Profile";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Publication from "./components/sections/Publication";
import Certifications from "./components/sections/Certifications";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <>
      <Nav />
      <HamburgerMenu />
      <Profile />
      <About />
      <Experience />
      <Projects />
      <Publication />
      <Certifications />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
