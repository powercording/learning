import { BrowserRouter, Routes, Route } from "react-router-dom";
import Join from "./components/Join";
import User from "./components/User";
import Home from "./Home";
import Login from "./Login";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/user" element={<User />} />
        <Route path="/join" element={<Join />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
