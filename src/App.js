import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "./components/Home/Home";
import About from "./components/About";
import RouteWithLayout from "./RouteWithLayout";
import Layout from "./components/Layout";
import Shop from "./components/Shop/Shop";
import GlobalProvider from "./context/GlobalState";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <GlobalProvider>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <RouteWithLayout
              exact
              path="/shop"
              component={Shop}
              layout={Layout}
            />
            <RouteWithLayout
              minimal
              exact
              path="/about"
              component={About}
              layout={Layout}
            />
            <Redirect to="/" />
          </Switch>
        </div>
      </GlobalProvider>
    </Router>
  );
}

export default App;
