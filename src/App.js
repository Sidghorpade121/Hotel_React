import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Find from "./pages/Find";
//import Sidebar from "./components/sidebar";
import Navbar from "./components/Navbar";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div>
      
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/Find/" component={Find} />

        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
        
      </Switch>
    </>
  );
}

export default App;
