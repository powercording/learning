import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
const styles = {
  footer: {
    backgroundColor: "#eee",
    height: 100,
    display: "flex",
    // flexDirection:'row',
    alignItems: "center",
    justifyContent: "center",
    color: "#111",
  },

  contain: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: 'center',
  },
};

function Footer() {
  const { isDark, setIsDark } = useContext(ThemeContext);

  const setDark = () => {
    return { ...styles.footer, backgroundColor: "#333", color: "#ccc" };
  };

  const toggle = () => {
    setIsDark((current) => !current);
    document.querySelector(".btn").innerHTML = isDark
      ? "turn dark"
      : "turn light";
  };
  console.log(isDark);

  return (
    <>
      <footer style={isDark ? setDark() : styles.footer}>
        <div style={styles.contain}>
          Currently v5.2.1 Code licensed BITCAMP221, docs CC BY 3.0.
          <button className={"btn btn-info ml-5"} onClick={toggle}>
            turn light
          </button>
        </div>
      </footer>
    </>
  );
}

export default Footer;
