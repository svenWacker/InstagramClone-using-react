import React, { useState } from "react";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Data from "./data.json";
import Footer from "./components/Footer";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [posts, setPosts] = useState(Data);

  return (
    <React.Fragment>
      {
        // <Gallery posts={posts} />
      }
      <Header />
      <Gallery Data={Data} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
