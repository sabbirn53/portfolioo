import React from "react";
import { FiDownload } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Photo from "../Photo"; // Adjust path if needed

const About = () => {
  return (
    <section
      id="about"
      className="pt-10 md:pt-16 lg:pt-20 px-[7vw] lg:px-[14vw] font-sans"
    >
      <div className="container mx-auto">
        <div className="flex flex-col-reverse items-center justify-between gap-10 xl:flex-row">
          {/* Text Section */}
          <div className="w-full text-center xl:text-left xl:w-1/2">
            <h1 className="mb-4 text-3xl font-bold leading-tight text-white md:text-4xl">
              Hello I'm <br />
              <span className="text-green-400">Sabbir Hasan Shuvo</span>
            </h1>
            <p className="mb-6 text-gray-300">
              A frontend developer based in Bangladesh. I'm passionate about building
              modern web applications using React, Next.js,Tailwind CSS and others.
            </p>

            {/* Buttons & Social Icons */}
            <div className="flex flex-col items-center gap-8 xl:flex-row">
              {/* Download CV */}
              <a
                href="https://drive.google.com/file/d/14cRMs_WGTNQfbwz8_kE49uFG_IJiqpQN/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-2.5 px-5 text-white rounded-full font-medium transition-transform hover:scale-105"
                style={{
                  background: "linear-gradient(90deg, #6366f1, #8b5cf6)", // toned-down indigo-violet
                  boxShadow: "0 0 6px rgba(99,102,241,0.4), 0 0 12px rgba(139,92,246,0.3)",
                }}
              >
                <span>Download CV</span>
                <FiDownload size={18} />
              </a>

              {/* Social Icons */}
              <div className="flex gap-6 mb-8 xl:mb-0">
                <a
                  href="https://github.com/sabbirn53"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex items-center justify-center text-gray-300 transition-all duration-500 border border-gray-500 rounded-full w-9 h-9 hover:bg-indigo-500 hover:text-white"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href="https://bd.linkedin.com/in/sabbir53"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex items-center justify-center text-gray-300 transition-all duration-500 border border-gray-500 rounded-full w-9 h-9 hover:bg-blue-600 hover:text-white"
                >
                  <FaLinkedin size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Photo Section */}
          <div className="flex justify-center w-full xl:w-1/2">
            <div className="max-w-[250px] md:max-w-[300px] xl:max-w-[350px]">
              <Photo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
