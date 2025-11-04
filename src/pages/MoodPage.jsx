import { useParams, Link } from "react-router-dom";
import { moods } from "../data/mood";
import { motion } from "framer-motion";

export default function MoodPage() {
  const { moodId } = useParams();
  const mood = moods.find((m) => m.id === moodId);

  if (!mood) return <p className="p-6">Mood not found.</p>;

  return (
    <motion.main
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`min-h-screen px-6 py-16 flex justify-center transition-all duration-300`}
      style={{ backgroundColor: mood.theme.bg, color: mood.theme.text }}
    >
      <div className="w-full max-w-3xl mx-auto">
        {/* Back Link */}
        <Link
          to="/"
          className="text-sm opacity-70 hover:opacity-100 transition mb-6 inline-block"
        >
          ← Back to moods
        </Link>

        {/* Mood Heading */}
        <h1
          className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-3"
          style={{ color: mood.theme.text }}
        >
          {mood.label}
        </h1>

        {/* Quote */}
        <p className="text-base sm:text-lg opacity-80 mb-12 leading-relaxed">
          {mood.content.quote}
        </p>

        {/* Content Cards */}
        <div className="space-y-5">
          {Object.entries(mood.content)
            .filter(([key]) => key !== "quote")
            .map(([key, value], i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                whileHover={{
                  scale: 1.04,
                  boxShadow: `0 0 25px ${mood.color}70, 0 0 8px ${mood.color}50`,
                }}
                className="p-6 rounded-2xl border border-white/20 bg-white/60 
                           backdrop-blur-md shadow-sm hover:bg-white/70 
                           transition-all cursor-pointer"
              >
                <div className="font-semibold capitalize mb-1 text-lg">
                  {key}
                </div>
                <div className="opacity-80 text-base">{value}</div>
              </motion.div>
            ))}
        </div>
      </div>
    </motion.main>
  );
}
