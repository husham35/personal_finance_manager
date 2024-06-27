# backend/tests/test_auth.py
import unittest
from app import create_app, db
from app.models.user import User

class AuthTestCase(unittest.TestCase):
    def setUp(self):
        self.app = create_app()
        self.app.config['TESTING'] = True
        self.app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///:memory:'
        self.client = self.app.test_client()

        with self.app.app_context():
            db.create_all()

    def tearDown(self):
        with self.app.app_context():
            db.session.remove()
            db.drop_all()

    def test_register(self):
        response = self.client.post('/api/auth/register', json={
            'username': 'testuser',
            'email': 'testuser@example.com',
            'password': 'password'
        })
        self.assertEqual(response.status_code, 201)

    def test_login(self):
        user = User(username='testuser', email='testuser@example.com')
        user.set_password('password')

        with self.app.app_context():
            db.session.add(user)
            db.session.commit()

        response = self.client.post('/api/auth/login', json={
            'email': 'testuser@example.com',
            'password': 'password'
        })
        self.assertEqual(response.status_code, 200)

if __name__ == '__main__':
    unittest.main()
