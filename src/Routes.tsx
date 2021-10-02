import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Home from './pages/Home';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
