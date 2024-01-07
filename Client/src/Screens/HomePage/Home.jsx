import React, { useContext } from "react";

import Navbar from "../../Components/Navbar/Navbar";
import TabContainer from "../../Components/TabContainer/TabContainer";
import { UserContext } from "../../context/userContext";

export default function Home() {
  return (
    <div>
      <Navbar isit={useContext(UserContext) == null? false : true } />
      <TabContainer />
    </div>
  );
}
