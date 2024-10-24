import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MangaList from './components/MangaList';
import MangaDetails from './components/MangaDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>قارئ المانجا</h1>
        <Switch>
          <Route exact path="/" component={MangaList} />
          <Route path="/manga/:id" component={MangaDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
