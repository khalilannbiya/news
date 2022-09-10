import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./pages/App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <BrowserRouter>
         <Routes>
            <Route path="/news/" element={<App />} />
            <Route path="/news/:id" element={<App />} />
         </Routes>
      </BrowserRouter>
   </React.StrictMode>
);
