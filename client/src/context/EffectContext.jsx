import { createContext, useContext, useEffect, useState } from "react";
import { useScheduler } from "../components/AntiGravity/hooks/useScheduler";
const EffectContext = createContext(void 0);
function EffectProvider({ children }) {
  const [isEnabled, setIsEnabled] = useState(() => {
    const saved = localStorage.getItem("antigravity-effect-enabled");
    return saved !== null ? JSON.parse(saved) : true;
  });
  const currentTheme = useScheduler();
  useEffect(() => {
    localStorage.setItem("antigravity-effect-enabled", JSON.stringify(isEnabled));
  }, [isEnabled]);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
    }
  }, []);
  const toggleEffect = () => setIsEnabled(!isEnabled);
  return <EffectContext.Provider value={{ isEnabled, setIsEnabled, currentTheme, toggleEffect }}>
            {children}
        </EffectContext.Provider>;
}
function useEffectContext() {
  const context = useContext(EffectContext);
  if (context === void 0) {
    throw new Error("useEffectContext must be used within a EffectProvider");
  }
  return context;
}
export {
  EffectProvider,
  useEffectContext
};
