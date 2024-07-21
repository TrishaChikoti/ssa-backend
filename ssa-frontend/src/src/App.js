import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CustomerList from './components/CustomerList';
import InventoryList from './components/InventoryList';
import QueueList from './components/QueueList';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/customers" component={CustomerList} />
          <Route path="/inventory" component={InventoryList} />
          <Route path="/queue" component={QueueList} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
