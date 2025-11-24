# Node School Management System

A comprehensive Node.js application for managing school operations, including student records, teacher management, class scheduling, and administrative tasks.

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Project Structure](#project-structure)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## 🎯 About

Node School is a modern school management system built with Node.js that helps educational institutions streamline their administrative processes. The system provides a centralized platform for managing students, teachers, classes, attendance, grades, and other school-related activities.

## ✨ Features

- **Student Management**
  - Student registration and profile management
  - Student attendance tracking
  - Grade and report card management
  - Student enrollment in classes

- **Teacher Management**
  - Teacher registration and profile management
  - Teacher assignment to classes and subjects
  - Teacher attendance tracking

- **Class Management**
  - Class creation and scheduling
  - Subject management
  - Timetable generation
  - Classroom assignment

- **Administrative Features**
  - User authentication and authorization
  - Role-based access control (Admin, Teacher, Student)
  - Dashboard with analytics and reports
  - Notification system

- **Parent Portal**
  - View student progress and grades
  - Communication with teachers
  - Access to attendance records

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB / PostgreSQL / MySQL
- **Authentication:** JWT (JSON Web Tokens)
- **Validation:** Express Validator
- **API Documentation:** Swagger / OpenAPI
- **Testing:** Jest / Mocha / Chai
- **Logging:** Winston / Morgan

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14.x or higher)
- npm (v6.x or higher) or yarn
- MongoDB / PostgreSQL / MySQL (depending on your database choice)
- Git

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/habibullah-26/node-school.git
   cd node-school
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add the following:
   ```env
   # Server Configuration
   PORT=3000
   NODE_ENV=development

   # Database Configuration
   DB_TYPE=mongodb
   DB_HOST=localhost
   DB_PORT=27017
   DB_NAME=school_management
   DB_USER=your_db_user
   DB_PASSWORD=your_db_password

   # JWT Configuration
   JWT_SECRET=your_jwt_secret_key
   JWT_EXPIRE=7d

   # Email Configuration (Optional)
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASSWORD=your_email_password
   ```

4. **Set up the database**
   ```bash
   # For MongoDB
   npm run db:seed

   # For SQL databases
   npm run db:migrate
   npm run db:seed
   ```

5. **Start the application**
   ```bash
   # Development mode
   npm run dev

   # Production mode
   npm start
   ```

## ⚙️ Configuration

The application can be configured using environment variables. Use the environment variables shown in the Installation section above (step 3) and adjust the values according to your environment.

### Database Options

- **MongoDB:** Set `DB_TYPE=mongodb` and configure MongoDB connection string
- **PostgreSQL:** Set `DB_TYPE=postgresql` and configure PostgreSQL credentials
- **MySQL:** Set `DB_TYPE=mysql` and configure MySQL credentials

## 📖 Usage

### Running the Application

```bash
# Development mode with hot reload
npm run dev

# Production mode
npm start

# Run tests
npm test

# Run linter
npm run lint

# Build for production
npm run build
```

### Default Admin Credentials

After seeding the database, use these credentials to log in:

- **Email:** admin@school.com
- **Password:** admin123

**⚠️ Important:** Change the default password after first login!

## 📚 API Documentation

Once the server is running, access the API documentation at:

```
http://localhost:3000/api-docs
```

### Main API Endpoints

#### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `POST /api/auth/forgot-password` - Request password reset
- `PUT /api/auth/reset-password/:token` - Reset password

#### Students
- `GET /api/students` - Get all students
- `GET /api/students/:id` - Get student by ID
- `POST /api/students` - Create new student
- `PUT /api/students/:id` - Update student
- `DELETE /api/students/:id` - Delete student

#### Teachers
- `GET /api/teachers` - Get all teachers
- `GET /api/teachers/:id` - Get teacher by ID
- `POST /api/teachers` - Create new teacher
- `PUT /api/teachers/:id` - Update teacher
- `DELETE /api/teachers/:id` - Delete teacher

#### Classes
- `GET /api/classes` - Get all classes
- `GET /api/classes/:id` - Get class by ID
- `POST /api/classes` - Create new class
- `PUT /api/classes/:id` - Update class
- `DELETE /api/classes/:id` - Delete class

#### Attendance
- `GET /api/attendance` - Get attendance records
- `POST /api/attendance` - Mark attendance
- `GET /api/attendance/student/:id` - Get student attendance
- `GET /api/attendance/class/:id` - Get class attendance

#### Grades
- `GET /api/grades` - Get all grades
- `POST /api/grades` - Add grade
- `PUT /api/grades/:id` - Update grade
- `GET /api/grades/student/:id` - Get student grades

## 📁 Project Structure

```
node-school/
├── src/
│   ├── config/          # Configuration files
│   ├── controllers/     # Route controllers
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   ├── middleware/      # Custom middleware
│   ├── services/        # Business logic
│   ├── utils/           # Utility functions
│   └── validators/      # Input validation
├── tests/               # Test files
├── docs/                # Documentation
├── public/              # Static files
├── .env                 # Environment variables (create from step 3 in Installation section)
├── .gitignore          # Git ignore file
├── package.json        # Project dependencies
├── README.md           # This file
└── server.js           # Application entry point
```

## 🧪 Testing

Run the test suite:

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch

# Run specific test file
npm test -- tests/student.test.js
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

### Coding Standards

- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Run linter before committing: `npm run lint`

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

**Project Maintainer:** Habibullah

- Email: engineer.habib26@gmail.com
- GitHub: [@habibullah-26](https://github.com/habibullah-26)
- Project Link: [https://github.com/habibullah-26/node-school](https://github.com/habibullah-26/node-school)

## 🙏 Acknowledgments

- Thanks to all contributors who have helped shape this project
- Inspired by modern school management systems
- Built with ❤️ using Node.js

---

**Note:** This project is under active development. Features and documentation may change.