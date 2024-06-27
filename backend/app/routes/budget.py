from flask import Blueprint, request, jsonify
from app.models.budget import Budget
from app import db
from flask_jwt_extended import jwt_required, get_jwt_identity

budget_bp = Blueprint('budget', __name__)

@budget_bp.route('/api/budgets', methods=['GET'])
@jwt_required()
def get_budgets():
    user = get_jwt_identity()
    budgets = Budget.query.filter_by(user_id=user['id']).all()
    return jsonify([budget.to_dict() for budget in budgets]), 200

@budget_bp.route('/api/budgets', methods=['POST'])
@jwt_required()
def add_budget():
    data = request.get_json()
    name = data['name']
    limit = data['limit']
    user = get_jwt_identity()

    budget = Budget(name=name, limit=limit, user_id=user['id'])
    db.session.add(budget)
    db.session.commit()

    return jsonify(budget.to_dict()), 201
