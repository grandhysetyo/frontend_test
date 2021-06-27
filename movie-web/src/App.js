import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./component/Nav";
import Footer from "./component/Footer";
import Home from "./pages/Home";
import Detail_Movie from "./pages/Detail_Movie";

import "./App.css"

function App() {
  return (
    <Router>
        <Nav />
      <Switch>
          <Route path="/" exact component={Home} /> 
          <Route path="/detail/:slug" component={Detail_Movie} />                                                                 
      </Switch>
        <Footer/>
    </Router>
  );
}

export default App;
