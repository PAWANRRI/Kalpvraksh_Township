import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Sections";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import { useTheme } from "./Theme"; // Import Theme Context

const Amenities = () => {
  const { darkMode } = useTheme(); // Get dark mode state

  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Experience Luxury Living with Premium Amenities"
        />

        <div className="flex flex-wrap gap-10 mb-6">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[20rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-2 text-n-3">{item.text}</p>
              </div>

              {item.light && <GradientLight />}

              {/* Updated to change background dynamically */}
              <div
                className={`absolute inset-0.5 ${
                  darkMode ? "bg-n-8" : "bg-[#05322b]" // Change background in light mode
                }`}
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-40">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Amenities;
