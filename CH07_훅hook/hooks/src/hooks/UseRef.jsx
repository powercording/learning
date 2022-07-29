/*useRef()
 * 참조 {Reference} 를 사용하기 위한 훅.
 */

import { useEffect, useRef } from "react";

function UseRef() {
  const inputRef = useRef();
  const imgRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const showMsg = () => {
    console.log(`환영합니다 ${inputRef.current.value} !!`);
    imgRef.current.style.display = "block";
  };

  return (
    <div className="container">
      <img
        ref={imgRef}
        src="./logo192.png"
        style={{
          width: "100px",
          marginBottom: "35px",
          display: "none",
        }}
        alt={"이미지"}
      ></img>
      <div className="d-flex">
        <input
          ref={inputRef}
          className="form-control w-25"
          type={"text"}
          placeholder="그림을 보여줄게요"
        />
        <button className="btn btn-success" onClick={showMsg}>
          환영합니다
        </button>
      </div>
    </div>
  );
}

export default UseRef;
