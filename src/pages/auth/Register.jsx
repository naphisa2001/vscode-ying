import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../assets/css/Register.css";

function Register() {
  const navigate = useNavigate();
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const onSubmit = () => {
    if (usernameInput != "" && passwordInput != "") {
      navigate("/login");
    } else {
      window.alert("Please try again!!");
    }
  };

  return (
    <div>
      <Form>
        <h1 className="log">REGISTER</h1>
        <Form.Group  controlId="formBasicFirstname">
          <Form.Label >FirstName  </Form.Label>
          <Form.Control  type="firstname" placeholder="Enter firstname" />
        </Form.Group>

        <Form.Group  controlId="formBasicLastname">
          <Form.Label >Lastname  </Form.Label>
          <Form.Control type="lastname" placeholder="Enter lastname" />
        </Form.Group>

        <Form.Group controlId="usernameInput">
          <Form.Label >Username  </Form.Label>
          <Form.Control type="usernameInput" placeholder="Enter username" onChange={e => setUsernameInput(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="passwordInput" >
          <Form.Label>Password  </Form.Label>
          <Form.Control type="passwordInput" placeholder="Enter password" onChange={e => setPasswordInput(e.target.value)} />
        </Form.Group>
        <Button className="button" onClick={() => onSubmit()} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Register;
