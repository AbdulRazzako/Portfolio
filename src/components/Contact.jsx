import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-100 py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl text-center font-bold text-gray-800">Contact Me</h2>
        <div className="max-w-xl mx-auto mt-10 text-center">
          <p className="text-xl text-gray-600 mb-4">
            Feel free to reach out to me via any of the following methods:
          </p>

          <div className="bg-gray-800 p-6 rounded-lg shadow-md text-left">
            <p className="text-lg">
              <strong>Email:</strong> <a href="mailto:mabdulrazzak02@gmail.com" className="text-blue-500 hover:underline">mabdulrazzak02@gmail.com</a>
            </p>
            <p className="text-lg mt-4">
              <strong>Phone:</strong> <a href="tel:+917995920642" className="text-blue-500 hover:underline">+917995920642</a>
            </p>
            <p className="text-lg mt-4">
              <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/mohammed-abdul-razzak/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">linkedin.com/in/mohammed-abdul-razzak/</a>
            </p>
            <p className="text-lg mt-4">
              <strong>Location:</strong> Hyderabad, India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;;