import React from 'react';
import './App.css';
import Navbar from './components/layouts/Navbar'
import Index from './components/layouts/Index'
import Lyrics from './components/Tracks/Lyrics'
import {Provider} from './context'
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Provider>
    <Router>
      <React.Fragment>
        <Navbar/>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/lyrics/track/:id" component={Lyrics} />
          </Switch>
        </div>
      </React.Fragment>
    </Router>
    </Provider>
  );
}

export default App;
