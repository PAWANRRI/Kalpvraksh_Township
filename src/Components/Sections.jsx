import SectionSvg from "../assets/svg/SectionSvg";
import { useTheme } from "./Theme"; // Import Theme Context

const Section = ({
  className,
  id,
  crosses,
  crossesOffset,
  customPaddings,
  children,
}) => {
  const { darkMode } = useTheme(); // Get dark mode state

  return (
    <div
      id={id}
      className={`
        relative 
        ${customPaddings || `py-8 lg:py-14 xl:py-16 ${crosses ? "lg:py-32 xl:py-40" : ""}`}
        ${className || ""} 
        ${
          !darkMode && (id === "features" || crosses) // If light mode & either id='features' or crosses is true
            ? "bg-[#DBEFCA]"
            : ""
        }
      `}
    >
      {children}

      {/* Vertical lines on the left and right */}
      {/* <div className="hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10" />
      <div className="hidden absolute top-0 right-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:right-7.5 xl:right-10" /> */}

      {crosses && (
        <>
          <div
            className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 ${
              crossesOffset && crossesOffset
            } pointer-events-none lg:block xl:left-10 right-10`}
          />
          {/* <SectionSvg crossesOffset={crossesOffset} /> */}
        </>
      )}
    </div>
  );
};

export default Section;
