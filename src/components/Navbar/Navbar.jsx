import React from "react";
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";


const NavbarMenu = [
    {
        id: 1,
        title: "Home",
        path: "/"
    },
    {
        id: 2,
        title: "Service",
        link: "#"
    },
    {
        id: 3,
        title: "About Us",
        link: "#",
      },
      {
        id: 4,
        title: "Our Team",
        link: "#",
      },
      {
        id: 5,
        title: "Contact Us",
        link: "#",
      },
]

const Navbar = () => {
    return (
        <nav className="relative z-20">
            <motion.div
            initial={{ opacity: 0, y:-50 }}
            animate={{ opacity: 1, y:0 }}
            className="flex justify-between items-center py-10 container"
            >
            
            {/* Logo section */}
            <div>
                <h1 className="font-bold text-2xl">The Coding Journey</h1>
            </div>

            {/* Menu Section */}
            <div className="hidden lg:block">
                <ul className="flex items-center gap-3">
                    {NavbarMenu.map((menu) => (
                       <li key={menu.id}>
                         <a 
                        className="inline-block py-3 px-2 relative group hover:text-secondary"
                        href={menu.path}
                        >
                            <div className="w-2 h-2 bg-secondary absolute mt-4 rounded-full left-1/2 -translate-x-1/2 bottom-0 group-hover:block hidden"></div>
                        {menu.title}
                        </a>
                       </li>
                    ))}
                     <button className="primary-btn">Sign In</button>
                </ul>
            </div>

            {/* Mobile Humburger Menu Section */}
            <div className="lg:hidden">
                <IoMdMenu className="text-4xl" />
            </div>
            </motion.div>
        </nav>
    )
}

export default Navbar;