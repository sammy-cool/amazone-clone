import React from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Checkout from "./component/Checkout";
import { auth } from "./component/firebase";
import Home from "./component/Home";
import Login from "./component/Login";
import { useStateValue } from "./component/StateProvider";
import Header from "./Header";

function App() {
  const [{ user }, dispatch] = useStateValue();

  // useEffect <<<<<< POWERFUL
  //Peice of code which runs based on a given condition

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user is logged in...
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out...
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      // Any cleanup operations go in here...
      unsubscribe();
    };
  }, []);

  // console.log(user);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
