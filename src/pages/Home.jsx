import React, { useState, useEffect } from "react";
import { moods } from "../data/mood";
import MoodCard from "../components/MoodCard";
import ContentSection from "../components/ContentSection";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [selectedMood, setSelectedMood] = useState(null);

  // update <html> gradient based on selected mood
  useEffect(() => {
    if (!selectedMood) {
      document.documentElement.style.setProperty(
        "--bg-gradient",
        "linear-gradient(180deg, #ffffff 0%, #f7f7fb 100%)"
      );
      return;
    }

    const c = selectedMood.color || "#a7d8de";
    document.documentElement.style.setProperty(
      "--bg-gradient",
      `linear-gradient(160deg, ${c}20 10%, ${c}60 100%)`
    );
  }, [selectedMood]);

  return (
    <div className="flex flex-col items-center p-6 transition-all duration-500 w-full">
      <main className="w-full py-12 px-6 flex-1">
        <div className="max-w-6xl mx-auto">
          <section className="mb-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h1 className="text-4xl font-extrabold">
                  How are you feeling today?
                </h1>
                <p className="opacity-70 mt-2">
                  Choose a mood and get curated suggestions — music, books,
                  exercises and more.
                </p>
              </div>
              <div className="hidden md:block text-sm opacity-60">
                Tip: click a card to open mood suggestions
              </div>
            </div>
          </section>

          <section>
            <AnimatePresence mode="wait">
              {!selectedMood ? (
                <motion.div
                  key="grid"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"
                >
                  {moods.map((mood) => (
                    <MoodCard
                      key={mood.id}
                      mood={mood}
                      onSelect={() => setSelectedMood(mood)}
                    />
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="content"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <ContentSection
                    mood={selectedMood}
                    onBack={() => setSelectedMood(null)}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </section>
        </div>
      </main>
    </div>
  );
}
