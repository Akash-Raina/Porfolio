import { useState } from "react";
import { Link } from "react-router-dom";
import { GoHome, GoProjectSymlink } from "react-icons/go";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { PiLineVerticalThin } from "react-icons/pi";

export const NavbarUI = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const navbarItems = [
    { name: "Home", icon: <GoHome />, path: '/' },
    { name: "Projects", icon: <GoProjectSymlink />, path: '/projects' },
    { name: "Space", icon: <PiLineVerticalThin className="text-white/30" size={20} /> },
    { name: 'Github', icon: <FaGithub />, path: 'https://github.com/Akash-Raina' },
    { name: 'LinkedIn', icon: <FaLinkedin />, path: 'https://www.linkedin.com/in/akash-rainaa/' },
    { name: 'twitter', icon: <FaXTwitter />, path: 'https://x.com/rainahaina' },
    { name: 'email', icon: <MdOutlineEmail />, path: 'mailto:kevinraina279@gmail.com' }
  ];

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex justify-center items-center 
      rounded-3xl p-2 border border-white/20 bg-gradient-to-br 
      from-white/10 via-black/20 to-black/40 
      w-[280px] hover:w-[340px] transition-all duration-500 ease-in-out h-14">
      
      {navbarItems.map((item, index) => {
        const isSpace = item.name === "Space";
        const isExternal = item.path?.startsWith("http") || item.path?.startsWith("mailto");

        let px = "px-2";
        let bg = "";

        if (!isSpace && hoveredIndex !== null) {
          const distance = Math.abs(index - hoveredIndex);
          if (distance === 0) {
            px = "px-5";
            bg = "bg-white/10";
          } else if (distance === 1) {
            px = "px-4";
          } else if (distance === 2) {
            px = "px-3";
          }
        }

        const iconWrapper = (
          <div
            onMouseEnter={() => !isSpace && setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`
              relative text-white flex justify-center items-center
              h-full ${px} ${bg}
              transition-all duration-300 ease-in-out rounded-full
            `}
          >
            {/* Tooltip */}
            {!isSpace && hoveredIndex === index && (
              <span className="absolute bottom-full mb-2 px-2 py-1 text-xs rounded bg-white/10 text-white shadow-sm backdrop-blur-sm transition-all duration-300">
                {item.name}
                {/* Optional arrow */}
                <span className="absolute left-1/2 -bottom-1 translate-x-[-50%] w-2 h-2 bg-white/10 rotate-45"></span>
              </span>
            )}
            <div className="text-2xl">{item.icon}</div>
          </div>
        );

        if (isSpace) {
          return <div key={index}>{iconWrapper}</div>;
        }

        if (!item.path) return null;

        if (isExternal) {
          return (
            <a
              key={index}
              href={item.path}
              target="_blank"
              rel="noopener noreferrer"
              className="h-full"
            >
              {iconWrapper}
            </a>
          );
        } else {
          return (
            <Link key={index} to={item.path!} className="h-full">
              {iconWrapper}
            </Link>
          );
        }
      })}
    </div>
  );
};
