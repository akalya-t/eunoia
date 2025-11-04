import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <motion.main
      className="w-full py-16 px-6"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
    >
      <section className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            About Eunoia
          </h1>
          <p className="mt-4 text-base md:text-lg opacity-80 max-w-3xl mx-auto leading-relaxed">
            Eunoia is a gentle space made to help you notice what you feel and
            get small, thoughtful suggestions that actually help. Pick a mood —
            whether you're calm, stressed, excited, or somewhere in between —
            and we'll suggest music, books, short exercises, and ideas that fit
            your moment.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <motion.div
            className="p-6 rounded-2xl bg-white/60 backdrop-blur-sm shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
          >
            <h3 className="text-lg font-semibold mb-2">Why Eunoia</h3>
            <p className="text-md opacity-80 leading-relaxed">
              Because emotions are signals — not problems. Eunoia helps you
              respond with kindness and useful choices, not noise. Small actions
              add up: a song, a short breathing exercise, or a line from a book.
            </p>
          </motion.div>

          <motion.div
            className="p-6 rounded-2xl bg-white/60 backdrop-blur-sm shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
          >
            <h3 className="text-lg font-semibold mb-2">What we curate</h3>
            <p className="text-md opacity-80 leading-relaxed">
              Hand-picked playlists, approachable book recommendations, tiny
              mindful activities, and friendly reminders — all chosen to match
              the mood you pick. We focus on balance, not extremes.
            </p>
          </motion.div>

          <motion.div
            className="p-6 rounded-2xl bg-white/60 backdrop-blur-sm shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
          >
            <h3 className="text-lg font-semibold mb-2">Our promise</h3>
            <p className="text-md opacity-80 leading-relaxed">
              No judgments. No long quizzes. Just a simple, warm tool you can
              use any time you feel like a tiny reset or a boost.
            </p>
          </motion.div>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/"
            className="inline-block px-5 py-3 rounded-md font-medium shadow-sm
                       bg-amber-700 text-white hover:bg-amber-700 transition-colors"
            aria-label="Go to mood selector"
          >
            Try the Mood Selector
          </Link>
        </div>

        <div className="mt-12 max-w-3xl mx-auto text-md opacity-70 leading-relaxed text-center">
          <p>
            Built with care — Eunoia is a frontend project exploring humane UX,
            responsive design, and smooth micro-interactions. Use it, share it,
            and take small steps with your moods.
          </p>
        </div>
      </section>
    </motion.main>
  );
}
