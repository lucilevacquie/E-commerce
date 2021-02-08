import React, { useState } from "react";
import styled from "styled-components";
import { useLoginContext } from "../loginProvider";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  text-align: center;
  border: black solid;
  padding: 15px 0;
`;

const Head = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px 0;
`;

const Title = styled.div``;

const Edit = styled.button``;

const Info = styled.div``;

const Profile = () => {
  const { firstName, lastName, email, login } = useLoginContext();
  const [newFirstName, setNewFirstName] = useState(firstName);
  const [newLastName, setNewLastName] = useState(lastName);
  const [newEmail, setNewEmail] = useState(email);

  const [edit, setEdit] = useState(false);

  const updateInfo = () => {
    const newInfo = {
      firstname: newFirstName,
      lastname: newLastName,
      email: newEmail,
    };
    login(newInfo);
    setEdit(!edit);
  };

  return (
    <Container>
      <Head>
        <Title>My Profile</Title>
        <Edit onClick={() => setEdit(!edit)}>Edit</Edit>
      </Head>
      <Info>
        <div>
          First name:{" "}
          {edit ? (
            <input
              type="text"
              value={newFirstName}
              onChange={(e) => setNewFirstName(e.target.value)}
            />
          ) : (
            <div>{firstName}</div>
          )}
        </div>
        <div>
          Last name:{" "}
          {edit ? (
            <input
              type="text"
              value={newLastName}
              onChange={(e) => setNewLastName(e.target.value)}
            />
          ) : (
            <div>{lastName}</div>
          )}
        </div>
        <div>
          Email:{" "}
          {edit ? (
            <input
              type="text"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
            />
          ) : (
            <div>{email}</div>
          )}
        </div>
      </Info>
      {edit && <button onClick={updateInfo}>Save</button>}
    </Container>
  );
};

export default Profile;
