// frontend/src/components/Dashboard/ExpenseList.js
import React, { useEffect, useState } from 'react';
import { getExpenses } from '../../services/api';

const ExpenseList = ({ token }) => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      const response = await getExpenses(token);
      setExpenses(response.data);
    };
    fetchExpenses();
  }, [token]);

  return (
    <div>
      <h2>Expenses</h2>
      <ul>
        {expenses.map(expense => (
          <li key={expense.id}>{expense.description} - ${expense.amount}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
