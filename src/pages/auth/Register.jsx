import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import md5 from "md5";
import { insertstudent } from "../../slice/datatableSlice";
import "../../assets/css/Register.css";

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  const [inputregis, setinputregis] = useState({
    name: "",
    lastname: "",
    sex: "",
    username: "",
    password: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setinputregis({
      ...inputregis,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    console.log("Hello!");
    e.preventDefault();
    if (
      !inputregis.name ||
      !inputregis.lastname ||
      !inputregis.sex ||
      !inputregis.username ||
      !inputregis.password
    ) {
      console.log("Please try again!");
      return;
    }
    const hashedPassword = md5(inputregis.password);
    let body = {
      name: inputregis.name,
      lastname: inputregis.lastname,
      sex: inputregis.sex,
      username: inputregis.username,
      password: hashedPassword,
    };

    dispatch(insertstudent(body))
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <div>
      <h2 className="log">REGISTER</h2>
      <div className="inputBorder">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              className="input-line"
              type="text"
              name="name"
              onChange={(e) => handleInput(e)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              className="input-line"
              type="text"
              name="lastname"
              onChange={(e) => handleInput(e)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Sex</Form.Label>
            <Form.Control
              className="input-line"
              type="text"
              name="sex"
              onChange={(e) => handleInput(e)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              className="input-line"
              type="text"
              name="username"
              onChange={(e) => handleInput(e)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              className="input-line"
              type="password"
              name="password"
              onChange={(e) => handleInput(e)}
            />
          </Form.Group>
          <Button className="button" type="submit" onClick={onSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Register;
