

import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import InitialPage from './PagesFolder/InitialPage';
import MasterLoginPage from './PagesFolder/MasterAdminModule/MasterLoginPage';
import MasterModule from './PagesFolder/MasterAdminModule';
import MasterMainStructure from './PagesFolder/MasterAdminModule/MasterMainStructure';

function App() {
  return (
    <>

      <Router>
        <Switch>
          <Route exact path='/' component={MasterModule} />
          <Route path='/master' component={MasterModule} />
          {/* <Route path='/master/login' component={MasterLoginPage} />
          <Route exact path="/master/dashboard" component={MasterMainStructure} /> */}




          {/* <Route path='/security' component={MasterModule} /> */}
          {/* <Route path='*' component={InitialPage} /> */}
        </Switch>
      </Router>

    </>
  );
}

export default App;
