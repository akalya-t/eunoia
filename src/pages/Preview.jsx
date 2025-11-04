// src/pages/Preview.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  HiOutlineSparkles,
  HiOutlineColorSwatch,
  HiOutlineDeviceMobile,
  HiOutlineAdjustments,
  HiOutlineLightBulb,
  HiOutlineChartBar,
} from "react-icons/hi";

export default function Preview() {
  return (
    <div className="min-h-screen bg-rose-50 text-amber-950 px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6">
          Preview the Experience
        </h1>
        <p className="text-center text-lg max-w-2xl mx-auto opacity-80 mb-12">
          Here's a quick look at how Eunoia adapts to your emotions and creates
          a personalized wellness experience using mood-based UI, curated
          content, and intelligent state-driven design.
        </p>

        {/* Section: Features Grid */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">✨ Core Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                label: "Mood-Adaptive UI",
                desc: "Interface theme changes based on selected emotion.",
                icon: <HiOutlineSparkles className="text-3xl" />,
              },
              {
                label: "Curated Suggestions",
                desc: "Music, books, workouts, reminders — unique per mood.",
                icon: <HiOutlineLightBulb className="text-3xl" />,
              },
              {
                label: "Responsive Design",
                desc: "Optimized for desktop, tablet & mobile layouts.",
                icon: <HiOutlineDeviceMobile className="text-3xl" />,
              },
              {
                label: "Smooth Animations",
                desc: "Framer Motion transitions & layout animations.",
                icon: <HiOutlineChartBar className="text-3xl" />,
              },
              {
                label: "Custom Theme Engine",
                desc: "Built using React Context + Tailwind utility merge.",
                icon: <HiOutlineAdjustments className="text-3xl" />,
              },
              {
                label: "Color Psychology",
                desc: "Each mood uses proven emotional color palettes.",
                icon: <HiOutlineColorSwatch className="text-3xl" />,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="p-6 rounded-2xl bg-white shadow-md border border-amber-900/10"
              >
                <div className="mb-3">{item.icon}</div>
                <h3 className="font-semibold text-lg">{item.label}</h3>
                <p className="text-sm opacity-75 mt-1">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section: Tech Stack */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">🛠 Tech Stack</h2>
          <div className="overflow-hidden rounded-xl border border-amber-900/20 bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-amber-100/40 text-amber-900 font-semibold">
                <tr>
                  <th className="p-3">Category</th>
                  <th className="p-3">Tech Used</th>
                  <th className="p-3">Purpose</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Frontend",
                    "React + Vite",
                    "Core UI and component rendering",
                  ],
                  [
                    "Styling",
                    "Tailwind CSS",
                    "Utility-first theming & responsive layouts",
                  ],
                  [
                    "Animations",
                    "Framer Motion",
                    "Card hover, page transition & motion effects",
                  ],
                  ["Routing", "React Router", "Multi-page navigation"],
                  ["State", "React Context API", "Theme + mood management"],
                ].map(([a, b, c], i) => (
                  <tr key={i} className="border-t border-amber-900/10">
                    <td className="p-3 font-medium">{a}</td>
                    <td className="p-3">{b}</td>
                    <td className="p-3 opacity-70">{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section: UX Notes */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">🎨 UX Decisions</h2>
          <ul className="list-disc pl-6 space-y-2 opacity-90">
            <li>Soft UI with emotional colors instead of harsh contrast.</li>
            <li>No heavy text — cards encourage touch-based browsing.</li>
            <li>Adaptive theme ensures emotional continuity across pages.</li>
            <li>Animations feel calm and smooth, not playful or chaotic.</li>
          </ul>
        </section>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
          <Link
            to="/"
            className="px-6 py-3 rounded-xl bg-amber-900 text-rose-50 font-semibold hover:bg-amber-950 transition"
          >
            Try the Experience
          </Link>
          <a
            href="https://github.com/akalya-t/eunoia"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl border border-amber-900 font-semibold hover:bg-amber-100 transition"
          >
            View Source on GitHub
          </a>
        </div>
      </motion.div>
    </div>
  );
}
