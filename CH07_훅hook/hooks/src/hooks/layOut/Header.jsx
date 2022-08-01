import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "./layout.css";
const styles = {
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    color: "#111",
    backgroundColor: "#eee",
    justifyContent: "center",
    paddingTop: 45,
  },
  h4: {
    marginLeft: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  ul: {
    width: 400,
    listStyle: "none",
    display: "flex",
    justifyContent: "space-between",
    cursor: "pointer",
  },
};

function Header() {
  const { isDark } = useContext(ThemeContext);
  const setDark = () => {
    return { ...styles.header, backgroundColor: "#333", color: "#ccc" };
  };

  return (
    <>
      <header style={isDark ? setDark() : styles.header}>
        <img
          src="
        logo192.png"
          alt="`LOGO`"
          style={styles.avatar}
        />
        <h4 style={styles.h4}>
          <i className="fa-solid fa-house-user"></i>
          BIT CAMP
        </h4>
        <div>
          <ul style={styles.ul}>
            <li>Home</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Java</li>
            <li>SpringBoot</li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
