import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
});

export const register = (userData) => api.post('/auth/register', userData);

export const login = (userData) => api.post('/auth/login', userData);

export const getExpenses = (token) => api.get('/expenses', {
  headers: { Authorization: `Bearer ${token}` },
});

export const addExpense = (expenseData, token) => api.post('/expenses', expenseData, {
  headers: { Authorization: `Bearer ${token}` },
});

export const getBudgets = (token) => api.get('/budgets', {
  headers: { Authorization: `Bearer ${token}` },
});

export const addBudget = (budgetData, token) => api.post('/budgets', budgetData, {
  headers: { Authorization: `Bearer ${token}` },
});

export const getGoals = (token) => api.get('/goals', {
  headers: { Authorization: `Bearer ${token}` },
});

export const addGoal = (goalData, token) => api.post('/goals', goalData, {
  headers: { Authorization: `Bearer ${token}` },
});
