import React, { useEffect, useState } from 'react';
import { getGoals } from '../../services/api';

const GoalList = ({ token }) => {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const fetchGoals = async () => {
      const response = await getGoals(token);
      setGoals(response.data);
    };
    fetchGoals();
  }, [token]);

  return (
    <div>
      <h2>Goals</h2>
      <ul>
        {goals.map(goal => (
          <li key={goal.id}>{goal.description} - ${goal.target_amount}</li>
        ))}
      </ul>
    </div>
  );
};

export default GoalList;