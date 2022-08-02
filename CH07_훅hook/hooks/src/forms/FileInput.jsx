import React from "react";
import { useState } from "react";

function FileInput() {
  const [imgSrc, setImgSrc] = useState("");
  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    setImgSrc(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <>
      <div className={"input-group mb-3"}>
        <input
          type="file"
          accept="image/*"
          className="form-control"
          id="inputFile"
          onChange={handleImageUpload}
        />
        <label className="input-group-text">upLoad</label>
      </div>
      <div className="preview">
        {imgSrc && <img className="w-250" src={imgSrc} alt="uploaded" />}
      </div>
    </>
  );
}

export default FileInput;
