import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-between glass-effect p-8 rounded-lg">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="Your Name"
              className="rounded-lg shadow-lg w-full max-w-md mx-auto"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-gray-700 mb-4">
              I'm a passionate web developer and designer with a keen eye for creating beautiful, functional websites. With years of experience in the industry, I specialize in crafting user-centric designs and implementing them with clean, efficient code.
            </p>
            <p className="text-gray-700 mb-4">
              My expertise includes HTML, CSS, JavaScript, React, and various other modern web technologies. I'm always eager to learn and stay up-to-date with the latest trends in web development.
            </p>
            <p className="text-gray-700">
              When I'm not coding, you can find me exploring nature, reading tech blogs, or experimenting with new design concepts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;