import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Results from './pages/Results';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/results">
          <Results />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
