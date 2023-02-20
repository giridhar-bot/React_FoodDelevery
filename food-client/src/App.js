import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { LoginPage, SignupPage } from "./Components/Log/SignupPage";
import ProductList from "./Components/Product/ProductList";

function App() {
  const [loggedIn, setLoggedIn] = React.useState(
    localStorage.getItem("loggedIn")
  );

  const handleLogin = () => {
    localStorage.setItem("loggedIn", true);
    setLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    setLoggedIn(false);
  };

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("loggedIn");
    if (!isLoggedIn) {
      setLoggedIn(false);
    }
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/login">
          {loggedIn ? (
            <Redirect to="/products" />
          ) : (
            <LoginPage onLogin={handleLogin} />
          )}
        </Route>
        <Route path="/signup">
          {loggedIn ? (
            <Redirect to="/products" />
          ) : (
            <SignupPage onLogin={handleLogin} />
          )}
        </Route>
        <Route path="/products">
          {loggedIn ? (
            <ProductList onLogout={handleLogout} />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Redirect from="/" to="/products" />
      </Switch>
    </Router>
  );
}

export default App;
