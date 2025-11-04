import { useTheme } from "../context/ThemeContext";

export default function ThemeWrapper({ children }) {
  const { theme } = useTheme();

  return (
    <div
      className={`
        min-h-screen transition-all duration-500 
        ${theme.bg || "bg-fuchsia-50"} 
        ${theme.text || "text-amber-950"}
      `}
    >
      {children}
    </div>
  );
}
