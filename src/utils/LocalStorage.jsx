const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Update Website Banner",
        taskDescription: "Replace the homepage banner with the latest campaign.",
        taskDate: "2026-09-16",
        category: "Design"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Fix Login Button",
        taskDescription: "Resolve the button alignment issue on mobile.",
        taskDate: "2026-09-18",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Email Newsletter",
        taskDescription: "Send September newsletter to subscribers.",
        taskDate: "2026-09-10",
        category: "Marketing"
      }
    ]
  },

  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "API Testing",
        taskDescription: "Test user authentication APIs.",
        taskDate: "2026-09-17",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Database Backup",
        taskDescription: "Take a weekly database backup.",
        taskDate: "2026-09-12",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Payment Integration",
        taskDescription: "Integrate payment gateway sandbox.",
        taskDate: "2026-09-09",
        category: "Backend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Bug Review",
        taskDescription: "Review reported bugs from QA.",
        taskDate: "2026-09-19",
        category: "QA"
      }
    ]
  },

  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Dashboard",
        taskDescription: "Develop employee dashboard UI.",
        taskDate: "2026-09-20",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "CSS Cleanup",
        taskDescription: "Remove unused CSS classes.",
        taskDate: "2026-09-11",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy Build",
        taskDescription: "Deploy production build to server.",
        taskDate: "2026-09-08",
        category: "Deployment"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Accessibility Check",
        taskDescription: "Improve accessibility score.",
        taskDate: "2026-09-21",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Icons",
        taskDescription: "Replace outdated SVG icons.",
        taskDate: "2026-09-13",
        category: "Design"
      }
    ]
  },

  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write Documentation",
        taskDescription: "Document the authentication flow.",
        taskDate: "2026-09-22",
        category: "Documentation"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Code Review",
        taskDescription: "Review teammate's pull request.",
        taskDate: "2026-09-14",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Optimize Images",
        taskDescription: "Compress website assets.",
        taskDate: "2026-09-23",
        category: "Performance"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Server Monitoring",
        taskDescription: "Configure monitoring alerts.",
        taskDate: "2026-09-07",
        category: "DevOps"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Git Cleanup",
        taskDescription: "Delete merged branches.",
        taskDate: "2026-09-06",
        category: "Git"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Performance Audit",
        taskDescription: "Run Lighthouse audit.",
        taskDate: "2026-09-24",
        category: "Performance"
      }
    ]
  },

  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Build Profile Page",
        taskDescription: "Create user profile page in React.",
        taskDate: "2026-09-25",
        category: "Frontend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Connect API",
        taskDescription: "Connect profile page to backend.",
        taskDate: "2026-09-26",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Unit Testing",
        taskDescription: "Write Jest tests.",
        taskDate: "2026-09-15",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Fix CORS Error",
        taskDescription: "Resolve CORS issue on API.",
        taskDate: "2026-09-09",
        category: "Backend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Responsive Layout",
        taskDescription: "Improve tablet responsiveness.",
        taskDate: "2026-09-27",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Dependencies",
        taskDescription: "Upgrade project packages.",
        taskDate: "2026-09-05",
        category: "Maintenance"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Dark Mode",
        taskDescription: "Implement dark mode toggle.",
        taskDate: "2026-09-28",
        category: "Frontend"
      }
    ]
  }
];

const admin = [
  {
    id: 101,
    email: "admin@example.com",
    password: "123"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employeesData = JSON.parse(localStorage.getItem('employees'));
  const adminData = JSON.parse(localStorage.getItem('admin'));
  return { employees: employeesData, admin: adminData };
}