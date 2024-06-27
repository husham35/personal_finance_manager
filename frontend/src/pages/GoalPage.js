import React from 'react';
import GoalList from '../components/Dashboard/GoalList';

const GoalPage = ({ token }) => {
  return (
    <div>
      <h1>Goal Page</h1>
      <GoalList token={token} />
    </div>
  );
};

export default GoalPage;