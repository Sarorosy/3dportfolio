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
    "image": "https://recipeeze.vercel.app/static/media/banner.567983a17575cb12fda5.webp",
    "desc_image": "https://recipeeze.vercel.app/static/media/splash.838841d37b0dc855932c.png",
    "liveLink": "https://recipeeze.vercel.app"
  },
  {
    id: 2,
    title: "Project Two",
    description: "This is the second project description.",
    image: "https://via.placeholder.com/400",
    liveLink: "https://example.com/project-two",
  },
  {
    id: 3,
    title: "Project Three",
    description: "This is the third project description.",
    image: "https://via.placeholder.com/400",
    liveLink: "https://example.com/project-three",
  },
  {
    id: 4,
    title: "Project Four",
    description: "This is the fourth project description.",
    image: "https://via.placeholder.com/400",
    liveLink: "https://example.com/project-four",
  },
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
            className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md bg-white"
            onClick={() => handleProjectClick(project)}
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
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
        <CircleX />
      </button>

      {/* Project Details */}
      <div className="flex flex-col md:flex-row items-start gap-6 h-full overflow-y-auto">
        {/* Image */}
        <img
          src={selectedProject.desc_image ? selectedProject.desc_image : selectedProject.image}
          alt={selectedProject.title}
          className="w-48 h-48 object-cover rounded-lg shadow-md"
        />
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
