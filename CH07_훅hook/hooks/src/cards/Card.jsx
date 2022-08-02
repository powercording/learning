import React from "react";

const styles = {
  card: {
    width: "18rem",
    marginRight: 1,
  },
  cardBody: {
    fontFamily: "Nanum Gothic Coding",
  },
};

function Card(props) {
  const title = props.title;
  const content = props.content;
  const img = props.img;
  return (
    <div className="card" style={styles.card}>
      <img className="card-img-top" src={`./imgs/${img}`} alt="Cardcap" />
      <div className="card-body" style={styles.cardBody}>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
        <a href="https://www.naver.com" className="btn btn-primary">
          button
        </a>
      </div>
    </div>
  );
}

export default Card;
