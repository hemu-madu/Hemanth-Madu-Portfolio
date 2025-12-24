import { createContext, useContext, useEffect, useState } from "react";
import { ThemeConfig } from "../components/AntiGravity/config/themes";
import { useScheduler } from "../components/AntiGravity/hooks/useScheduler";

interface EffectContextType {
    isEnabled: boolean;
    setIsEnabled: (enabled: boolean) => void;
    currentTheme: ThemeConfig;
    toggleEffect: () => void;
}

const EffectContext = createContext<EffectContextType | undefined>(undefined);

export function EffectProvider({ children }: { children: React.ReactNode }) {
    // Logic to determine initial state from localStorage
    const [isEnabled, setIsEnabled] = useState(() => {
        const saved = localStorage.getItem("antigravity-effect-enabled");
        return saved !== null ? JSON.parse(saved) : true;
    });

    const currentTheme = useScheduler();

    useEffect(() => {
        localStorage.setItem("antigravity-effect-enabled", JSON.stringify(isEnabled));
    }, [isEnabled]);

    // Check for specialized "Reduce Motion" system preference
    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        if (mediaQuery.matches) {
            // Optional: Auto-disable or reduce count. 
            // For now, let's respect the user's manual toggle, but maybe default to false if not set?
            // Currently we just stick to manual toggle.
        }
    }, []);

    const toggleEffect = () => setIsEnabled(!isEnabled);

    return (
        <EffectContext.Provider value={{ isEnabled, setIsEnabled, currentTheme, toggleEffect }}>
            {children}
        </EffectContext.Provider>
    );
}

export function useEffectContext() {
    const context = useContext(EffectContext);
    if (context === undefined) {
        throw new Error("useEffectContext must be used within a EffectProvider");
    }
    return context;
}
