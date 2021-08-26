import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
const SignIn = () => {
  const history = useHistory();
  const [user, setUser] = useState([
    {
      email: "",
      password: "",
    },
  ]);
  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitUser = (e) => {
    e.preventDefault();
    console.log(user);

    let localUser = JSON.parse(localStorage.getItem("user"));
    if(!localUser){
      alert("Account doesn't exist")
    }
    else if (
      user.email !== localUser.email ||
      user.password !== localUser.password
    ) {
      alert("Enter  Valid  Credentials");
      // console.log("local : ", localUser.email, user.email);
    } else {
      alert("Login Successfully")
      history.push("/signin/home");
    }

    setUser({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div className="fbHeading mt-3">
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
          alt="logo"
        />
      </div>
      <div className="SignInContainer">
        <form className="SignUp" onSubmit={submitUser}>
          <div className="text-center">
            <h3>Log in to Facebook</h3>
          </div>
          <div className="form-group m-3">
            <input
              value={user.email}
              onChange={handleInput}
              type="text"
              name="email"
              className="form-control"
              placeholder="Email or phone number "
            />
          </div>
          <div className="form-group m-3">
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleInput}
              className="form-control"
              placeholder="Password"
            />
          </div>
          <button className="signInBtn" type="submit">
            Log in
          </button>
          <div className="text-center mt-3">
            <p className="text-primary">Forgot account</p>
            <p>OR</p>
            <Link to="/">
              <button type="submit" className="signUpBtn2 mb-3">
                Create a new account
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignIn;
