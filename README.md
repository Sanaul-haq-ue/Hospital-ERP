# Clinic Management System

A modern **single-clinic management system** built with Laravel REST API and React. The system is designed to manage doctors, patients, appointments, consultations, prescriptions, medical records, billing, payments, and reports from one centralized platform.

## Technology Stack

### Backend

* Laravel
* PHP
* Laravel Sanctum
* MySQL
* REST API

### Frontend

* React
* React Router
* JavaScript
* Bootstrap
* Material Symbols

### Development Tools

* Composer
* NPM
* Vite
* Git / GitHub

## Main Modules

* Users & Roles
* Departments
* Specializations
* Sub-specializations
* Doctors
* Doctor Schedule
* Patients
* Appointments
* Check-in & Queue
* Consultation
* Prescriptions
* Medicine Master
* Medical Records
* Billing & Payments
* Reports

## Key Features

* Secure authentication using Laravel Sanctum
* Dynamic role and permission management
* Admin-controlled user and access management
* Doctor and schedule management
* Patient management
* Appointment management
* Walk-in patient support
* Check-in and queue management
* Consultation management
* Prescription management
* Medicine master
* Patient medical history
* Billing and payment management
* Advance, half, full, and due payment support
* Outstanding balance tracking
* Clinic medicine sales through billing
* Reports and management information
* Responsive user interface
* Light and dark mode support

## Role & Permission Management

The system does not use a fixed list of roles.

**Admin can create, update, activate, deactivate, and manage roles and assign appropriate permissions according to the clinic's requirements.**

Permissions are database-driven, allowing access control to be managed without hardcoding roles into the application.

## Architecture

The project follows a separate frontend and backend architecture:

```text
React Frontend
      │
      │ REST API
      ▼
Laravel Backend
      │
      ▼
MySQL Database
```

## Project Status

🚧 **Currently under development**

The project is being developed module by module with a focus on clean architecture, secure API development, reusable components, responsive UI, and maintainable code.

## Development Goals

* Build a clean and maintainable clinic management system
* Develop secure and reliable REST APIs
* Implement flexible role-based access control
* Maintain accurate clinical and administrative records
* Provide a responsive and user-friendly interface
* Keep the system simple and suitable for a single clinic

## License

This project is currently intended for development and educational purposes.
