import React, { useState } from "react";
import Result from "./Result";

function Search() {
  const [img, setImg] = useState("");

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setImg(value);
  };
  return (
    <>
      <div className="searchbar"></div>
      <input
        type="text"
        placeholder="Search anything..."
        value={img}
        onChange={InputEvent}
      />
      {img === "" ? null : <Result name={img} />}
    </>
  );
}

export default Search;
