import { BrowserRouter, Route, Routes } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

interface IRouter {
  toggle: () => void;
  isdark: boolean;
}

function Router({ toggle, isdark }: IRouter) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Coins toggle={toggle} isdark={isdark} />}>
          <Route path="/:coinId" element={<Coin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
