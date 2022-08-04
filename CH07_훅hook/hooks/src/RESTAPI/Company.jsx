import axios from "axios";
import React, { useState } from "react";

const SERVER_URL = "http://localhost:8080/company";

function Company() {
  const [data, setData] = useState({
    name: "",
    address: "",
  });

  const onSubmit = (event) => {
    event.preventDefault();

    axios
      .post(SERVER_URL, data)
      .then((res) => setData(res.data))

      .catch((err) => console.log(err));
  };
  console.log(data);
  return (
    <div className="Container d-flex flex-column">
      <h3>Company</h3>
      <hr />
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="form-control mb-3"
          name="name"
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <input
          type="text"
          className="form-control mb-3"
          name="address"
          onChange={(e) => setData({ ...data, address: e.target.value })}
        />
        <button className="btn btn-outline-primary">전송하기</button>
      </form>
    </div>
  );
}

export default Company;
