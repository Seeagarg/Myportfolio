"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Crew Rentals",
    description: "Crew-Rental Store simplifies project assistance by offering affordable skilled labor, contractors, and engineers. Localized services and an AI-powered Chat Bot provide instant answers for building and construction inquiries.",
    image: "/images/projects/crewRentals.png",
    tag: ["All", "React"],
    gitUrl: "https://github.com/Seeagarg/Rental_Rack",
    previewUrl: "https://crew-rentals-frontend.vercel.app/",
  },
  {
    id: 2,
    title: "Fast Fleet",
    description: "Fast Fleet is a User-friendly interface for hassle-free ride booking, real-time driver tracking, and efficient transportation management. Ideal for individuals, families, and corporate clients.",
    image: "/images/projects/FastFleet.png",
    tag: ["All", "React"],
    gitUrl: "https://github.com/Seeagarg/TransportSystem",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Food Delivery Website",
    description: "This Project provides various food items which you can select and add to cart.",
    image: "/images/projects/fooddelivery.png",
    tag: ["All", "React"],
    gitUrl: "https://github.com/Seeagarg/Food__Delivery",
    previewUrl: "https://food-delivery-front-end-gamma.vercel.app/login",
  },
  {
    id: 4,
    title: "Prime Flicks",
    description: "This is a movie website clone gives us the data of different category of movies.",
    image: "/images/projects/movie.png",
    tag: ["All", "React"],
    gitUrl: "https://github.com/Seeagarg/InternVisiontrek_movie_website",
    previewUrl: "https://prime-flicks.vercel.app/",
  },
  {
    id: 5,
    title: "Project During Internship",
    description: "This project is the replication of company's existing project made during my Internship.",
    image: "/images/projects/intern.png",
    tag: ["All", "React"],
    gitUrl: "https://github.com/Seeagarg/deploy-react-ims",
    previewUrl: "https://seeagarg.github.io/deploy-react-ims/",
  },
  {
  id: 6,
  title: "News Stack",
  description: "This is a React-based News Application that delivers real-time headlines across various categories like Technology, Business, Sports, and Entertainment. It fetches news via API and presents them in a clean, responsive UI with category-wise filtering and search functionality.",
  image: "/images/projects/image.png",
  tag: ["All", "React"],
  gitUrl: "https://github.com/Seeagarg/newsapp",
  previewUrl: "https://news-app-sand-chi.vercel.app/",
},
{
    id: 7,
    title: "Tic Tac Toe",
    description: "This is my First Live Project at Visiontrek Communication.It is a Classic 2-player game. Strategically place Xs and Os to create a winning line on a 3x3 or 5x5 or 7x7 grid.",
    image: "/images/projects/TicTacToe.png",
    tag: ["All", "React"],
    gitUrl: "https://github.com/Seeagarg/TicTacToe-5-7",
    previewUrl: "https://www.tictac.promotrking.com/",
  },
  
  
  {
    id: 8,
    title: "TextUtills",
    description: "It Provides an User Interface for Converting text into Uppercase or LowerCase or to remove spaces from the text.",
    image: "/images/projects/TextUtills.png",
    tag: ["All", "React"],
    gitUrl: "https://github.com/Seeagarg/textutils",
    previewUrl: "https://textutils-bmnz.vercel.app/",
  },
  {
    id: 9,
    title: "Todos List",
    description: "You can create a List of work you want to do.",
    image: "/images/projects/TodosList.png",
    tag: ["All", "React"],
    gitUrl: "https://github.com/Seeagarg/textutils",
    previewUrl: "/",
  },
  {
    id: 10,
    title: "Temperature Converter",
    description: "It provides a user Interface to convert temperature from kelvin to celcius or from celcius to kelvin.",
    image: "/images/projects/temp_conv.png",
    tag: ["All", "Html"],
    gitUrl: "https://github.com/Seeagarg/CodeAlpha_TemperatureConverter",
    previewUrl: "https://seeagarg.github.io/CodeAlpha_TemperatureConverter/",
  },
  {
    id: 11,
    title: "Background Generator",
    description: "By inputting Two Colors a Background is generated and css for that is shown.",
    image: "/images/projects/back_gen.png",
    tag: ["All", "Html"],
    gitUrl: "https://github.com/Seeagarg/CodeAlpha_BackgroundGenerator",
    previewUrl: "https://seeagarg.github.io/CodeAlpha_BackgroundGenerator/",
  },
  {
    id: 12,
    title: "Personal Portfolio",
    description: "This is My Personal Portfolio Website using Next JS.",
    image: "/images/projects/portfolio.png",
    tag: ["All", "Next"],
    gitUrl: "https://github.com/Seeagarg/Myportfolio",
    previewUrl: "https://myportfolio-s5os-git-main-seeagarg0203gmailcoms-projects.vercel.app/",
  },
  
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="React"
          isSelected={tag === "React"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Html"
          isSelected={tag === "Html"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Next"
          isSelected={tag === "Next"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
