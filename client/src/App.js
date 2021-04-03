import React from 'react'
import './css/App.css';
import SignIn from './view/SignIn'
import SignUp from './view/SignUp'
import Dashboard from './view/Dashboard'
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route exact path="/" component={SignUp}/>
          <Route exact path="/signup" component={SignUp}/>
          <Route exact path="/signin" component={SignIn}/>
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route component={SignUp}/>
        </Switch>    
      </Router>
        
    </div>
  );
}

export default App;
