import React from "react";
import styled from "styled-components";
import { useLoginContext } from "../loginProvider";

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.shell};
  height: 100%;
`;

const Title = styled.div`
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin: auto;
  input {
    margin: 5px;
  }
  button {
    margin: 10px auto;
    width: 30%;
    padding: 5px;
  }
`;

const SignUp = () => {
  const submit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userData = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      password: formData.get("password"),
    };
    fetch("/api/users", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
  };
  return (
    <Container>
      <Title>Sign up</Title>
      <Form onSubmit={(e) => submit(e)}>
        <input name="firstName" type="text" placeholder="First name" required />
        <input name="lastName" type="text" placeholder="Last name" required />
        <input name="email" type="email" placeholder="Email" required />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
        />
        <button type="submit">Submit</button>
      </Form>
    </Container>
  );
};

export default SignUp;
