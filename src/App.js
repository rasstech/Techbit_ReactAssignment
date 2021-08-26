import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import Home from './Components/Home';
import Friendlist from './Components/Friendlist';
import Profile from './Components/Profile';
function App() {
  return (
    <>
      <BrowserRouter>
      
        <Switch>
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/" component={SignUp} />
          <Route exact path="/signin/home" component={Home} />
          <Route exact path="/signin/home/friendlist" component={Friendlist} />
          <Route exact path="/signin/home/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
