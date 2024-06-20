### README.md

# Personal Finance Manager

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Data Model](#data-model)
- [User Stories](#user-stories)
- [Mockups](#mockups)
- [Challenges](#challenges)
- [Collaboration](#collaboration)
- [Progress](#progress)
- [License](#license)
- [Contact](#contact)

## Introduction

Personal Finance Manager is a web application designed to help users manage their personal finances effectively. It offers features for tracking expenses, setting budgets, and managing financial goals. The application provides a user-friendly interface and robust security measures to ensure that users' financial data is protected.

## Features

- **Expense Tracking**: Log and categorize expenses to keep track of where your money is going.
- **Budget Management**: Set and monitor budgets for different categories to control spending.
- **Financial Goals**: Set, track, and achieve financial goals.
- **Reports and Visualizations**: Generate reports and visualizations to get insights into your financial health.
- **Third-Party Integrations**: Import transactions automatically from bank accounts and other financial services.
- **Security**: Advanced security measures including encryption and two-factor authentication (2FA).

## Technologies Used

- **Languages**: Python, JavaScript
- **Frameworks**: Flask (backend), React (frontend)
- **Database**: PostgreSQL, SQLAlchemy
- **Libraries**: Flask-RESTful, Flask-SQLAlchemy, React Router, Chart.js
- **Authentication**: Flask-Security, Flask-JWT-Extended
- **Deployment**: Docker, Heroku
- **Version Control**: Git, GitHub
- **Testing**: pytest, Jest

## Installation

### Prerequisites

- Python 3.8+
- Node.js 14+
- PostgreSQL 12+
- Docker (optional, for containerized deployment)

### Backend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/personal-finance-manager.git
   cd personal-finance-manager
   ```

2. Set up a virtual environment:

   ```bash
   python -m venv venv
   source venv/bin/activate
   ```

3. Install backend dependencies:

   ```bash
   pip install -r requirements.txt
   ```

4. Set up PostgreSQL and configure the database:

   ```bash
   createdb personal_finance_manager
   ```

5. Apply migrations:

   ```bash
   flask db upgrade
   ```

6. Run the backend server:
   ```bash
   flask run
   ```

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd client
   ```

2. Install frontend dependencies:

   ```bash
   npm install
   ```

3. Run the frontend development server:
   ```bash
   npm start
   ```

## Usage

1. Register a new account or log in with an existing account.
2. Navigate to the dashboard to get an overview of your finances.
3. Add new expenses, set budgets, and create financial goals using the respective sections.
4. View detailed reports and visualizations in the Reports section.
5. Configure settings and security options in your profile.

## API Endpoints

### Authentication

- `POST /api/auth/register`: Register a new user
- `POST /api/auth/login`: Log in an existing user

### Expenses

- `GET /api/expenses`: Get all expenses
- `POST /api/expenses`: Add a new expense
- `PUT /api/expenses/<id>`: Update an expense
- `DELETE /api/expenses/<id>`: Delete an expense

### Budgets

- `GET /api/budgets`: Get all budgets
- `POST /api/budgets`: Add a new budget
- `PUT /api/budgets/<id>`: Update a budget
- `DELETE /api/budgets/<id>`: Delete a budget

### Goals

- `GET /api/goals`: Get all goals
- `POST /api/goals`: Add a new goal
- `PUT /api/goals/<id>`: Update a goal
- `DELETE /api/goals/<id>`: Delete a goal

## Data Model

The data model includes tables for users, expenses, budgets, and goals. Below is a simplified overview:

![Data Model Diagram](https://via.placeholder.com/500x300?text=Data+Model+Diagram)

## User Stories

1. **User Registration and Login**

   - As a user, I want to register and log in to the application so that I can access my personal finance data securely.

2. **Expense Tracking**

   - As a user, I want to log my expenses with details such as description, amount, category, and date so that I can keep track of my spending.

3. **Budget Management**

   - As a user, I want to set budgets for different categories so that I can manage my spending and avoid overspending.

4. **Financial Goals**

   - As a user, I want to set and track financial goals so that I can save money for specific purposes.

5. **Reports and Visualizations**
   - As a user, I want to generate reports and view visualizations of my financial data so that I can understand my financial health better.

## Mockups

### Login View

![Login View](https://via.placeholder.com/500x300?text=Login+View)

### Dashboard View

![Dashboard View](https://via.placeholder.com/500x300?text=Dashboard+View)

### Add Expense View

![Add Expense View](https://via.placeholder.com/500x300?text=Add+Expense+View)

### View Expenses View

![View Expenses View](https://via.placeholder.com/500x300?text=View+Expenses+View)

### Set Budget View

![Set Budget View](https://via.placeholder.com/500x300?text=Set+Budget+View)

### View Budgets View

![View Budgets View](https://via.placeholder.com/500x300?text=View+Budgets+View)

### Set Goal View

![Set Goal View](https://via.placeholder.com/500x300?text=Set+Goal+View)

### View Goals View

![View Goals View](https://via.placeholder.com/500x300?text=View+Goals+View)

### Reports View

![Reports View](https://via.placeholder.com/500x300?text=Reports+View)

### Notifications View

![Notifications View](https://via.placeholder.com/500x300?text=Notifications+View)

## Challenges

### Uncovered Challenges

- **Complexity of Financial Calculations**: Handling various edge cases such as recurring expenses, variable income, and currency conversions required additional research and time.
- **Data Privacy and Security**: Implementing robust encryption and secure authentication measures was more complex than anticipated.
- **User Experience Design**: Designing an intuitive interface for users with varying levels of financial literacy required multiple iterations and user feedback.

### Adaptations

- Adopted an iterative development model to manage complexity.
- Prioritized security by allocating additional time and resources to implement and test security measures.
- Incorporated continuous user feedback to refine the user interface.

### Unexpected Non-Technical Challenges

- **Team Coordination**: Ensuring effective communication and coordination with remote team members.
- **Balancing Commitments**: Managing time effectively between project work and other academic or personal commitments.
- **Access to Real-World Data**: Creating realistic mock data for testing purposes.

## Collaboration

Although I am working on this project individually, I have actively sought help and guidance from peers, mentors, and online communities.

- **Mentorship**: Regular feedback sessions with mentors provided valuable direction and insight.
- **Peer Collaboration**: Exchanged ideas, reviewed code, and provided mutual support with fellow students and peers.
- **Online Communities**: Utilized forums such as Stack Overflow and GitHub to seek help and gain insights.
- **Academic Resources**: Leveraged resources provided by my educational institution, including libraries, online databases, and software tools.

## Progress

**Progress Rating**: 7 out of 10

**Measurement**:

- Completion of planned tasks
- Milestone achievements
- Code quality and testing results
- User feedback integration
- Feature implementation status

**Assessment**:

- On track for completion with some adjustments.
- Key milestones are being met, and risks are being effectively managed.
- Continued focus on remaining features, user testing, and final testing phases will ensure successful completion.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

For any questions or feedback, please contact:

- **Name**: Hamza Husein
- **Email**: [husham35@gmail.com](husham35@gmail.com)
- **GitHub**: [https://github.com/husham35/](https://github.com/husham35/)

Thank you for your interest in the Personal Finance Manager project!
