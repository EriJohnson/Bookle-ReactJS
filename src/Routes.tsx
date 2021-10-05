import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Details from './pages/Details';
import Home from './pages/Home';
import Results from './pages/Results';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/books">
          <Results />
        </Route>

        <Route path="/books/:id">
          <Details />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
