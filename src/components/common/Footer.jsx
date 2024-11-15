import React from 'react'
import { FaInstagram, FaLinkedin, FaGithubSquare, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-white  mt-5">
            <div className="container mx-auto flex flex-col items-center justify-center pb-2">
                <div className="flex space-x-6 pb-2">
                    <a href="https://github.com/ShanujYadav" target="_blank" rel="noopener noreferrer">
                        <FaGithubSquare className="text-black hover:text-blue-600" size={30} />
                    </a>
                    <a href="https://www.instagram.com/sanu_ydv2" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-black hover:text-blue-500" size={30} />
                    </a>
                    <a href="https://x.com/LifesColour1?t=sEkiznfdpzNgflL-uq0xXA&s=09" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="text-black hover:text-blue-600" size={30} />
                    </a>
                    <a href="https://www.linkedin.com/in/shanujyadav" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-black hover:text-blue-600" size={30} />
                    </a>
                </div>
                <p className="text-gray-400 text-sm">
                    © {new Date().getFullYear()} All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer