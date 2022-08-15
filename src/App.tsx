import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Routes/Home";
import Search from "./Routes/Search";
import Tv from "./Routes/Tv";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/movieclone_build" element={<Home />}>
          <Route path="/movieclone_build/:movieId" element={<Home />} />
        </Route>
        <Route path="/movieclone_build/tv" element={<Tv />} />
        <Route path="/movieclone_build/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
