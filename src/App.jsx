import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import Get_Access from "./pages/Get_Access/Get_Access";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/get-access" element={<Get_Access />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
