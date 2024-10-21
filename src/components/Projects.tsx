import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Project 1',
    description: 'A brief description of Project 1.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHdlYnNpdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    liveLink: '#',
    githubLink: '#',
  },
  {
    title: 'Project 2',
    description: 'A brief description of Project 2.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdlYnNpdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    liveLink: '#',
    githubLink: '#',
  },
  {
    title: 'Project 3',
    description: 'A brief description of Project 3.',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlYnNpdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    liveLink: '#',
    githubLink: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="glass-effect rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex justify-between">
                  <a href={project.liveLink} className="text-gray-700 hover:text-gray-900 transition-colors duration-300 flex items-center">
                    <ExternalLink size={18} className="mr-1" /> Live Demo
                  </a>
                  <a href={project.githubLink} className="text-gray-700 hover:text-gray-900 transition-colors duration-300 flex items-center">
                    <Github size={18} className="mr-1" /> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;