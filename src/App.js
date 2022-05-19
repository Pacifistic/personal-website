import React from "react";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import FindMe from "./Components/FindMe";
import Certifications from "./Components/Certifications";

export default function App() {
  return (
      <main className="text-gray-400 bg-gray-900 body-font">
          <About />
          <FindMe/>
          <Skills/>
          <Certifications/>
          <Contact/>
      </main>
  );
}
