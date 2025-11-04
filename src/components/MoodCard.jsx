import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";

export default function MoodCard({ mood }) {
  const { applyMoodTheme } = useTheme();
  const navigate = useNavigate();

  const handleClick = () => {
    applyMoodTheme(mood);
    navigate(`/mood/${mood.id}`);
  };

  return (
    <motion.div
      onClick={handleClick}
      layout
      whileHover={{ scale: 1.045 }}
      whileTap={{ scale: 0.96 }}
      className={`
        rounded-2xl p-6 cursor-pointer shadow-sm flex flex-col items-center justify-center 
        min-h-[130px] text-center select-none transition-all duration-300
        ${mood.bg} ${mood.text} ${mood.hover}
      `}
    >
      <div className="text-lg md:text-xl font-semibold">{mood.label}</div>
      <div className="text-md md:text-md mt-2 opacity-80">
        {mood.subtitle || ""}
      </div>
    </motion.div>
  );
}
