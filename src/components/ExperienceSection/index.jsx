import { experience, experienceImage } from "../../data";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const ExperienceSection = () => {
  const [clickedItem, setClickedItem] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      id="experience"
      className="h-full md:h-screen flex items-center justify-between relative overflow-hidden  px-5 md:px-32"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-30 w-full">
        {/* Image Section */}
        <div className="flex items-center justify-center">
          <img
            src={experienceImage}
            alt="Experience"
            className="hidden md:block rounded-xl shadow-lg h-96 w-lg m-auto object-cover md:-rotate-12"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-center text-white max-w-6xl relative">
          <h2 className="text-5xl md:text-8xl font-bold mb-16 uppercase font-ragnear">
            Experience
          </h2>
          <img
            src={experienceImage}
            alt="Experience"
            className="md:hidden block rounded-xl shadow-lg m-auto h-72 object-cover  w-lg md:-rotate-12 mb-12"
          />
          <ul className="nocursor cursor-pointer relative text-lg text-gray-300">
            {experience.map((item) => (
              <li
                key={item.id}
                className="relative border-t nth-last-[1]:border-y border-gray-700 py-4 lg:py-7 group"
                onMouseEnter={(e) => {
                  setHoveredItem(item.id);
                  handleMouseMove(e);
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => {
                  setClickedItem(clickedItem === item.id ? null : item.id);
                  setHoveredItem(null);
                }}
              >
                <div className="flex items-center justify-between space-x-4">
                  <span className="font-semibold uppercase text-2xl md:text-3xl font-stretch-semi-condensed cursor-pointer">
                    {item.company}
                  </span>
                  <IoIosArrowDown
                    className={
                      clickedItem === item.id ? "rotate-180" : "rotate-0"
                    }
                  />
                </div>

                <span className="absolute top-0 left-0 h-[1px] bg-white w-0 group-hover:w-full transition-all duration-1000"></span>

                {hoveredItem === item.id && (
                  <img
                    src={item.logo}
                    alt={`${item.company} logo`}
                    style={{
                      position: "absolute",
                      left: cursorPos.x + 130 + "px",
                      top: cursorPos.y - 70 + "px",
                      pointerEvents: "none",
                      transform: "translate(-50%, -50%)",
                      transition: "transform 0.1s linear",
                    }}
                    className="hidden md:block rounded-lg bg-primary w-[30vh] h-[20vh] px-10 object-contain"
                  />
                )}

                {clickedItem === item.id && item.accomplishments && (
                  <ul>
                    <span className="text-3xl mb-2 font-ragnear text-primary inline-block mt-7">
                      {item.role}{" "}
                      <span className="text-white text-sm md:text2xl">
                        ({item.duration})
                      </span>
                    </span>
                    {Array.isArray(item.accomplishments) ? (
                      item.accomplishments.map((accomplishment, index) => (
                        <li
                          key={index}
                          className="text-md md:text-lg list-disc my-2"
                        >
                          {accomplishment}
                        </li>
                      ))
                    ) : (
                      <li>{item.accomplishments}</li>
                    )}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
