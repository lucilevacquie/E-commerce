import React from "react";
import styled from "styled-components";

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

  const submit = () => {
    //compare db with login
    //if email is in db and corresponds to password -> login
    //if email is not in db -> alert "Not register, sign up" -> link to sign up page

    window.location = "/";
    setIsLoggedIn(true);
  };

  return (
    <Container onClick={() => setShowModal(false)}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={() => setShowModal(false)}>&times;</CloseButton>
        <Title>Log in</Title>
        <Form onSubmit={(e) => submit(e)}>
          <input type="email" placeholder="Email" required></input>
          <input type="password" placeholder="Password" required></input>
          <button type="submit">Submit</button>
        </Form>
        <Signup>
          Not register yet? <a href="/pages/sign-up">Sign up</a>
        </Signup>
      </Modal>
    </Container>
  );
};

export default Login;
