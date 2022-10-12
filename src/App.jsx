import reactLogo from "./assets/react.svg";
import Form from "./components/Form";
import CreateAccount from "./components/CreateAccount";
import "./App.scss";
import { useState } from "react";

function App() {
  return (
    <div className="App container">
      <Form
        title="İletişim Formu"
        inputs={[
          { type: "input", name: "name", label: "İsim" },
          { type: "input", name: "email", label: "email" },
          { type: "textarea", name: "message", label: "message", rows: "5" },
        ]}
      ></Form>

      <CreateAccount
        title="New Account"
        inputs={[
          { type: "input", name: "dildo", label: "dildo" },
          { type: "input", name: "size", label: "size" },
          { type: "textarea", name: "message", label: "depth", rows: "5" },
        ]}
      ></CreateAccount>
    </div>
  );
}

export default App;
