

import Navbar from "./Components/Navbar/Navbar";

import './App.css'
import Intro from "./Components/Intro/intro";
import FloatingDiv from "./Components/FloatingDiv/FloatingDiv";
import Services from "./Components/Services/Services";


function App() {
  return (
    <div className="App">
       <Navbar/>
       <Intro/>
     <FloatingDiv/>
     <Services/>
    </div>
  );
}

export default App;
