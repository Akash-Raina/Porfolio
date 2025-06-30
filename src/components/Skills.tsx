import {
  FaReact, FaNodeJs, FaDocker, FaAws, FaGit, FaPython
} from "react-icons/fa";
import {
  SiTailwindcss, SiExpress, SiMongodb, SiPostgresql, SiMysql, SiRedis,
  SiRedux, SiRecoil, SiTypescript, SiJavascript, SiCplusplus, SiWebrtc,
} from "react-icons/si";

export const Skills = () => {
  const skills = [
    { name: "React", icon: <FaReact /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Redis", icon: <SiRedis /> },
    { name: "Redux", icon: <SiRedux /> },
    { name: "Recoil", icon: <SiRecoil /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Python", icon: <FaPython /> },
    { name: "C/C++", icon: <SiCplusplus /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "AWS", icon: <FaAws /> },

    { name: "Git", icon: <FaGit /> },
    { name: "WebRTC", icon: <SiWebrtc /> }
  ];

  return (
    <div className="text-white mt-8">
      <h2 className="text-2xl font-bold mb-4">Tools that I have used</h2>

      {/* Glassmorphism + Infinite Marquee */}
      <div className="overflow-hidden rounded-2xl backdrop-blur-md bg-white/10 border border-white/30 shadow-lg">
        <div className="relative w-full">
          <div className="flex w-max animate-marquee gap-10 py-4 px-6">
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center min-w-[80px] hover:scale-110 transition-transform"
              >
                <div className="text-4xl mb-1">{skill.icon}</div>
                <span className="text-sm">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for marquee */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
        `}
      </style>
    </div>
  );
};
