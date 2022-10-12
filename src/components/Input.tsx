import React, { useEffect, useState } from "react";

const Input = (props) => {
  const [inputVal, setInputVal] = useState("");
  console.log("inputprops", props);
  return (
    <div className="form-control">
      <label htmlFor="">{props.label}</label>

      {props.type === "input" ? (
        <input
          value={inputVal}
          type="text"
          onChange={(e) => {
            setInputVal(e.target.value);
          }}
        />
      ) : props.type === "textarea" ? (
        <textarea
          value={inputVal}
          rows={props.rows}
          onChange={(e) => {
            setInputVal(e.target.value);
          }}
        />
      ) : null}
    </div>
  );
};

export default Input;
