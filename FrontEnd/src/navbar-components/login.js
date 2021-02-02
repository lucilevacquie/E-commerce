import React from "react";
import ReactModal from "react-modal";
import styled from "styled-components";

import { useLoginContext } from "../loginProvider";

const Container = styled.div``;

const Login = () => {
  const { login } = useLoginContext();

  return (
    <Container>
      <div>Log in</div>
      <div>
        <input type="email" required>
          Email
        </input>
        <input type="password" required>
          Password
        </input>
      </div>
    </Container>
  );
};

export default Login;
