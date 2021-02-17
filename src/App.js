import "./App.css";
import ProfilePage from "./Container/ProfilePage.js";
import Cards from "./Container/Cards.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Cards /> */}
        {/* <ProfilePage /> */}
        <Switch>
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/" component={Cards} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
