import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Wrapper>
          <Route exact path="/react-portfolio/" component={About} />
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
