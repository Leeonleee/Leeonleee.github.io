import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* SWE / Career Side - Black */}
      <Link
        to="/swe"
        className="split-panel flex-1 bg-swe text-swe-foreground flex flex-col justify-between p-8 md:p-12 lg:p-16 group cursor-pointer min-h-[50vh] md:min-h-screen relative overflow-hidden"
      >
        {/* Top label */}
        <div className="flex justify-between items-start">
          <span className="text-brutal-xs opacity-60">01</span>
          <span className="text-brutal-xs opacity-60">SOFTWARE</span>
        </div>

        {/* Center content */}
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-brutal-lg mb-6">
            SWE
          </h1>
          <p className="text-brutal-sm opacity-70 max-w-xs mb-8">
            Projects, experience, and everything career
          </p>
          <div className="flex items-center gap-2 text-brutal-sm group-hover:gap-4 transition-all duration-300">
            <span>Enter</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        {/* Bottom label */}
        <div className="flex justify-between items-end">
          <span className="text-brutal-xs opacity-60">ENGINEERING</span>
          <span className="text-brutal-xs opacity-60">→</span>
        </div>

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 grid-overlay opacity-5 pointer-events-none" />
      </Link>

      {/* Divider line for mobile */}
      <div className="h-[2px] md:h-auto md:w-[2px] bg-border" />

      {/* Personal Side - White */}
      <Link
        to="/personal"
        className="split-panel flex-1 bg-personal text-personal-foreground flex flex-col justify-between p-8 md:p-12 lg:p-16 group cursor-pointer min-h-[50vh] md:min-h-screen relative overflow-hidden"
      >
        {/* Top label */}
        <div className="flex justify-between items-start">
          <span className="text-brutal-xs opacity-60">02</span>
          <span className="text-brutal-xs opacity-60">PERSONAL</span>
        </div>

        {/* Center content */}
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-brutal-lg mb-6">
            Life
          </h1>
          <p className="text-brutal-sm opacity-70 max-w-xs mb-8">
            Personal interests
          </p>
          <div className="flex items-center gap-2 text-brutal-sm group-hover:gap-4 transition-all duration-300">
            <span>Enter</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        {/* Bottom label */}
        <div className="flex justify-between items-end">
          <span className="text-brutal-xs opacity-60">INTERESTS</span>
          <span className="text-brutal-xs opacity-60">→</span>
        </div>

        {/* Subtle grid overlay */}
        {/* <div className="absolute inset-0 grid-overlay opacity-[0.03] pointer-events-none" /> */}
      </Link>
    </div>
  );
};

export default Index;
