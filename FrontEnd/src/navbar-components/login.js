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

const ErrorMsg = styled.div`
  text-align: center;
`;

const Signup = styled.div`
  text-align: center;
`;

const Login = ({ setShowModal }) => {
  const { login } = useLoginContext();
  const [loginError, setLoginError] = useState("");
  const history = useHistory();

  const submit = async (event) => {
    // prevent the form from refreshing the page on submit
    event.preventDefault();
    // create a new instance of FormData and pass this form element as the target
    const formData = new FormData(event.target);
    // pull out the values of the form and save them to an object
    const userData = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    // send a request to the backend, asking to log us in.
    // the backend will check if the provided password in the object above matches the one
    // stored in the database
    const res = await fetch("/api/users/login", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    // at this point, we should have a response from the server, we can check the status code below
    if (res.status === 200) {
      // 200 means the request was a success, so lets parse the user data out of the response
      const user = await res.json();
      // save the user data into state using our context provider
      login({
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
      });
      // close the modal and navigate back to the homepage
      history.push("/");
      setShowModal(false);
      return;
    }
    // if the request failed, we will get a 401 instad of a 200
    if (res.status === 401) {
      setLoginError("Wrong password");
      return;
    }
    // any other error code just show unknown email error
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
        {loginError && <ErrorMsg>{loginError}</ErrorMsg>}
        <Signup>
          Not register yet? <a href="/sign-up">Sign up</a>
        </Signup>
      </Modal>
    </Container>
  );
};

export default Login;
