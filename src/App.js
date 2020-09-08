import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Home = lazy(() => import("../src/pages/home"));
const Quiz = lazy(() => import("../src/pages/quiz"));
const Results = lazy(() => import("../src/pages/results"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div></div>}>
        <Switch>
          <Route
            path="/"
            exact={true}
            component={(props) => <Home {...props} />}
          />
          <Route
            path="/quiz"
            exact={true}
            component={(props) => <Quiz {...props} />}
          />
          <Route
            path="/results"
            exact={true}
            component={(props) => <Results {...props} />}
          />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
