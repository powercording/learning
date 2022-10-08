import React, { useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Page from "./pages/Page";

function Home() {
  //isDark 는 전역변수 -> 수많은 컴포넌트가 필요로 힘(가정)
  const [isDark, setIsDark] = useState(true);

  console.log(isDark);

  return (
    <div>
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <Page />
      </ThemeContext.Provider>
    </div>
  );
}

export default Home;
