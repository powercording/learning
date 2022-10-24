import { useState } from "react";

function Tv() {
  const REST_API_KEY = "7c696e3a3c14642e58cb3002d74b5488";
  const REDIRECT_URI = "http://localhost:3000/movieclone_build/token";
  const [Cnumber, setCnumber] = useState<number[]>([0, 0, 0]);

  const computerNumber = () => {
    Cnumber.map((item, index) => {
      const newNum = Math.ceil(Math.random() * 10);
      if (!Cnumber.includes(newNum)) {
      }
    });
  };

  const generateRandom: number[] = () => {
    
    return [0, 0];
  };

  return (
    <div style={{ marginTop: "150px" }}>
      <div style={{ backgroundColor: "white" }}>
        <h1>Computer Number : </h1>
        <span>{Cnumber}</span>
        <button onClick={computerNumber}>컴퓨터 번호 생성</button>
      </div>
    </div>
  );
}

export default Tv;
