import React from "react";

const Home = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center bg-gray-800">
      <div className="text-center">
        <h1 className="text-6xl text-white font-bold">Hi, I'm Mohammed Abdul Razzak</h1>
        <p className="text-xl text-gray-400 mt-4">Software Engineer</p>
        <a href="#projects" className="mt-8 inline-block bg-blue-500 text-white px-6 py-3 rounded-md">
          View My Projects
        </a>
      </div>
    </section>
  );
};

export default Home;