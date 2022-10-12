import React, { useEffect, useState } from "react";
import Input from "./Input";
const CreateAccount = (props) => {
  console.log(props);
  useEffect(() => {
    console.log(props);
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div className="form">
      <h1>{props.title}</h1>
      {props.inputs.map((item) => {
        return <Input {...item} />;
      })}
      <form onSubmit={handleSubmit} action="">
        <div className="form-control">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CreateAccount;
