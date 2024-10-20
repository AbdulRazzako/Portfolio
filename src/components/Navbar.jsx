import React from "react";

const Navbar = ()=>{
    return(
        <nav className="bg-grey-900 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <a href="#home" className="text-2xl font-bold">My Portfolio</a>
            </div>
             <div>
          <a href="#about" className="px-4 hover:text-blue-500">About</a>
          <a href="#projects" className="px-4 hover:text-blue-500">Projects</a>
          <a href="#contact" className="px-4 hover:text-blue-500">Contact</a>
        </div>

        </nav>
    )
}
export default Navbar;