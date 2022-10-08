import React from "react";
import { useState } from "react";

function NameForm() {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value.length > 8) {
      alert("8글자 이내로 입력해주세요");
      return setValue("");
    }
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <h4>name : </h4>
          <input
            name="name"
            value={value}
            type="text"
            className="form-control"
            placeholder="Input Your Name"
            onChange={handleChange}
          />
        </label>
        <button className="btn btn-success ms-1 mb-1" type="submit">
          SUBMIT
        </button>
      </form>
    </>
  );
}

export default NameForm;
