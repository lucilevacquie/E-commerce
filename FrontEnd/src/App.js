import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./navbar";
import Main from "./pages/main";
import Basket from "./pages/basket";
import Account from "./pages/account";
import Footer from "./footer";
import SignUp from "./pages/sign-up";

const Container = styled.div`
  height: 100vh;
`;

const App = () => {
  return (
    <Container>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/pages/basket">
            <Basket />
          </Route>
          <Route path="/pages/account">
            <Account />
          </Route>
          <Route path="/pages/sign-up">
            <SignUp />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </Container>
  );
};

export default App;
