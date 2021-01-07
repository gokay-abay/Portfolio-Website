import React from "react";
import "./App.scss";
import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Form from "./components/ContactMe";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
