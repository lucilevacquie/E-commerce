import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useLoginContext } from "../loginProvider";

const Container = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Modal = styled.div`
  background-color: white;
  margin: 15% auto;
  padding: 20px;
  width: 30%;
`;

const CloseButton = styled.span`
  color: black;
  float: right;
  font-size: 28px;
  font-weight: bold;
  :hover {
    color: grey;
    text-decoration: none;
    cursor: pointer;
  }
`;

const Title = styled.div`
  text-align: center;
  margin-top: 10px;
`;

const Form = styled.form`
  margin: 10px;
  display: flex;
  flex-direction: column;
  input {
    margin: 5px;
  }
  button {
    width: 40%;
    margin: 5px auto;
  }
`;

const Signup = styled.div`
  text-align: center;
`;

const Login = ({ setShowModal }) => {
  const { setIsLoggedIn } = useLoginContext();
  const [loginError, setLoginError] = useState("");
  const history = useHistory();

  const submit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userData = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    console.log(userData);
    const res = await fetch("/api/users/login", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    console.log(res);
    if (res.status === 200) {
      history.push("/");
      setIsLoggedIn(true);
      return;
    }
    if (res.status === 401) {
      setLoginError("Wrong password");
      return;
    }
    setLoginError("This email isn't register. Please sign up.");
  };

  return (
    <Container onClick={() => setShowModal(false)}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={() => setShowModal(false)}>&times;</CloseButton>
        <Title>Log in</Title>
        <Form onSubmit={(e) => submit(e)}>
          <input name="email" type="email" placeholder="Email" required></input>
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
          ></input>
          <button type="submit">Submit</button>
        </Form>
        {loginError && <div>{loginError}</div>}
        <Signup>
          Not register yet? <a href="/pages/sign-up">Sign up</a>
        </Signup>
      </Modal>
    </Container>
  );
};

export default Login;
