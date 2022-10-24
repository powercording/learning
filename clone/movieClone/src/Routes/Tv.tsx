import { useState } from "react";

function Tv() {
  const [Cnumber, setCnumber] = useState<string[]>([]);
  const [userNumber, setUserNumber] = useState<string[]>([]);
  const [result, setResult] = useState({ strike: 0, ball: 0, nothing: 0 });
  let arr: string[] = ["0", "0", "0"];

  const computerNumber = () => {
    generateRandom();
    setCnumber(arr);
  };

  const generateRandom = (): void => {
    arr.forEach((number, index) => {
      number = Math.floor(Math.random() * 10) + "";
      while (isDuplicated(number, arr)) {
        number = Math.floor(Math.random() * 10) + "";
      }
      arr[index] = number;
    });
  };

  const isDuplicated = (num: string, arr: string[]): boolean => {
    return arr.includes(num);
  };

  const userInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      setUserNumber([]);
    }
    if (userNumber.length === 3) return;
    if (!userNumber.includes(e.key)) {
      setUserNumber((prev) => [...prev, e.key]);
    } else alert("같은 숫자를 입력할 수 없습니다.");
  };

  const checkScore = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  const showResult = () => {
    let strike: number = 0;
    let ball: number = 0;
    let nothing: number = 0;

    Cnumber.forEach((str, index) => {
      if (userNumber[index] === str) {
        strike++;
      }
      if (userNumber[index] !== str && userNumber.includes(str)) {
        ball++;
      }
      if (!userNumber.includes(str)) {
        nothing++;
      }
    });

    setResult({
      strike,
      ball,
      nothing,
    });
  };

  return (
    <div style={{ marginTop: "150px", color: "black" }}>
      <div style={{ backgroundColor: "white" }}>
        <h1>Computer Number : </h1>
        <span>{[...Cnumber]}</span>
        <button onClick={computerNumber}>컴퓨터 번호 생성</button>
        <form onSubmit={checkScore}>
          <input
            value={userNumber}
            type="text"
            onKeyDown={userInput}
            placeholder="유저번호 입력"
          />
          <button onClick={showResult}>유저번호 확인</button>
        </form>
        <div>
          <span>스트라이크 : {result.strike}</span>
          <span>볼 : {result.ball}</span>
          <span>낫싱 : {result.nothing}</span>
        </div>
      </div>
    </div>
  );
}

export default Tv;
