import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./navbar";
import Main from "./pages/main";
import Basket from "./pages/basket";
import Account from "./pages/account";
import Footer from "./footer";

const Container = styled.div`
  height: 100vh;
`;

const App = () => {
  return (
    <Container>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/">
            <Main />
          </Route>
          <Route path="/basket">
            <Basket />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </Container>
  );
};

export default App;
