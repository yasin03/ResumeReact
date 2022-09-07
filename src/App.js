import React from "react";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Intro from "./components/intro/intro";
import Resume from "./components/resume/resume";
import Services from "./components/service/services";

const App = () => {
  return (
    <div>
      <Header />
      <Intro />
      <About />
      <Services />
      <Resume />
      <Contact />
      <Footer/>
    </div>
  );
};

export default App;
