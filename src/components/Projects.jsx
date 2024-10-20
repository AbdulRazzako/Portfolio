import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-200 py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl text-center font-bold text-gray-800">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 ml-10 mr-10">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">Store side eCommerce App</h3>
            <p className="mt-4 text-gray-600">Developed a cross-platform eCommerce app with Flutter, featuring POS, order management, barcode scanning, and Google Maps integration for delivery tracking and store locators.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">Delivery Boy App</h3>
            <p className="mt-4 text-gray-600">Developed with Flutter, this app enables delivery personnel to track orders, manage pickups, and cancel deliveries effortlessly. Its user-friendly interface ensures efficient and timely service.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">Client Side eCommerce App</h3>
            <p className="mt-4 text-gray-600">Developed with Flutter, this app allows customers to select stores and place orders seamlessly, providing an intuitive shopping experience.</p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Projects;