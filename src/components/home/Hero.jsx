import React from 'react';
import profile from '../../assets/profile.jpeg';



const Hero = () => {
    const handleRedirect = () => {
        window.open("https://drive.google.com/file/d/1Wz3GF7qKSeNnbau6kklLDXW4yq-eekNe/view?usp=sharing", "_blank");
      }

    return (
        <section className="h-screen bg-gray-100 flex items-center justify-center">
            <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row w-full px-4 md:px-8">
                <div className="w-full md:w-3/5 flex flex-col justify-center items-start pt-0 md:pt-0 mb-6 md:mb-0">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 break-words leading-tight font-serif">
                        I'm Shanuj Ya
                        <span className="text-[#2AAA8A] font-bold">Dev</span>
                        
                    </h1>

                    {/* <p className="text-base sm:text-lg md:text-base text-gray-600 mb-8 text-justify font-serif">
                        A Software Developer with 1.6 years of experience, skilled in building user-friendly applications, proficient in debugging and optimization, designing and integrating
                        <span className="text-blue-500 font-bold"> secure </span> RESTful APIs, and enhancing
                        <span className="text-blue-500 font-semibold"> encryption algorithms </span> for robust data storage security.
                    </p> */}


                    <p className="text-base sm:text-lg md:text-base text-gray-600 mb-8 text-justify font-serif">
                        A Software Developer with expertise in the <span className="text-blue-500 font-bold">Fintech Domain</span>, crafting, scalable, and user-centric solutions that drive innovation. Proficient in designing
                        <span className="text-blue-500 font-bold"> secure RESTful APIs</span>, implementing
                        <span className="text-blue-500 font-bold"> advanced encryption algorithms</span> for robust 
                        <span className="text-blue-500 font-bold">  data storage security</span>, and transforming complex financial workflows into seamless user experiences.
                    </p>



                    <button
                        onClick={handleRedirect}
                        className="bg-blue-600 text-white py-2 px-5 rounded-md hover:bg-blue-500 transition duration-300 mb-8 font-serif"
                    >
                        View Resume
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
    )
}
export default Hero