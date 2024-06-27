// frontend/src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register'; // Import Register component
import ExpenseList from './components/Dashboard/ExpenseList';

const App = () => {
  const [token, setToken] = useState(null);

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login setToken={setToken} />
        </Route>
        <Route path="/register">
          <Register setToken={setToken} />
        </Route>
        <Route path="/expenses">
          <ExpenseList token={token} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
