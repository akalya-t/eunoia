import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { useTheme } from "./context/ThemeContext";
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import About from "./pages/About";
import Preview from "./pages/Preview";
import MoodPage from "./pages/MoodPage";

export default function App() {
  const { theme } = useTheme();

  return (
    <div
      className={`${theme.bg} ${theme.text} min-h-screen flex flex-col transition-all duration-500`}
    >
      <Header />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mood/:moodId" element={<MoodPage />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/about" element={<About />} />
          <Route path="/preview" element={<Preview />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
