import React from 'react';
import profile from '../../assets/profile.jpeg';



const Hero = () => {
    const handleDownload = () => {
        const resumeUrl = '/ShanujYadav.pdf';
        const link = document.createElement("a");
        link.href = resumeUrl;
        link.download = "Shanuj Yadav.pdf";
        link.click();
    };
    return (
        <section className="h-screen bg-gray-100 flex items-center justify-center">
            <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row w-full px-4 md:px-8">
                <div className="w-full md:w-3/5 flex flex-col justify-center items-start pt-0 md:pt-0 mb-6 md:mb-0">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 break-words leading-tight font-serif">
                        Hi, I'm Shanuj
                    </h1>
                    <p className="text-base sm:text-lg md:text-base text-gray-600 mb-8 text-justify font-serif">
                        Frontend Developer with 1.6 years of experience, building responsive, <br /> user-friendly, and secure web and mobile applications.</p>
                    <button
                        onClick={handleDownload}
                        className="bg-blue-600 text-white py-2 px-5 rounded-md hover:bg-blue-500 transition duration-300 mb-8 font-serif"
                    >
                        Download CV
                    </button>
                </div>
                <div className="w-full md:w-2/5 flex items-center justify-center mt-6 md:mt-0 mb-8 md:mb-0">
                    <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-56 md:h-56 rounded-full overflow-hidden shadow-lg">
                        <img
                            src={profile}
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;