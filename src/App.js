import PlayStoreApp from "./Components/PlayStoreApp";
import React from "react";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Home from "./Components/Home";
import { Helmet } from "react-helmet";


function App() {
  return <div>
    <Helmet>
      <title> Ganesh Profile</title>
      <meta 
      name="description"
      content="Ganesh Resume"
      ></meta>
    </Helmet>
    <Home/>
    <Experience/>
    <Education/>
    <PlayStoreApp/>
  </div>;
}

export default App;
