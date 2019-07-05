import React, { Component } from "react";
import { Provider } from "mobx-react";
import { render } from "react-dom";
import { rootStore } from "./stores";
import { HomePageContainer } from "./pages/HomePage";
import "./style.css";

class App extends Component {
  render() {
    return (
      <Provider rootStore={rootStore}>
        <HomePageContainer />
      </Provider>
    );
  }
}

render(<App />, document.getElementById("root"));
