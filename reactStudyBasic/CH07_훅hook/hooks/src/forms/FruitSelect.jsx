import React from "react";
import { useState } from "react";

function FruitSelect() {
  const [fruits, setFruits] = useState("");
  const [state, setState] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleInput = (event) => {
    setFruits(event.target.value);
  };
  console.log(fruits);
  return (
    <form>
      <label>
        <h5>과일을 선택하세요:</h5>
        <select
          onInput={handleInput}
          onSubmit={handleSubmit}
          className="form-select"
        >
          <option value="orange">🍊</option>
          <option value="watermelon">🍉</option>
          <option value="apple">🍎</option>
          <option value="banana">🍌</option>
          <option value="cherry">🍒</option>
          <option value="strawbery">🍓</option>
          <option value="lemon">🍋</option>
          <option value="kiwi">🥝</option>
        </select>
      </label>
      <button className="btn btn-primary mb-1 ms-1" type="submit">
        button
      </button>
    </form>
  );
}

export default FruitSelect;
