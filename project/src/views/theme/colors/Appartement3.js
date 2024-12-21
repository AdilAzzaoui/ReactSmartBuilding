import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Colors from './Colors';
import DetailImmeuble from './DetailImmeuble';
import Etage1 from './Etage1';
import Etage2 from './Etage2';
import Etage3 from './Etage3';
import Etage4 from './Etage4';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Colors} />
        <Route path="/detailImeuble/:id" component={DetailImmeuble} />
        <Route path="/etage1" component={Etage1} />
        <Route path="/etage2" component={Etage2} />
        <Route path="/etage3" component={Etage3} />
        <Route path="/etage4" component={Etage4} />
      </Switch>
    </Router>
  );
};

export default App;
