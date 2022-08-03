import React, { useEffect, useState } from "react";
import FristREST from "./FristREST";
import axios from "axios";

function ListContainer() {
  const [lists, setLists] = useState("");

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos").then((res) => {
      setLists(res.data.slice(0, 5));
    });
  }, []);
  console.log(lists);

  return (
    <div className="">
      <header className="App-header">
        <div className="d-flex" style={{ alignItems: "center" }}>
          <img
            src="https://cdn.pixabay.com/photo/2017/08/25/18/48/watercolor-2681039__340.jpg"
            alt="universe"
            style={{ width: 100, height: 100, borderRadius: 50 }}
          />
          <div className="d-flex">
            <input className="form-control ms-3" />
            <button className="btn btn-danger">Search</button>
          </div>
        </div>
      </header>
      <div className="container">
        <span>글 갯수 = {lists.length} 개</span>
        <ul>
          {lists &&
            lists?.map((list) => {
              return (
                <FristREST
                  key={list.id}
                  no={list.id}
                  title={list.title}
                  thumb={list.thumbnailUrl}
                  album={list.albumId}
                />
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default ListContainer;
