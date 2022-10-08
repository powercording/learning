import React from "react";
import Content from "../layOut/Content";
import Footer from "../layOut/Footer";
import Header from "../layOut/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Java from "./Java";
import RReact from "./React";

function Page() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/java" element={<Java />} />
          <Route path="/react" element={<RReact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default Page;
