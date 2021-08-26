import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const SignUp = () => {
  const history = useHistory();
  const [user, setUser] = useState([
    {
      fname: "",
      lname: "",
      email: "",
      password: "",
      gender: " ",
    },
  ]);

  const [birthday, setbirthday] = useState([]);
  const handleInput = (e) => {
    setUser({ ...user, birthday, [e.target.name]: e.target.value });
  };

  const submitUser = (e) => {
    e.preventDefault();
    console.log(user);
    const { fname, lname, email, password, gender } = user;
    if (!fname || !lname || !email || !password || !gender || !birthday) {
      alert("Please Fill all the fields");
    }else  if (!/\S+@\S+\.\S+/.test(user.email)) {
      alert("Enter a valid email");
    }
    else {
      alert("SignUp successfull")
      localStorage.setItem("user", JSON.stringify(user));
      history.push("/signin");
    }
    setUser({
      fname: "",
      lname: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div className="fbHeading">
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
          alt="logo"
        />
      </div>
      <div className="SignUpContainer">
        <form className="SignUp" onSubmit={submitUser}>
          <div className="text-center">
            <h2>create a new account</h2>
            <p>it's quick and easy.</p>
          </div>
          <div className="d-flex mx-3 mb-2 ">
            <div className="form-group fname">
              <input
                autoComplete="off"
                type="text"
                value={user.fname}
                name="fname"
                onChange={handleInput}
                className="form-control "
                placeholder="first name"
              />
            </div>
            <div className="form-group lname">
              <input
                autoComplete="off"
                value={user.lname}
                onChange={handleInput}
                type="text"
                name="lname"
                className="form-control"
                placeholder="Last name"
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
            className="mx-3"
          >
            <div className="form-group ">
              <input
                autoComplete="off"
                value={user.email}
                onChange={handleInput}
                type="text"
                name="email"
                className="form-control"
                placeholder="Mobile number or email"
              />
            </div>
            <div className="form-group mt-2">
              <input
                autoComplete="off"
                type="password"
                name="password"
                value={user.password}
                onChange={handleInput}
                className="form-control"
                placeholder="New Password"
              />
            </div>
            <label>
              Birthday <i class="fas fa-question-circle"></i>
            </label>
            <div className="d-flex">
              <select
                class="form-select m-2"
                aria-label="Default select example"
                onChange={(e) => setbirthday([...birthday, e.target.value])}
              >
                <option value=" ">Day</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select>

              <select
                class="form-select m-2"
                aria-label="Default select example"
                onChange={(e) => setbirthday([...birthday, e.target.value])}
              >
                <option value=" "> Month </option>
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>

              <select
                class="form-select m-2"
                aria-label="Default select example"
                onChange={(e) => setbirthday([...birthday, e.target.value])}
              >
                <option value="">Year</option>
                <option value="1940">1940</option>
                <option value="1941">1941</option>
                <option value="1942">1942</option>
                <option value="1943">1943</option>
                <option value="1944">1944</option>
                <option value="1945">1945</option>
                <option value="1946">1946</option>
                <option value="1947">1947</option>
                <option value="1948">1948</option>
                <option value="1949">1949</option>
                <option value="1950">1950</option>
                <option value="1951">1951</option>
                <option value="1952">1952</option>
                <option value="1953">1953</option>
                <option value="1954">1954</option>
                <option value="1955">1955</option>
                <option value="1956">1956</option>
                <option value="1957">1957</option>
                <option value="1958">1958</option>
                <option value="1959">1959</option>
                <option value="1960">1960</option>
                <option value="1961">1961</option>
                <option value="1962">1962</option>
                <option value="1963">1963</option>
                <option value="1964">1964</option>
                <option value="1965">1965</option>
                <option value="1966">1966</option>
                <option value="1967">1967</option>
                <option value="1968">1968</option>
                <option value="1969">1969</option>
                <option value="1970">1970</option>
                <option value="1971">1971</option>
                <option value="1972">1972</option>
                <option value="1973">1973</option>
                <option value="1974">1974</option>
                <option value="1975">1975</option>
                <option value="1976">1976</option>
                <option value="1977">1977</option>
                <option value="1978">1978</option>
                <option value="1979">1979</option>
                <option value="1980">1980</option>
                <option value="1981">1981</option>
                <option value="1982">1982</option>
                <option value="1983">1983</option>
                <option value="1984">1984</option>
                <option value="1985">1985</option>
                <option value="1986">1986</option>
                <option value="1987">1987</option>
                <option value="1988">1988</option>
                <option value="1989">1989</option>
                <option value="1990">1990</option>
                <option value="1991">1991</option>
                <option value="1992">1992</option>
                <option value="1993">1993</option>
                <option value="1994">1994</option>
                <option value="1995">1995</option>
                <option value="1996">1996</option>
                <option value="1997">1997</option>
                <option value="1998">1998</option>
                <option value="1999">1999</option>
                <option value="2000">2000</option>
                <option value="2001">2001</option>
                <option value="2002">2002</option>
                <option value="2003">2003</option>
                <option value="2004">2004</option>
                <option value="2005">2005</option>
                <option value="2006">2006</option>
                <option value="2007">2007</option>
                <option value="2008">2008</option>
                <option value="2009">2009</option>
                <option value="2010">2010</option>
                <option value="2011">2011</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
              </select>
            </div>

            <label>
              Gender <i class="fas fa-question-circle"></i>
            </label>
            <div className="radio-container">
              <div className="wrapper">
                <label>Male</label>
                <input
                  onChange={handleInput}
                  value="Male"
                  type="radio"
                  name="gender"
                />
              </div>
              <div className="wrapper">
                <label>Female</label>
                <input
                  onChange={handleInput}
                  value="Female"
                  type="radio"
                  name="gender"
                />
              </div>
              <div className="wrapper">
                <label>Exclusive</label>
                <input
                  onChange={handleInput}
                  value="Exclusive"
                  type="radio"
                  name="gender"
                />
              </div>
            </div>
          </div>
          <div className="text-center">
            <small>
              By clicking Sign up, you agree to
              <span style={{ color: "blue" }}>Data Policy </span>and{" "}
              <span style={{ color: "blue" }}>Cookies Policy</span>
            </small>
            <br />
            <small>
              you can receive SMS notifications from us and leave at any time
            </small>
          </div>
          <button type="submit"  className="signUpBtn">
            Sign up
          </button>
          <div
            style={{
              color: "#1877f2",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontSize: "17px",
              textAlign: "center",
              lineHeight: "20px",
              marginTop:'10px',
              marginBottom:'20px',
            }}
          >
            <Link to="/signin" style={{ textDecoration:"none"}}> Already have an account ? </Link>
          </div>
        </form>
      </div>
      
    </>
  );
};

export default SignUp;
