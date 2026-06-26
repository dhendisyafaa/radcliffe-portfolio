import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa6";
import { PiFilmSlate } from "react-icons/pi";

const ModeToggle = ({ mode, onToggle }) => {
  const isTech = mode === "tech";

  return (
    <div className="flex items-center justify-center py-8 px-4 w-full">
      <button
        onClick={onToggle}
        className="relative flex items-center p-1.5 md:p-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:border-primary/50 transition-all duration-500 group cursor-pointer max-w-full"
      >
        {/* Tech Label */}
        <div
          className={`relative z-10 flex items-center justify-center gap-2 px-4 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wider uppercase transition-colors duration-300 ${
            isTech ? "text-primary" : "text-zinc-500 hover:text-zinc-300"
          }`}
        >
          {isTech && (
            <motion.div
              layoutId="activeMode"
              className="absolute inset-0 bg-primary/15 border border-primary/30 rounded-full"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          <FaCode className="w-3.5 h-3.5 md:w-4 md:h-4 relative z-20" />
          <span className="relative z-20">Tech</span>
        </div>

        {/* Divider */}
        <div className="w-px h-6 bg-white/10 mx-1 md:mx-2" />

        {/* Film Label */}
        <div
          className={`relative z-10 flex items-center justify-center gap-2 px-4 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wider uppercase transition-colors duration-300 ${
            !isTech ? "text-primary" : "text-zinc-500 hover:text-zinc-300"
          }`}
        >
          {!isTech && (
            <motion.div
              layoutId="activeMode"
              className="absolute inset-0 bg-primary/15 border border-primary/30 rounded-full"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          <PiFilmSlate className="w-3.5 h-3.5 md:w-4 md:h-4 relative z-20" />
          <span className="relative z-20">Filmmaking</span>
        </div>
      </button>
    </div>
  );
};

export default ModeToggle;
