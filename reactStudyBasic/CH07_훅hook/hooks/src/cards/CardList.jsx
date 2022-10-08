import React from "react";
import Card from "./Card";

const articles = [
  {
    img: "baby.jpg",
    title: "Baby",
    content:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    img: "dog.jpg",
    title: "My dog",
    content:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    img: "free.jpg",
    title: "vacation",
    content:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    img: "food.jpg",
    title: "Food",
    content:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    img: "women.jpg",
    title: "Blog",
    content:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    img: "flower.jpg",
    title: "Nature",
    content:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
];

function CardList() {
  return (
    <div className="container d-flex">
      {articles.map((img, idx) => {
        return (
          <Card
            key={idx}
            img={img.img}
            title={img.title}
            content={img.content}
          />
        );
      })}
    </div>
  );
}

export default CardList;
