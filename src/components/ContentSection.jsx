import { motion } from "framer-motion";

export default function ContentSection({ mood, onBack }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="w-full flex justify-center px-4 sm:px-6 lg:px-8"
    >
      {/* centered container */}
      <div className="w-full max-w-2xl mx-auto py-16 sm:py-20">
        {/* Back link */}
        <button
          onClick={onBack}
          className="text-sm opacity-70 hover:opacity-100 transition mb-6"
        >
          ← Back to moods
        </button>

        {/* Mood title */}
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
          {mood.label}
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg opacity-80 mb-10 leading-relaxed max-w-xl">
          {mood.content?.quote}
        </p>

        {/* Suggestion Cards */}
        <div className="space-y-5">
          {Object.entries(mood.content)
            .filter(([key]) => key !== "quote")
            .map(([key, value], i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{
                  scale: 1.04,
                  boxShadow: `0 0 25px ${mood.color}70, 0 0 8px ${mood.color}40`,
                }}
                className="
                  group p-6 rounded-2xl
                  border border-white/20
                  bg-white/50 dark:bg-neutral-900/30
                  backdrop-blur-lg transition-all duration-300
                  hover:bg-white/60
                  cursor-pointer shadow-sm
                "
              >
                <div className="text-base sm:text-lg font-semibold capitalize mb-1 group-hover:text-amber-900 transition">
                  {key}:
                </div>
                <div className="text-sm sm:text-base opacity-80">{value}</div>
              </motion.div>
            ))}
        </div>
      </div>
    </motion.section>
  );
}
