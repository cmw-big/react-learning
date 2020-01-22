import React from "react";
import store from "./store";
import { Provider } from "react-redux";

const App = () => {
  return <Provider store={store}></Provider>;
};

export default App;
