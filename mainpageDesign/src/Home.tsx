import { useEffect, useState } from "react";

const Home = () => {
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch("/login")
      .then((response) => response.text())
      .then((message) => {
        setMessage(message);
      });
  }, []);

  return (
    <div>
      홈입니다.
      <div>{message}</div>
    </div>
  );
};
export default Home;
