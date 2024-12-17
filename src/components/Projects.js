import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CircleX, SquareArrowUpRight } from "lucide-react";

const projectsData = [
  {
    "id": 1,
    "title": "Recipeeze",
    "description": "Recipeeze is an innovative recipe-sharing social platform designed to bring food lovers together. This web application allows users to share their culinary creations, explore a variety of recipes, and interact with a community of like-minded individuals. Whether you're an amateur cook or a seasoned chef, Recipeeze provides a space for anyone to showcase their culinary skills, get inspired, and connect with others.",
    "key_features": [
      {
        "title": "Recipe Posting & Sharing",
        "description": "Users can easily create and post their own recipes, complete with detailed descriptions, ingredients, and instructions. The platform supports rich media, allowing users to add images and videos to make their recipes more engaging and visually appealing."
      },
      {
        "title": "Recipe Discovery & Interaction",
        "description": "Users can browse a wide variety of recipes posted by others. Recipes can be liked, commented on, and shared, fostering a social environment where users can exchange tips, ideas, and feedback."
      },
      {
        "title": "Follow Users",
        "description": "Just like social media platforms, users can follow other recipe creators to stay updated with their latest posts. This feature encourages community building and makes it easier for users to discover new content from their favorite chefs."
      },
      {
        "title": "Recipe Details & Ingredients",
        "description": "Each recipe includes a comprehensive list of ingredients along with step-by-step instructions. Users can also download the ingredient list to use while cooking, making meal prep more convenient."
      },
      {
        "title": "Favorites & Saved Recipes",
        "description": "Users can save their favorite recipes for quick access later. Whether it’s for inspiration or a future meal, saving recipes helps keep the best ideas right at your fingertips."
      },
      {
        "title": "Badges & Achievements",
        "description": "To encourage engagement, users can earn badges based on their activity on the platform. For example, posting a certain number of recipes or receiving a certain number of likes can unlock badges, motivating users to continue contributing to the community."
      },
      {
        "title": "Interactive & Engaging UI",
        "description": "The platform features an intuitive, user-friendly interface that makes browsing, posting, and interacting with recipes easy and enjoyable."
      },
    ],
    "why_recipeeze": [
      {
        "title": "A Social Community for Foodies",
        "description": "More than just a recipe-sharing app, Recipeeze is a social space where users can connect over their love of food. Whether you’re seeking new meal ideas, tips on perfecting a recipe, or just looking for inspiration, this platform has it all."
      },
      {
        "title": "Personalized Experience",
        "description": "With features like following users, liking, commenting, and saving recipes, Recipeeze makes recipe sharing and discovering a personalized experience that adapts to each user’s preferences."
      },
      {
        "title": "Support for Aspiring Chefs",
        "description": "Whether you're a beginner or a professional chef, Recipeeze helps you build your presence online by showcasing your recipes to a large community. The badge system adds a layer of gamification, encouraging users to keep posting and sharing their culinary expertise."
      }
    ],
    "no_image" : false,  
    "fit" : false,
    "image": "https://recipeeze.vercel.app/static/media/banner.567983a17575cb12fda5.webp",
    "desc_image": "https://recipeeze.vercel.app/static/media/splash.838841d37b0dc855932c.png",
    "liveLink": "https://recipeeze.vercel.app"
  },
  {
    "id": 2,
    "title": "Service Providers Panel",
    "description": "The Service Providers Panel is a comprehensive web application designed for managing freelance work, employee attendance, daily work details, profiles, leave balances, holidays, and notifications. It provides a centralized system for both employees and administrators to track, manage, and update work details, attendance, leaves, and more. The platform also includes an admin panel to manage service providers, add notifications, manage holidays, and perform other administrative tasks.",
    "key_features": [
      {
        "title": "Freelancer Management",
        "description": "Admins can easily manage and track the work details of freelancers, including task assignments, progress tracking, and performance metrics."
      },
      {
        "title": "Attendance Tracking",
        "description": "The platform allows employees to mark attendance and sign off. Admins can track employee working hours and attendance history."
      },
      {
        "title": "Daily Work Details",
        "description": "Employees can log their daily work details, including tasks completed and time spent on each project. Admins have access to these logs for better management."
      },
      {
        "title": "Profile Management",
        "description": "Users can update their personal profiles with details such as name, contact information, work history, and more. Admins can also view and manage user profiles."
      },
      {
        "title": "Leave Management",
        "description": "Employees can request leaves and track their leave balances. Admins can approve or reject leave requests, and users can view their leave history."
      },
      {
        "title": "Notifications",
        "description": "Both users and admins can send and receive notifications related to attendance, leave requests, work updates, and other important announcements."
      },
      {
        "title": "Holiday Management",
        "description": "Admins can manage company holidays, allowing employees to know the official days off in advance."
      },
      {
        "title": "Admin Panel",
        "description": "The admin panel allows for managing service providers, viewing and editing user details, managing notifications, holidays, and performing other administrative tasks."
      }
    ],
    "why_service_providers_panel": [
      {
        "title": "Centralized Management",
        "description": "Service Providers Panel offers a centralized platform for managing freelancers, employees, and administrative tasks, streamlining operations and increasing efficiency."
      },
      {
        "title": "Comprehensive Leave and Attendance Tracking",
        "description": "The leave management and attendance tracking systems are fully integrated, allowing for real-time updates and accurate records for both users and administrators."
      },
      {
        "title": "User-Friendly Interface",
        "description": "The platform features an intuitive and easy-to-use interface, making it accessible for both freelancers and admins to perform their tasks with ease."
      },
      {
        "title": "Detailed Reports & Analytics",
        "description": "Admins can generate reports on attendance, leaves, work logs, and more to assess performance and make informed decisions."
      }
    ],
    "fit" : false,
    "no_image" : true,    
    "liveLink": "https://service-providers-panel.vercel.app"
  },
  
  {
    "id": 3,
    "title": "VDASolutions HRMS",
    "description": "VDASolutions HRMS is a comprehensive human resource management software built to streamline the management of employees, attendance, salary, payroll, departments, roles, leave balances, parking, positions, notes, complaints, and more. It provides both employees and administrators with a centralized platform for tracking, managing, and optimizing HR processes. The software includes detailed reporting, attendance tracking, payroll management, and a user-friendly admin panel for managing the system efficiently.",
    "key_features": [
      {
        "title": "Employee Management",
        "description": "Easily manage employee profiles, personal information, roles, positions, and departments. Track performance and store important documents such as resumes and contracts."
      },
      {
        "title": "Attendance & Leave Management",
        "description": "Track employee attendance, manage leave requests, and maintain accurate leave balances. Admins can approve or reject leaves, while employees can view their attendance history."
      },
      {
        "title": "Salary & Payroll Management",
        "description": "Manage salary details, generate pay slips, and handle payroll processes, ensuring timely payments. The system can also generate salary reports for administrators."
      },
      {
        "title": "Department & Role Management",
        "description": "Create and manage different departments and assign roles to employees. Track departmental performance and manage team structures."
      },
      {
        "title": "Position Tracking",
        "description": "Monitor employee positions within the organization, including promotions, transfers, and role changes. Maintain position history for reporting and analysis."
      },
      {
        "title": "Parking Management",
        "description": "Allocate parking spaces to employees and track usage. Employees can request parking slots, and admins can manage approvals and availability."
      },
      {
        "title": "Complaint Management",
        "description": "Allow employees to file complaints, track their progress, and manage resolutions. Admins can view, assign, and close complaints as part of the issue resolution process."
      },
      {
        "title": "Admin Panel",
        "description": "Admins have full control over the HRMS system, with capabilities to manage employees, view reports, and perform administrative tasks such as approving leave requests, assigning roles, and generating reports."
      }
    ],
    "why_vdasolutions_hrms": [
      {
        "title": "Centralized HR Management",
        "description": "VDASolutions HRMS centralizes all HR processes in one platform, reducing administrative burden and increasing efficiency for both HR professionals and employees."
      },
      {
        "title": "Comprehensive Reporting",
        "description": "Generate detailed reports on attendance, payroll, employee performance, complaints, and more to make data-driven decisions and streamline HR operations."
      },
      {
        "title": "Employee Empowerment",
        "description": "Employees have access to manage their profiles, track attendance, apply for leave, and view salary details, enhancing transparency and engagement."
      },
      {
        "title": "Scalable & Customizable",
        "description": "The system is flexible, allowing organizations of all sizes to tailor the platform according to their specific needs. Whether it’s managing a small team or a large organization, VDASolutions HRMS adapts."
      }
    ],
    "no_image": false,
    "image": "https://ryupunch.com/vda/assets/images/vda-logo.png",
    "desc_image": "https://ryupunch.com/vda/assets/images/vda-logo.png",
    "liveLink": "https://ryupunch.com/vda",
    "fit" : true,
    "fitcolor" : "#000034"
  },
  {
    "id": 1,
    "title": "Complaints Management System",
    "description": "A web application that allows users to register complaints, and admins to manage and assign complaints to agents. Agents can resolve complaints and update the status. Notifications are sent to the admin, user, and agent when a complaint is submitted, assigned, or resolved.",
    "key_features": [
      {
        "title": "Complaint Registration",
        "description": "Users can register complaints with relevant details, which will be logged into the system for review by the admin."
      },
      {
        "title": "Admin Dashboard",
        "description": "Admins can view all complaints, assign complaints to agents, track progress, and update complaint statuses."
      },
      {
        "title": "Agent Assignment",
        "description": "Admins can assign complaints to specific agents, who will be responsible for resolving them and updating the status."
      },
      {
        "title": "Complaint Resolution",
        "description": "Agents can update the status of complaints to 'resolved' once they have been addressed."
      },
      {
        "title": "Notification System",
        "description": "The system sends real-time notifications to the user, agent, and admin when a complaint is submitted, assigned, or resolved."
      },
      {
        "title": "Complaint History",
        "description": "All complaints are stored with detailed logs, including actions taken, resolution status, and timestamps."
      },
      {
        "title": "Role-based Access",
        "description": "Different roles (user, admin, agent) have specific access and capabilities within the system."
      }
    ],
    "why_complaints_management_system": [
      {
        "title": "Efficient Complaint Resolution",
        "description": "This system helps streamline the complaint management process, ensuring that complaints are resolved quickly and effectively by the right agent."
      },
      {
        "title": "Centralized Tracking",
        "description": "The system offers a centralized platform for tracking all complaints, making it easier to monitor progress and ensure timely resolutions."
      },
      {
        "title": "Real-Time Notifications",
        "description": "Real-time notifications ensure that all parties are informed of updates related to complaints, helping to improve communication and transparency."
      },
      {
        "title": "Improved User Satisfaction",
        "description": "By allowing users to track the status of their complaints and ensuring timely resolution, the system aims to enhance user satisfaction."
      }
    ],
    "fit": true,
    "fitcolor":"#fed7be",
    "no_image": false,
    "image" : "https://img.freepik.com/free-vector/flat-design-person-making-complain_23-2148959890.jpg",
    "liveLink": "https://complaintss.vercel.app"
  }
  
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Handle project selection
  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  // Close the bottom bar
  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  return (
    <div className="p-8 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10">Recent Projects</h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md  "
            style={{
              backgroundColor: project.fit == true ? project.fitcolor : 'white'
            }}
            onClick={() => handleProjectClick(project)}
          >
            {project.no_image == false ? (
            <img
            src={project.image}
            alt={project.title}
            className={`w-full h-48 ${project.fit === false ? "object-cover" : "object-contain"} group-hover:scale-105 transition-transform duration-300`}
          />
          
          ) :(
            <div className="w-full h-48 text-black bg-blue-200 text-4xl text-center font-bold flex items-center justify-center object-cover group-hover:scale-105 transition-transform duration-300">
              {project.title}
            </div>
          )}
            {/* Overlay */}
            <div className="absolute inset-0 bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
              <p className="text-white font-semibold text-lg">{project.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <AnimatePresence>
  {selectedProject && (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: "10px" }} // 70% visible from the bottom
      exit={{ y: "100%" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed bottom-0 left-0 w-full bg-gray-900 text-gray-300 shadow-2xl rounded-t-2xl py-6 px-12 md:px-24 h-[85%] max-h-[85%] overflow-hidden z-50"
    >
      {/* Close Button */}
      <button
        onClick={closeProjectDetails}
        className="fixed top-4 right-4 text-2xl font-bold text-white duration-300 hover:text-red-700 z-50"
      >
        <CircleX size={30}/>
      </button>

      {/* Project Details */}
      <div className="flex flex-col md:flex-row items-start gap-6 h-full overflow-y-auto">
        {/* Image */}
        {selectedProject.no_image == false ? (
          <img
          src={selectedProject.desc_image ? selectedProject.desc_image : selectedProject.image}
          alt={selectedProject.title}
          className="w-48 h-48 object-cover rounded-lg shadow-md"
        />
        ) : (
          <div className="w-48 h-48 text-black bg-blue-200 text-4xl text-center font-bold flex items-center justify-center object-cover group-hover:scale-105 transition-transform duration-300">
          {selectedProject.title}
        </div>
        )}
        {/* Text Details */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-3 flex items-center">
            {selectedProject.title}

            <a
            href={selectedProject.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className=" text-blue-700 flex items-center font-medium py-2 px-4 rounded hover:underline text-sm transition-colors"
          >
         Live Link <SquareArrowUpRight size={15} className="text-blue-600 ml-2" />
          </a>
          </h2>
          <p className="text-gray-500 mb-4 text-lg">
            {selectedProject.description}
          </p>
          {selectedProject.key_features && selectedProject.key_features.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mt-4 mb-2">Key Features:</h3>
              <ul className="list-disc pl-5">
                {selectedProject.key_features.map((feature, index) => (
                  <li key={index} className="text-gray-300 text-md">
                    <strong>{feature.title}:</strong> <span className="text-gray-500">{feature.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>

    </div>
  );
}
