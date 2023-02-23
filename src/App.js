import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./sass/app.scss";
import UserProvider from "./context/mainContext";
import MainRoutes from "./routes/mainRoutes";

class App extends Component {
  state = {
    counter: 0,
  };

  handleClick = () => {
    this.setState((prevState) => {
      return { counter: prevState.counter + 1 };
    });
  };
  render() {
    return (
      <UserProvider>
        <MainRoutes />
      </UserProvider>
    );
  }
}
export default hot(module)(App);
