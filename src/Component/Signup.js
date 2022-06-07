import React, {useState} from "react";
import { Card, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailCheck, setEmailCheck] = useState(false);
  const [password, setPassword] = useState("");
  const [passowrdCheck, setPasswordCheck] = useState(false);
  const [confirmPasswordCheck, setConfirmPasswordCheck] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleClick = () => {
    if (!email.includes("@") || !email.includes(".")) {
      setEmailCheck("Enter correct email");
      return;
    } else {
      setEmailCheck(false);
    }

    if (password !== confirmPassword) {
      setConfirmPasswordCheck("Password doesn't match");
      return;
    } else {
      setConfirmPasswordCheck(false);
    }
    if (password.length < 6) {
      setPasswordCheck("Password length must be greater than 6");
      return;
    } else {
      setPasswordCheck(false);
    }

    dispatch({
      type: 'Signup',
      payload: {
        id: (new Date).getTime(),
        name, email, password
      }
    })
    navigate("/login")
  }

  return (
    <Card className="signup m-auto p-4 mt-5 shadow bg-white rounded">
      <Row className="mb-2">
        <Form.Group md="4">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder=" Enter Your Name"
            onChange={(e) => setName(e.target.value)}
            name="name"
            value={name}
          />
        </Form.Group>

        <Form.Group md="4">
          <Form.Label>Email</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="text"
              placeholder="Username"
              required
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              value={email}
            />
          </InputGroup>
        </Form.Group>
        <div style={{ color: "red" }}>
          {emailCheck && <span>{emailCheck}</span>}
        </div>

        <Form.Group md="4">
          <Form.Label>Password</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="text"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              value={password}
            />
          </InputGroup>
        </Form.Group>
        <div style={{ color: "red" }}>
          {passowrdCheck && <span>{passowrdCheck}</span>}
        </div>

        <Form.Group md="4">
          <Form.Label>Confirm Password</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="text"
              placeholder="Confirm Password"
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
              name="confirmPassword"
              value={confirmPassword}
            />
          </InputGroup>
        </Form.Group>
        <div style={{ color: "red" }}>
          {confirmPasswordCheck && <span>{confirmPasswordCheck}</span>}
        </div>
      </Row>
      <Button type="submit" className="w-100" onClick={handleClick}>
        Register
      </Button>
    </Card>
  )
};
