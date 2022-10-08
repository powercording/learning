import React from "react";
import Comment from "./Comment";

const list = [
  {
    name: "ken",
    comment: "안녕하세요 켄 입니다.",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm3hvA99fr4Zd4ztOR0mzg_BssWUlngV82hA&usqp=CAU",
  },
  {
    name: "sua",
    comment: "안녕하세요 수아 입니다.",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm3hvA99fr4Zd4ztOR0mzg_BssWUlngV82hA&usqp=CAU",
  },
];

function CommentList() {
  return (
    <div>
      {list.map((item, index) => (
        <Comment
          key={index}
          name={item.name}
          comment={item.comment}
          url={item.url}
        />
      ))}
    </div>
  );
}

export default CommentList;
