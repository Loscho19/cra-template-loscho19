import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Import Hooks
import ScrollToTop from './hooks/ScrollToTop';

// Import Pages
import Home from './pages/Home';

function App() {
  return (
    <Router>
      {/* Wenn die Seite gewechselt wird, scrollt dieser Component die Seite nach oben */}
      <ScrollToTop />
      <div id='main'>
        <header>Header</header>
        <Switch>
          {/* Home */}
          <Route exact path='/' component={Home} />

          {/* 404 */}
          <Route path='*' component={NoMatch} />
        </Switch>
        <footer>Footer</footer>
      </div>
    </Router>
  );
}

export default App;
