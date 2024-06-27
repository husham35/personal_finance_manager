import React from 'react';
import BudgetList from '../components/Dashboard/BudgetList';

const BudgetPage = ({ token }) => {
  return (
    <div>
      <h1>Budget Page</h1>
      <BudgetList token={token} />
    </div>
  );
};

export default BudgetPage;