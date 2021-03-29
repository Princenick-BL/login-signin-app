import React from 'react'
import './css/App.css';
import Login from './view/Login'
import Signin from './view/Signin'
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/signIn" component={Signin}/>
          <Route component={Login}/>
        </Switch>    
      </Router>
        
    </div>
  );
}

export default App;
