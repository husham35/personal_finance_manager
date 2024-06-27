from flask import Blueprint, request, jsonify
from app.models.goal import Goal
from app import db
from flask_jwt_extended import jwt_required, get_jwt_identity

goal_bp = Blueprint('goal', __name__)

@goal_bp.route('/api/goals', methods=['GET'])
@jwt_required()
def get_goals():
    user = get_jwt_identity()
    goals = Goal.query.filter_by(user_id=user['id']).all()
    return jsonify([goal.to_dict() for goal in goals]), 200

@goal_bp.route('/api/goals', methods=['POST'])
@jwt_required()
def add_goal():
    data = request.get_json()
    description = data['description']
    target_amount = data['target_amount']
    user = get_jwt_identity()

    goal = Goal(description=description, target_amount=target_amount, user_id=user['id'])
    db.session.add(goal)
    db.session.commit()

    return jsonify(goal.to_dict()), 201
