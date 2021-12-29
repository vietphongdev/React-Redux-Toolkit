import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Todos from "./components/Todos";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Todos />
      </div>
    </Provider>
  );
}

export default App;
