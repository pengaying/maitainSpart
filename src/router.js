import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import dynamic from "dva/dynamic";
// import MenuSystem from './routes/MenuSystem';

function RouterConfig({ history, app }) {

  const MSystem = dynamic({
    app,
    models: () => [import('./models/systemModal'), import('./models/windowModal')],
    component: () => import('./routes/MSystem')
  })
  const MSyntheticDisplay = dynamic({
    app,
    models: () => [import('./models/syntheticdisplayModal'), import('./models/windowModal')],
    component: () => import('./routes/MSyntheticDisplay')
  })
  const MSparePart = dynamic({
    app,
    models: () => [import('./models/sparepartmodal'), import('./models/windowModal')],
    component: () => import('./routes/MSparePart')
  })
  const MWindow = dynamic({
    app,
    models: () => [import('./models/windowModal')],
    component: () => import('./routes/MWindow')
  })

  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={MSystem} />
        <Route path="/msyntheticDisplay" exact component={MSyntheticDisplay} />
        <Route path="/msparePart" exact component={MSparePart} />
        <Route path="/mwindow" exact component={MWindow} />
      </Switch>
    </Router>
  );

}

export default RouterConfig;

