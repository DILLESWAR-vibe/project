import { projects } from "../../data";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative h-full z-20 bg-background text-white px-5  md:px-32"
    >
      <div className="py-14 ">
        <h2 className="font-ragnear text-5xl md:text-8xl mb-10 font-bold">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="relative h-96 p-5 border-2 border-white rounded-3xl overflow-hidden group flex flex-col justify-end"
            >
              <span className="absolute top-5 text-primary left-5 z-30 font-ragnear text-7xl duration-300 group-hover:text-2xl">
                {`0${i + 1}`}
              </span>

              <div className="flex flex-wrap gap-2 items-center mb-5">
                {project.tools.map((tool, j) => (
                  <span
                    key={j}
                    className="border text-sm border-white px-5 py-1 rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <ul>
                {project.description.map((desc, j) => (
                  <li key={j} className="text-md md:text-xl">
                    {desc}
                  </li>
                ))}
              </ul>

              <div className="absolute top-0 left-0 w-full h-full rounded-3xl p-10 py-5 transition-transform duration-300 transform group-hover:-translate-y-[70%] bg-background text-white">
                <div>
                  <h2 className="absolute flex justify-between items-center w-[90%]  bottom-5 left-5 font-ragnear group-hover:text-2xl md:group-hover:text-2xl text-3xl md:text-4xl z-30 ">
                    {project.title}
                    <a
                      href={project.link}
                      className="nocursor text-sm md:text-2xl cursor-pointer opacity-0 group-hover:opacity-100 group-hover:text-primary"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
