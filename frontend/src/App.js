import React from 'react';
import './App.css';

function App() {
  return (
    <Router>
        <div style={{justifyContent: 'center',textAlign:'center'}}>
          <Nav/>
          <Switch>
            <Route exact={true} path='/' component={Home}/>
            <Route exact={true} path='/sorting' component={Sorting}/>
            <Route exact={true} path='/apps' component={Apps}/>
            <Route exact={true} path='/about' component={About}/>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
