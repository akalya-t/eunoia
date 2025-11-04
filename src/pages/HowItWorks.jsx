import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  HiOutlineFingerPrint,
  HiOutlineMusicNote,
  HiOutlineSparkles,
} from "react-icons/hi";

const steps = [
  {
    title: "Pick your mood",
    body: "Tap the card that best matches how you feel right now — short and simple.",
    icon: <HiOutlineFingerPrint className="w-6 h-6" />,
  },
  {
    title: "Get gentle suggestions",
    body: "Receive curated playlists, books, and tiny activities chosen to match your mood.",
    icon: <HiOutlineMusicNote className="w-6 h-6" />,
  },
  {
    title: "Try, save, or share",
    body: "Try a quick breathing exercise or a song. Bookmark helpful items or share with a friend.",
    icon: <HiOutlineSparkles className="w-6 h-6" />,
  },
];

export default function HowItWorks() {
  return (
    <motion.main
      className="w-full py-16 px-6"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
    >
      <section className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold">
            How Eunoia works
          </h1>
          <p className="mt-3 max-w-3xl mx-auto opacity-80 leading-relaxed">
            A few gentle steps to help you notice your mood and pick something
            that fits — quick, thoughtful, and kind.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <motion.article
              key={s.title}
              className="p-6 rounded-2xl bg-white/60 backdrop-blur-sm shadow-sm flex flex-col gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-md bg-amber-100 flex items-center justify-center text-amber-700">
                  {s.icon}
                </div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
              </div>
              <p className="text-sm opacity-80 leading-relaxed">{s.body}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/"
            className="inline-block px-5 py-3 rounded-md font-medium shadow-sm
                       bg-amber-700 text-white hover:bg-amber-700 transition-colors"
          >
            Start from the mood selector
          </Link>
        </div>

        <div className="mt-12 text-sm opacity-70 text-center max-w-2xl mx-auto">
          <p>
            Tip: you can always go back to the mood grid using the back button
            in the top-left of any mood's page — or click the logo to return
            home.
          </p>
        </div>
      </section>
    </motion.main>
  );
}
