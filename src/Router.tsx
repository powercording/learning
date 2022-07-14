import { BrowserRouter, Routes, Route } from "react-router-dom";
import Join from "./components/Join";
import User from "./components/User";
import Login from "./Login";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/user" element={<User />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
