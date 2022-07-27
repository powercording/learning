import React from "react";
import Avater from "./Avater";
import DateTime from "./DateTime";

const styles = {
  fullbox: {
    display: "flex",
  },
  picture: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "tomato",
    fontWeight: "bold",
  },
  msgbox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "rgba(1,1,1,0.5)",
    color: "whitesmoke",
    padding: 10,
    borderRadius: 20,
    margin: 10,
    width: "50%",
  },
};

function Comment(props) {
  return (
    <>
      <div className={"comment"} style={styles.fullbox}>
        <div className={"user-info container"} style={styles.picture}>
          <Avater url={props.url} />
          <div className={"user-info-name container"}>{props.name}</div>
        </div>

        <div className={"comment-text conatainer"} style={styles.msgbox}>
          <p>{props.comment}</p>
          <div className={"comment-date"}>
            <p>
              <DateTime />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Comment;
