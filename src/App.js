import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Register from "./components/Register";
import Edit from "./components/Edit";
import Details from "./components/Details";
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/edit/:id" component={Edit} />
        <Route exact path="/view/:id" component={Details} />
      </Switch>
    </>
  );
}

export default App;
