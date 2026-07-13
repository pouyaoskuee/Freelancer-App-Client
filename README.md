ریدمی فارسی

Deadlancer - Freelancing Platform
یک پلتفرم برای فریلنسریگ که کارفرمایان رو به فریلسنر ها متصل میکند

Overview:
Deadlancer یک پلتفرم  بصورت (Full-stack) فریلنسینگ است که در آن کارفرمایان می‌توانند پروژه تعریف کنند و فریلنسرها پیشنهادهای کاری (Proposal) خود را ارسال نمایند.

اپلیکیشن شامل سه داشبورد مجزا است:

*   داشبورد کارفرما
*   داشبورد فریلنسر
*   داشبورد مدیر (ادمین)

احراز هویت کاربران از طریق شماره موبایل و کد یک‌بارمصرف (OTP) انجام می‌شود. پس از ثبت‌نام، مدیر سیستم حساب کاربری را بررسی و تأیید می‌کند تا دسترسی به امکانات پلتفرم برای کاربر فعال شود.


⸻

Features
Authentication
* OTP Authentication
* User Registration
* User Login
* Cookie-based Authentication
* Access Token
* Refresh Token
* Protected Routes
  Employer
* Create Projects
* Manage Projects
* View Received Proposals
  Freelancer
* Browse Projects
* Submit Proposals
* Manage Submitted Proposals
  Admin
* User Verification
* User Management
* Platform Management
* Project Management
  General
* Responsive Design
* Search
* Filtering
* Toast Notifications
* Loading States
* Reusable Components
* Dark Mode

⸻

Tech Stack
Frontend
* React
* Vite
* Tailwind CSS v4
* React Router DOM
* Axios
* TanStack React Query
* React Hook Form
* React Hot Toast
* React Loader Spinner
* Headless UI
* React Date Picker
* React Tag Input
* Custom Hooks


Backend
بک اند پروژه بصورت جداگانه توسط شخصی دیگر توسئه داده شده و api ها در اختیار فرانت کار قرار گرفته است

⸻

Authentication Flow
Users authenticate using their mobile number.
1. Register/Login
2. Receive OTP
3. Verify OTP
4. Receive Authentication Tokens
5. Complete profile(name & role &….)
6. Administrator Approval
7. Full Platform Access

⸻

API Communication
The frontend communicates with a RESTful API using Axios.
Features include:
* Centralized API Requests
* Authentication Headers
* Cookie Support
* Error Handling
* Loading States

⸻

Routing
The application uses React Router DOM for client-side routing.
Example route structure:
/
├──
├── auth
├── complete-profile
├── not-build
├── owner
│   ├── dashboard
│   ├── projects
│   └── projects/:id
│
├── freelancer
│   ├── dashboard
│   ├── proposals
│   └── projects
│
├── admin
│   ├── dashboard
│   ├── users
│   ├── projects
│   └── proposals
│
└── *
└── 404 Not Found

⸻

Responsive Design
The application follows a Mobile-First approach and is optimized for:
* Mobile
* Desktop

⸻

Project Structure(src)
├── App.jsx
├── context
│   └── DarkMode.jsx
├── features
│   ├── admin
│   │   ├── ChangeUserStatus.jsx
│   │   ├── DashboardContainer.jsx
│   │   ├── DashboardStats.jsx
│   │   ├── UserTable.jsx
│   │   ├── useAllUsers.js
│   │   └── useChangeUserStatus.jsx
│   ├── authentication
│   │   ├── AuthContainer.jsx
│   │   ├── CheckOTPForm.jsx
│   │   ├── CompleteProfileForm.jsx
│   │   ├── LogOut.jsx
│   │   ├── SendOTPForm.jsx
│   │   ├── UserAvatar.jsx
│   │   ├── useAuthorize.js
│   │   ├── useLogOut.js
│   │   └── useUser.js
│   ├── freelancer
│   │   ├── DashboardContainer.jsx
│   │   ├── DashboardStats.jsx
│   │   ├── SubmittedProjects.jsx
│   │   ├── project
│   │   │   ├── projectsHeader.jsx
│   │   │   └── projectsTable.jsx
│   │   └── useProposal.js
│   ├── home
│   │   ├── Footer.jsx
│   │   ├── FreelancerCard.jsx
│   │   ├── HomeContainer.jsx
│   │   ├── HowWorkBox.jsx
│   │   ├── LongArow.jsx
│   │   ├── NavBar.jsx
│   │   ├── WorkBox.jsx
│   │   ├── WorkWithoutBox.jsx
│   │   └── projectCard.jsx
│   ├── owner
│   │   ├── DashboardContainer.jsx
│   │   └── DashboardStats.jsx
│   ├── project
│   │   ├── ProjectHeader.jsx
│   │   ├── ProposalsTable.jsx
│   │   ├── singleProposal.jsx
│   │   ├── useChangeProposalStatus.js
│   │   └── useProject.js
│   ├── projects
│   │   ├── CreateProject.jsx
│   │   ├── ProjectsTable.jsx
│   │   ├── ToggleProjectStatus.jsx
│   │   ├── useCreateProject.js
│   │   ├── useEditProject.js
│   │   ├── useOwnerProjects.js
│   │   ├── useRemoveProject.js
│   │   └── useToggleStatus.js
│   └── proposlals
│       ├── CreateProposal.jsx
│       └── useProposals.js
├── hooks
│   ├── useAllProjects.js
│   ├── useCategories.js
│   ├── useLocalStoreg.js
│   ├── useMoveBack.js
│   └── useOutSideClick.js
├── index.css
├── main.jsx
├── pages
│   ├── AdminDashboard.jsx
│   ├── Auth.jsx
│   ├── CompleteProfile.jsx
│   ├── FreelancerDashboard.jsx
│   ├── Home.jsx
│   ├── NotBuild.jsx
│   ├── NotFound.jsx
│   ├── OwnerDashboard.jsx
│   ├── Project.jsx
│   ├── Projects.jsx
│   ├── Proposals.jsx
│   └── Users.jsx
├── services
│   ├── authService.js
│   ├── categoryServices.js
│   ├── httpService.js
│   ├── projectService.js
│   └── proposalsService.js
├── ui
│   ├── AppLayout.jsx
│   ├── ButtonDanger.jsx
│   ├── ButtonPrimary.jsx
│   ├── ButtonSecondary.jsx
│   ├── ConfirmDelete.jsx
│   ├── DarkModeToggle.jsx
│   ├── DashboardHeader.jsx
│   ├── DatePickerField.jsx
│   ├── Empty.jsx
│   ├── Filter.jsx
│   ├── FilterDropDown.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── HeaderMenu.jsx
│   ├── Input.jsx
│   ├── Loading.jsx
│   ├── Modal.jsx
│   ├── NavBarMenu.jsx
│   ├── NavigateList.jsx
│   ├── RadioInput.jsx
│   ├── Select.jsx
│   ├── SideBar.jsx
│   ├── StatBox.jsx
│   └── protectedRoute.jsx
└── utils
├── toLocalDateShort.js
├── toPersianNumber.js
└── truncateText.js

⸻

Installation
Fronend:
Clone the repository
git clone https://github.com/pouyaoskuee/Freelancer-App-Client.git
Install dependencies
npm install
Set environment variables
.env.development/production.local
Run development server
npm run dev

Backend:
Clone the repository
git clone https://github.com/pouyaoskuee/Freelancer-App-Server.git
Install dependencies
npm install
Install mongodb:
https://www.mongodb.com
Run mongodb database:
mongod --dbpath ~/data/db
Set environment variables
.env.development/production.local
Run development server
npm run dev


⸻

Environment Variables
VITE_BASE_URL=
In our project, it is: http://localhost:9000/api
⸻

Screenshots
Add screenshots inside:
docs/screenshots/
Example:
* Home
* Login
* OTP Verification
* Employer Dashboard
* Freelancer Dashboard
* Admin Dashboard
* Project Details

⸻

Future Improvements
* Internationalization (i18n)
* Unit Testing
* End-to-End Testing
* Login with email

⸻

Deployment
Frontend
GitHub:
Demo:


⸻

License
This project is intended for educational and portfolio purposes.

