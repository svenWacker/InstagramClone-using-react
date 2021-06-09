import React, { useState } from "react";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

import "./sass/main.scss";
import Data from "./data.json";

function App() {
  // const [posts, setPosts] = useState(Data);

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
