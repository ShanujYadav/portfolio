import React from 'react'
import { FaTwitter } from "react-icons/fa";

const Expreince = () => {
    return (
        <div className='py-16'>
            <h2 className="text-3xl font-serif font-semibold mb-12 text-center text-gray-800 py-2 px-6">
                Projects
            </h2>

            <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl m-5 ">
                <div class="p-6 md:p-8 bg-gray-50 rounded-lg shadow-md hover:bg-gradient-to-r from-blue-100 to-indigo-200">
                    <p class="text-2xl font-bold text-black font-serif font-serif">
                        Software Developer
                    </p>
                    <div class="flex items-center justify-between mb-6">
                        <h3 class="text-lg leading-tight font-medium text-gray-800 font-serif">Altaneo Finance Pvt. Ltd.</h3>
                        <span class="text-gray-600 text-sm font-serif">May 2024 - Present</span>
                    </div>
                    <ul class="list-disc pl-5 text-gray-700 space-y-2 font-serif">
                        <li>Designed, developed and Deployed scalable, secure web applications using Node.js, React, Redux.js, and JavaScript, enhancing performance and user experience.</li>
                        <li>Integrated third-party APIs such as PAN verification, CIBIL, and GST checks to streamline fintech processes and enhance operational efficiency.</li>
                        <li>Built and integrated APIs for seamless communication between front-end and back-end, improving data flow and responsiveness.</li>
                        <li>Deployed applications on AWS using Docker and a robust CI/CD pipeline to ensure seamless integration, delivery, and scalability.</li>
                    </ul>
                </div>
            </div>

            <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl m-5">
                <div class="p-6 md:p-8 bg-gray-50 rounded-lg shadow-md hover:bg-gradient-to-r from-blue-100 to-indigo-200">
                    <p class="text-2xl font-bold text-black font-serif font-serif">
                        Software Developer
                    </p>
                    <div class="flex items-center justify-between mb-6">
                        <h3 class="text-lg leading-tight font-medium text-gray-800 font-serif">NeoByt Fintech Pvt. Ltd.</h3>
                        <span class="text-gray-600 text-sm font-serif">Sept 2023 - Dec 2023</span>
                    </div>
                    <ul class="list-disc pl-5 text-gray-700 space-y-2 font-serif">
                        <li>Implemented encryption and decryption algorithms to secure sensitive data, ensuring confidentiality and integrity.</li>
                        <li>Developed a multilingual website for global reach with seamless content translation and localization.</li>
                        <li>Built and maintained dynamic, responsive websites and web applications using React.js and Redux.js.</li>
                        <li>Integrated secure RESTful APIs for seamless data flow and enhanced security, optimizing user experience.</li>
                    </ul>
                </div>
            </div>

            <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl m-5">
                <div class="p-6 md:p-8 bg-gray-50 rounded-lg shadow-md hover:bg-gradient-to-r from-blue-100 to-indigo-200">
                    <p class="text-2xl font-bold text-black font-serif font-serif">
                        Intern
                    </p>
                    <div class="flex items-center justify-between mb-6">
                        <h3 class="text-lg leading-tight font-medium text-gray-800 font-serif">SSDN Technologies</h3>
                        <span class="text-gray-600 text-sm font-serif">Mar 2023 - Aug 2023</span>
                    </div>
                    <ul class="list-disc pl-5 text-gray-700 space-y-2 font-serif">
                        <li>Collaborated with senior developers in Agile environments (daily stand-ups, sprint planning, code reviews).</li>
                        <li>Improved UI/UX with clean and responsive designs using React JS and React Native.</li>
                        <li>Used Git for version control and GitHub for team collaboration, managing code changes and resolving conflicts.</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Expreince