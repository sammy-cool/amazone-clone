import React from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import "./Login.css";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault(); //this stops the refresh!!!
    //do the login logic
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        //logged in, and redirect to homepage...
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  const register = (event) => {
    event.preventDefault(); //this stops the refresh!!!
    //do the register logic
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //create a user and logged in and redirect to homepage...
        history.push("/");
      })
      .catch((e) => {
        alert(e.message);
      });
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/800px-Amazon_logo.svg.png"
          alt="login_logo"
        />
      </Link>
      <div className="login_container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          />
          <button onClick={login} type="submit" className="login_button">
            Sign In
          </button>
        </form>
        <p>
          By signing in you agree to Amazon's Conditions of Use & Sale. Please
          see our Privacy Notice, our cookies Notice and our Interest-Based Ads
          Notice.
        </p>
        <button onClick={register} type="submit" className="register_button">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
