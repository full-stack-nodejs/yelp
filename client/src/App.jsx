import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { RestourantsContextProvider } from "./context/RestourantsContext";
import Home from "./routes/Home";
import RestourantDetailPage from "./routes/RestourantDetailPage";
import UpdatePage from "./routes/UpdatePage";

const App = () => {
  return (
    <RestourantsContextProvider>
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/restourants/:id/update"
              component={UpdatePage}
            />
            <Route
              exact
              path="/restourants/:id"
              component={RestourantDetailPage}
            />
          </Switch>
        </Router>
      </div>
    </RestourantsContextProvider>
  );
};

export default App;
