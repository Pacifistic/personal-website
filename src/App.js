import React from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";

export default function App() {
  return (
      <main className="text-gray-400 bg-gray-900 body-font">
          <About />
          <Skills/>
          <Contact/>
      </main>
  );
}
