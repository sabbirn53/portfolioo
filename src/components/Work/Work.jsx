import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  return (
    <section
      id="work"
      className="py-20 px-6 md:px-[7vw] lg:px-[12vw] font-sans bg-[#0f0f1a]"
    >
      {/* Section Header */}
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-bold text-white md:text-5xl">Projects</h2>
        <div className="w-16 h-1 mx-auto mt-4 bg-purple-500"></div>
        <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-400">
          A selection of my frontend projects using modern frameworks and tools.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="group cursor-pointer relative bg-[#1c1c2b] rounded-2xl overflow-hidden shadow-lg hover:shadow-purple-600/40 transition duration-300 hover:-translate-y-2"
          >
            <img
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-48 rounded-t-2xl"
            />
            <div className="p-5">
              <h3 className="text-xl font-bold text-white transition group-hover:text-purple-400">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-gray-400 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 text-xs text-purple-300 bg-purple-900 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-10 overflow-y-auto bg-black bg-opacity-90">
          <div className="relative bg-[#1c1c2b] text-white rounded-2xl shadow-2xl max-w-3xl w-full">
            {/* Cancel button */}
            <button
              onClick={handleCloseModal}
              className="absolute z-50 text-3xl text-gray-300 top-4 right-4 hover:text-purple-500"
            >
              &times;
            </button>

            <div className="flex flex-col lg:flex-row">
              {/* Image */}
              <div className="w-full p-4 lg:w-1/2">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="rounded-xl w-full object-cover max-h-[400px]"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col justify-between w-full p-6 lg:w-1/2">
                <div>
                  <h3 className="mb-4 text-2xl font-bold">
                    {selectedProject.title}
                  </h3>
                  <p className="mb-4 text-sm text-gray-400">
                    {selectedProject.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs text-purple-300 bg-purple-900 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 text-sm font-semibold text-center text-gray-300 transition bg-gray-800 rounded-xl hover:bg-purple-800 hover:text-white"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 text-sm font-semibold text-center text-white transition bg-purple-600 rounded-xl hover:bg-purple-700"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
