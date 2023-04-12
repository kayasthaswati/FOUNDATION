import Navbar from "./Components/Navbar/Navbar";

import "./App.css";
import Intro from "./Components/Intro/intro";
import FloatingDiv from "./Components/FloatingDiv/FloatingDiv";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      {/* <FloatingDiv /> */}
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
