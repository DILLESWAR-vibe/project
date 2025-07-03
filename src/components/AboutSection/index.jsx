import dilliImage from "../../assets/images/dilli.webp";
import { about, myInfo, resumeLink, skills } from "../../data";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative h-auto min-h-screen flex flex-col md:flex-row items-center justify-center px-5 py-10 bg-background text-white"
    >
      <h2 className="text-5xl font-ragnear md:hidden text-center mb-6">
        About Myself
      </h2>

      <div className="flex flex-col md:flex-row items-center w-full max-w-7xl bg-secondar  rounded-xl shadow-xl space-y-10 md:space-y-0 md:gap-x-5">
        {/* Image Section */}
        <div className="flex-[2] flex-shrink-0  ">
          <img
            src={dilliImage}
            alt="dilleswar"
            className="w-54 md:w-full h-54 md:h-[80vh] object-cover object-top rounded-xl border bg-primary border-white"
          />
        </div>

        <div className="hidden md:flex flex-[1] relative h-full items-center justify-center ">
          <h2 className="absolute text-4xl  font-bold md:text-8xl font-ragnear md:font-sans -rotate-90 whitespace-nowrap origin-center uppercase w-auto text-justify">
            About Me
          </h2>
        </div>

        {/* Text Content  */}
        <div className="flex-[3] text-lg text-justify md:text-xl leading-relaxed  flex flex-col justify-center w-full">
          <p>{about.para_1}</p>
          <br />
          <p>{about.para_2}</p>
          <div className="flex flex-wrap   gap-3 mt-10  ">
            {skills.map((skill) => (
              <span
                key={skill}
                className="border-white border px-5 py-2 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Resume Button */}
          <div className="flex justify-start">
            <button className=" nocursor flex  gap-2 items-center shadow-xl backdrop-blur-md lg:font-semibold isolation-auto before:absolute before:w-full before:transition-all before:duration-700 hover:before:w-full before:bg-primary before:-left-full hover:before:left-0 before:rounded-full hover:text-gray-50 before:-z-10 before:aspect-square hover:before:scale-150 hover:before:duration-700 relative z-10 px-4 justify-between  w-34 md:w-38 py-2 mt-8 overflow-hidden border-2 rounded-full group font-ragnear text-2xl md:text-2xl cursor-pointer">
              <a href={resumeLink} target="_blank" rel="noopener noreferrer">
                Resume
              </a>
              <svg
                className="w-6 md:w-8 h-6 md:h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-white group-hover:border-none p-1 md:p-2 rotate-45"
                viewBox="0 0 16 19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                  className="fill-white group-hover:fill-gray-800 "
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
