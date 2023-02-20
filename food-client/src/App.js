import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { SignupPage, LoginPage } from "./Components/Log/SignupPage";
import ProductList from "./Components/Product/ProductList";
function App() {
  const loggedIn = localStorage.getItem("loggedIn");

  return (
    <Router>
      <Switch>
        <Route path="/login">
          {loggedIn ? <Redirect to="/products" /> : <LoginPage />}
        </Route>
        <Route path="/signup">
          {loggedIn ? <Redirect to="/products" /> : <SignupPage />}
        </Route>
        <Route path="/products">
          {loggedIn ? <ProductList /> : <Redirect to="/login" />}
        </Route>
        <Route path="/">
          <Redirect to="/products" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
