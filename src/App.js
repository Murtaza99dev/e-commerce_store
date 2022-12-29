import React from "react";
import Welcome from "./Components/Welcome";
import Header from "./Components/Navbar";
import Display from "./Components/Bedrooms";
import Tables from "./Components/Tables";
import Sofa from "./Components/Sofa";
import Contact from './Components/Contact';
function App() {
  return (
    <>
    <div>
        <Header/>
      </div>
      <div>
        <Welcome/>
      </div>
      <div>
        <Display/>
      </div>
      <div>
        <Tables/>
      </div>
      <div>
        <Sofa />
      </div>
      <div>
        <Contact/>
      </div>
      
    </>
  );
}

export default App;
