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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-8 sm:px-6 md:px-8">
  <h2 className="text-3xl font-serif font-semibold mb-12 text-center text-gray-800 py-2 px-6">
    Skills
  </h2>

  <div className="grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 p-4">
    {skills.map((skill, index) => (
      <div
        key={index}
        className="flex flex-col items-center justify-center bg-gray-100 rounded-lg shadow-md hover:shadow-lg hover:bg-blue-100 transition-shadow duration-300
                w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44"
      >
        <div className="text-4xl sm:text-5xl mb-2 sm:mb-4">{skill.icon}</div>
        <p className="text-sm sm:text-base md:text-lg font-semibold font-serif text-center">{skill.name}</p>
      </div>
    ))}
  </div>
</div>

  </>
  )
}

export default Skill