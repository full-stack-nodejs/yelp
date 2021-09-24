import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";
import RestourantDetailPage from "./routes/RestourantDetailPage";
import UpdatePage from "./routes/UpdatePage";

const App = () => {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/restourants/:id/update" component={UpdatePage} />
          <Route
            exact
            path="/restourants/:id"
            component={RestourantDetailPage}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
