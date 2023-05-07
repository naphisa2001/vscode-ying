import React, {useState} from "react";
import {useNavigate} from "react-router-dom"
import { Form, Button } from "react-bootstrap";
import "../../assets/css/Login.css";

function Login() {
    const navigate = useNavigate();
    const username = "ying";
    const password = "1234";
    const [usernameInput, setUsernameInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");

    const onSubmit = () => {
      if (username === usernameInput && password === passwordInput) {
        navigate("/main/home");
      } else {
        window.alert("Please try again!!");
      }
    };
   
  return (
    <div>
        <div>
        <Form>
          <h1 className="log">LOGIN</h1>
      <Form.Group controlId="formBasicUsername">
        <Form.Label>Username  </Form.Label>
        <Form.Control type="username" placeholder=" Enter your Username   " onChange={e => setUsernameInput(e.target.value)}  />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label >Password  </Form.Label>
        <Form.Control type="password" placeholder=" Enter your Password   " onChange={e => setPasswordInput(e.target.value)} />
      </Form.Group><br/>
      <Button className="button" type="submit" onClick={onSubmit}>
        Submit
      </Button>
    </Form>
        </div>
    </div>
  );
}

export default Login;