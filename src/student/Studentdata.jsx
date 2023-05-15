import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import md5 from "md5";
import { editstudent, getdatatableall, insertstudent, deletestudent } from "../slice/datatableSlice";
import "./student.css";

function Studentdata() {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [showAdd, setShowAdd] = useState(false);
    const [data, setData] = useState([]);
    const [datamodal, setDatamodal] = useState([]);
    const [dataSend, setDataSend] = useState({
        name: "",
        lastname: "",
        sex: "",
        username: "",
        password: ""
    });

    const [insert, setInsert] = useState({
        name: "",
        lastname: "",
        sex: "",
        username: "",
        password: "",
    });


    const handleClose = () => setShow(false);
    const handleShow = (data) => {
        setDatamodal(data);
        setShow(true);
    };

    const AddClose = () => {
        setShowAdd(false);
    };
    const AddShow = () => {
        setShowAdd(true);
    };

    // reccomment
    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setDataSend({
            ...dataSend,
            [name]: value,
        });
    };

    //   recomment
    const handleInsert = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInsert({
            ...insert,
            [name]: value,
        });
    };


    // on click save value edit
    const onSave = () => {
        let body = {
            id: datamodal.id,
            body: {
                name: dataSend.name === "" ? datamodal.name : dataSend.name,
                lastname: dataSend.lastname === "" ? datamodal.lastname : dataSend.lastname,
                sex: dataSend.sex === "" ? datamodal.sex : dataSend.sex,
                username: dataSend.username === "" ? datamodal.username : dataSend.username,
                password: dataSend.password === "" ? datamodal.password : dataSend.password
            },
        };

        dispatch(editstudent(body))
            .then((result) => {
                setShow(false);
                setDataSend({
                    name: "",
                    lastname: "",
                    sex: "",
                    username: "",
                    password: ""
                });
                loadData();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    // reload
    useEffect(() => {
        loadData();
    }, []);

    const onInsrt = () => {
        const hashedPassword = md5(insert.password);
        let body = {
            name: insert.name,
            lastname: insert.lastname,
            sex: insert.sex,
            username: insert.username,
            password: hashedPassword
        };

        dispatch(insertstudent(body))
            .then((result) => {
                setShow(false);
                setShowAdd({ name: "", lastname: "", sex: "", username: "", password: "" });
                loadData();
                // show success notification
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        loadData();
    }, []);

    const loadData = () => {
        dispatch(getdatatableall())
            .then((result) => {
                setData(result.payload);
            })
            .catch((error) => {
                setData(error);
            });
    };

    //Delete
    const onDelete = (id) => {
        dispatch(deletestudent(id))
            .then((result) => {
                loadData();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div
            style={{
                marginTop: "60px",
                marginLeft: "60px",
                marginRight: "60px",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <h1 style={{ marginLeft: "45%", marginBottom: "20px", marginTop: "5%" }}>Student Table</h1>
            <Button style={{ marginBottom: "3px" }}
                variant="success"
                onClick={AddShow}>
                ADD
            </Button>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Sex</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((datastudent) => {
                        const { id, name, lastname, sex } = datastudent;
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{lastname}</td>
                                <td>{sex}</td>
                                <td>
                                    <Button
                                        variant="warning"
                                        onClick={() => handleShow(datastudent)}
                                    >
                                        EDIT
                                    </Button>
                                    <Button style={{ marginLeft: "4px" }}
                                        variant="danger"
                                        onClick={() => onDelete(id)}
                                    >
                                        DELETE
                                    </Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Data</Modal.Title>
                    </Modal.Header>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label> Name</Form.Label>
                            <Form.Control
                                type="name"
                                placeholder={datamodal.name}
                                onChange={(e) => handleChange(e)}
                                name={"name"}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label> Last name</Form.Label>
                            <Form.Control
                                type="lastname"
                                placeholder={datamodal.lastname}
                                onChange={(e) => handleChange(e)}
                                name={"lastname"}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Sex</Form.Label>
                            <Form.Control
                                type="sex"
                                placeholder={datamodal.sex}
                                onChange={(e) => handleChange(e)}
                                name={"sex"}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="username"
                                placeholder={datamodal.username}
                                onChange={(e) => handleChange(e)}
                                name={"username"}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder={datamodal.password}
                                onChange={(e) => handleChange(e)}
                                name={"password"}
                            />
                        </Form.Group>
                    </Form>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={onSave}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>

            <>
                {/* Insert Data */}
                <Modal show={showAdd} onHide={AddClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>INSERT DATA</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    className="input-line"
                                    type="text"
                                    name="name"
                                    onChange={(e) => handleInsert(e)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                    className="input-line"
                                    type="text"
                                    name="lastname"
                                    onChange={(e) => handleInsert(e)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Sex</Form.Label>
                                <Form.Control
                                    className="input-line"
                                    type="text"
                                    name="sex"
                                    onChange={(e) => handleInsert(e)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                    className="input-line"
                                    type="text"
                                    name="username"
                                    onChange={(e) => handleInsert(e)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    className="input-line"
                                    type="password"
                                    name="password"
                                    onChange={(e) => handleInsert(e)}
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={AddClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={onInsrt}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        </div>
    );
}

export default Studentdata;


