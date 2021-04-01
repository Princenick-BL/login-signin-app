import React from 'react'
import './css/App.css';
import SignIn from './view/SignIn'
import SignUp from './view/SignUp'
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import SigIn from './view/SignIn';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={SignIn}/>
          <Route exact path="/signup" component={SignUp}/>
          <Route component={SigIn}/>
        </Switch>    
      </Router>
        
    </div>
  );
}

export default App;
