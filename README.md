# Deadlancer - Freelancing Platform

```{=html}
<p align="center">
```
`<img src="https://raw.githubusercontent.com/pouyaoskuee/portfolio-asset/main/deadlancer/homeDesktopDark2.png" width="100%">`{=html}
```{=html}
</p>
```
```{=html}
<p align="center">
```
A modern full-stack freelancing platform connecting employers with
freelancers through a secure and responsive web application.
```{=html}
</p>
```
```{=html}
<p align="center">
```
`<a href="https://deadlancer.ir">`{=html}🌐 Live Demo`</a>`{=html} •
`<a href="https://github.com/pouyaoskuee/Freelancer-App-Client">`{=html}Frontend`</a>`{=html}
•
`<a href="https://github.com/pouyaoskuee/Freelancer-App-Server">`{=html}Backend`</a>`{=html}
```{=html}
</p>
```
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-v4-38BDF8?logo=tailwindcss)
![React_Query](https://img.shields.io/badge/TanStack_Query-FF4154)
![License](https://img.shields.io/badge/License-Portfolio-success)

------------------------------------------------------------------------

## Overview

Deadlancer is a full-stack freelancing platform that connects employers
with freelancers. Employers can create projects while freelancers browse
projects and submit proposals. The platform provides three independent
dashboards:

-   Employer Dashboard
-   Freelancer Dashboard
-   Admin Dashboard

Users authenticate using OTP verification via mobile number. After
completing their profile, an administrator reviews and approves the
account before granting full access.

------------------------------------------------------------------------

## Highlights

-   OTP Authentication
-   JWT Authentication
-   Cookie-based Authentication
-   Role-based Dashboards
-   Protected Routes
-   Search & Filtering
-   Responsive (Mobile First)
-   Dark Mode
-   REST API Integration
-   Reusable Components
-   Custom Hooks

## Tech Stack

### Frontend

-   React
-   Vite
-   Tailwind CSS v4
-   React Router DOM
-   Axios
-   TanStack React Query
-   React Hook Form
-   React Hot Toast
-   React Loader Spinner
-   Headless UI
-   React Date Picker
-   React Tag Input

### Backend

Backend implementation is maintained separately. This repository focuses
on frontend development and REST API integration.

## Authentication Flow

1.  Register / Login
2.  Receive OTP
3.  Verify OTP
4.  Receive JWT Tokens
5.  Complete Profile
6.  Administrator Approval
7.  Access Platform

## API Communication

-   Axios Instance
-   RESTful API Integration
-   Cookie-based Authentication
-   withCredentials Support
-   Centralized API Configuration
-   Error Handling
-   Loading States

## Routing

``` text
/
├── auth
├── complete-profile
├── owner
├── freelancer
├── admin
└── *
```

## Project Structure

``` text
src/
├── features/
├── hooks/
├── pages/
├── services/
├── ui/
├── utils/
└── context/
```

## My Responsibilities

-   Complete Frontend Development
-   Responsive UI
-   API Integration
-   OTP Authentication Flow
-   Protected Routes
-   State Management
-   Reusable Components
-   Custom Hooks
-   Error & Loading Handling

## Installation

``` bash
git clone https://github.com/pouyaoskuee/Freelancer-App-Client.git
npm install
npm run dev
```

Create `.env.development.local`:

``` env
VITE_BASE_URL=http://localhost:9000/api
```

Backend: https://github.com/pouyaoskuee/Freelancer-App-Server

## Screenshots

See the portfolio assets repository:
https://github.com/pouyaoskuee/portfolio-asset/tree/main/deadlancer


## Future Improvements

-   Internationalization (i18n)
-   Unit Testing
-   End-to-End Testing
-   Email Authentication

## License

This project is intended for educational and portfolio purposes.
