import React, { useEffect, useState } from 'react';
import { getBudgets } from '../../services/api';

const BudgetList = ({ token }) => {
  const [budgets, setBudgets] = useState([]);

  useEffect(() => {
    const fetchBudgets = async () => {
      const response = await getBudgets(token);
      setBudgets(response.data);
    };
    fetchBudgets();
  }, [token]);

  return (
    <div>
      <h2>Budgets</h2>
      <ul>
        {budgets.map(budget => (
          <li key={budget.id}>{budget.name} - ${budget.limit}</li>
        ))}
      </ul>
    </div>
  );
};

export default BudgetList;