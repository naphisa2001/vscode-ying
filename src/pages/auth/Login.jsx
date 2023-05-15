import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import md5 from 'md5';
import { loginstudent } from "../../slice/datatableSlice";
import "../../assets/css/Login.css";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!usernameInput || !passwordInput) {
      console.log("Please try again!");
      return;
    }

    const hashedPassword = md5(passwordInput);
    let body = { username: usernameInput, password: hashedPassword };
    dispatch(loginstudent(body))
      .then((result) => {
        console.log(result);
        navigate("/main");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div>
        <Form>
          <h1 className="log">LOGIN</h1>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username  </Form.Label>
            <Form.Control type="username" placeholder=" Enter your Username   " onChange={e => setUsernameInput(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label >Password  </Form.Label>
            <Form.Control type="password" placeholder=" Enter your Password   " onChange={e => setPasswordInput(e.target.value)} />
          </Form.Group><br />
          <Button className="button" type="submit" onClick={onSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;