import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateObject from "./pages/CreateObject";
import Login from "./pages/Login";
import Map from "./pages/Map";
import Objects from "./pages/Objects";
import Registration from "./pages/Registration";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/registration" element={<Registration />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/objects" element={<Objects />}></Route>
        <Route exact path="/map" element={<Map />}></Route>
        <Route exact path="/create-object" element={<CreateObject />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
