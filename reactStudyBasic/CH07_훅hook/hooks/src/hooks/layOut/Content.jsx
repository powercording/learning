import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Slider from "../ui/Slider";

const styles = {
  h5: {
    marginTop: 100,
  },
  main: {
    height: 750,
    color: "gray",
    backgroundColor: "white",
  },
};

function Content() {
  const { isDark } = useContext(ThemeContext);

  const setDark = () => {
    return { ...styles.main, backgroundColor: "#333", color: "#ccc" };
  };

  return (
    <main style={isDark ? setDark() : styles.main}>
      <div className={"container text-center"}>
        
      </div>
    </main>
  );
}

export default Content;
