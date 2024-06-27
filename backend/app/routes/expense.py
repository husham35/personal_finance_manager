# backend/app/routes/expense.py
from flask import Blueprint, request, jsonify
from app.models.expense import Expense
from app import db
from flask_jwt_extended import jwt_required, get_jwt_identity

expense_bp = Blueprint('expense', __name__)

@expense_bp.route('/api/expenses', methods=['GET'])
@jwt_required()
def get_expenses():
    user = get_jwt_identity()
    expenses = Expense.query.filter_by(user_id=user['id']).all()
    return jsonify([expense.to_dict() for expense in expenses]), 200

@expense_bp.route('/api/expenses', methods=['POST'])
@jwt_required()
def add_expense():
    data = request.get_json()
    description = data['description']
    amount = data['amount']
    category = data['category']
    date = data['date']
    user = get_jwt_identity()

    expense = Expense(description=description, amount=amount, category=category, date=date, user_id=user['id'])
    db.session.add(expense)
    db.session.commit()

    return jsonify(expense.to_dict()), 201
