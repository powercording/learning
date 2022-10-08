import React from "react";

const styles = {
  avatar: {
    borderRadius: 90,
    width: 180,
    padding: 10,
  },
};

function Avater(props) {
  return (
    <>
      <img src={props.url} alt="avatar=img" style={styles.avatar} />
    </>
  );
}

export default Avater;
