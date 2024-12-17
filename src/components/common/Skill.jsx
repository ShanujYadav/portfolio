import React from 'react'
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaAws,
  FaDocker,
  FaInfinity
} from 'react-icons/fa';
import { IoIosInfinite } from "react-icons/io";

import {
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiNextdotjs,
  SiReact,
} from 'react-icons/si';


const Skill = () => {
  const skills = [
    { name: 'React Js', icon: <FaReact className="text-blue-500" /> },
    { name: 'Node.Js', icon: <FaNodeJs className="text-green-500" /> },
    { name: 'Express.Js', icon: <SiExpress className="text-gray-500" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-700" /> },
    { name: 'AWS', icon: <FaAws className="text-yellow-500" /> },
    { name: 'Docker', icon: <FaDocker className="text-blue-500" /> },
    { name: 'Git', icon: <FaGitAlt className="text-red-500" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-500" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-500" /> },
    { name: 'React Native', icon: <SiReact className="text-blue-500" /> },
  ]

  return (<>
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
      <h2 className="text-3xl font-serif font-semibold mb-12 text-center text-gray-800  py-2 px-6">
        Skills
      </h2>

      <div className="grid grid-cols-2 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-5">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-gray-100 rounded-lg shadow-md hover:shadow-lg hover:bg-blue-100 transition-shadow duration-300
                w-40 h-40 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-48 lg:h-48"
          >
            <div className="text-5xl mb-4">{skill.icon}</div>
            <p className="text-lg font-semibold font-serif">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  </>
  )
}

export default Skill