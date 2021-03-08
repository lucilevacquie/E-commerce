import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { useLoginContext } from "./loginProvider";

import Navbar from "./navbar";
import Main from "./pages/main";
import Basket from "./pages/basket";
import Account from "./pages/account";
import SignUp from "./pages/sign-up";

const Container = styled.div`
  height: 100vh;
`;

const App = () => {
  const { login } = useLoginContext();

  useEffect(() => {
    console.log("app.js");
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        login(user);
      }
    } catch (e) {
      // do nothing
    }
  }, [login]);

  return (
    <Container>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/basket">
            <Basket />
          </Route>
          <Route path="/account/profile">
            <Account />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
};

export default App;
