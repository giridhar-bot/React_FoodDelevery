import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory
} from "react-router-dom";
import { LoginPage, SignupPage } from "./Components/Log/SignupPage";
import ProductList from "./Components/Product/ProductList";

function App() {
  const [loggedIn, setLoggedIn] = React.useState(
    localStorage.getItem("loggedIn")
  );
  const history = useHistory();

  const handleLogin = () => {
    localStorage.setItem("loggedIn", true);
    setLoggedIn(true);
    history.push('/products');
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    setLoggedIn(false);
    history.push('/login');
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
        <Redirect exact from="/" to="/products" />
      </Switch>
    </Router>
  );
}

export default App;

// This is a React application that defines the routing logic for three different pages: login, signup, and a product list page. It uses the react-router-dom library to handle the routing.

// The application first sets up a state variable called loggedIn using the useState hook. The initial value of loggedIn is retrieved from local storage using localStorage.getItem("loggedIn").

// The application also imports the useHistory hook from react-router-dom to programmatically navigate to different routes based on certain conditions.

// The handleLogin function is called when a user logs in. It sets the loggedIn state variable to true, stores this value in local storage using localStorage.setItem("loggedIn", true), and navigates to the /products route using history.push('/products').

// The handleLogout function is called when a user logs out. It removes the loggedIn value from local storage using localStorage.removeItem("loggedIn"), sets the loggedIn state variable to false, and navigates to the /login route using history.push('/login').

// The useEffect hook is used to check if a user is already logged in by retrieving the loggedIn value from local storage. If the value is not present, the loggedIn state variable is set to false.

// The Router component from react-router-dom wraps the Switch component which defines the different routes for the application. There are three routes defined: /login, /signup, and /products.

// The /login and /signup routes render a LoginPage and SignupPage component respectively. If the loggedIn state variable is true, the user is redirected to the /products route using the Redirect component from react-router-dom.

// The /products route renders a ProductList component if the user is logged in. If the user is not logged in, they are redirected to the /login route using the Redirect component.

// Finally, there is a catch-all Redirect component that redirects from the root route (/) to the /products route.