import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import Get_Access from "./pages/Get_Access/Get_Access";
import Leave_Management from "./pages/Services/Leave_Management";
import Student_Feedback from "./pages/Services/Student_Feedback";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/get-access" element={<Get_Access />} />
        <Route path="/leave-mgmt" element={<Leave_Management/>} />
        <Route path="/student-feedback" element={<Student_Feedback/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
