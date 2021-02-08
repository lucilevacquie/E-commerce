import React from "react";
import styled from "styled-components";
import Profile from "../account-components/profile";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px;
`;

const AccountPage = () => {
  return (
    <Container>
      <Profile />
    </Container>
  );
};

export default AccountPage;
