import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Map from './map'

function App({history }) {
  
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/:city" component={Map} />
      </Switch>
    </Router>
  );
}

export default App;
