import React from "react";

import Navbar from "../../Components/Navbar/Navbar";
import TabContainer from "../../Components/TabContainer/TabContainer";

export default function Home() {

  function def(){
    
  }

  return (
    <div>
      <Navbar isit={true} getData={def} />
      <TabContainer />
    </div>
  );
}
