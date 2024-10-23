import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-between glass-effect p-8 rounded-lg">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src=""
              alt="Your Name"
              className="rounded-lg shadow-lg w-full max-w-md mx-auto"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-gray-700 mb-4">
            I'm Abdulrahman Sadiq, a passionate software developer and product manager with a strong background in creating impactful, user-focused applications. My journey in tech has involved working on full-stack projects and leading diverse teams.
            </p>
            <p className="text-gray-700 mb-4">
            My expertise spans HTML, CSS, JavaScript, React, and additional modern web technologies. I thrive on learning new skills, staying up-to-date with AI and machine learning advancements, and using my technical abilities to drive meaningful change.
            </p>
            <p className="text-gray-700">
            Outside of work, I enjoy flying drones, running marathons, exploring music, indulging in Nigerian cuisine, volunteering, rock climbing, and playing basketball.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;