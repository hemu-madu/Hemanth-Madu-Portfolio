import { useMemo } from "react";
import { getFestivalThemeId } from "../config/festivals";
import { getSeasonThemeId } from "../config/seasons";
import { THEMES, ThemeConfig } from "../config/themes";

export function useScheduler(): ThemeConfig {
    // Memoize based on date (could be just ONCE on mount, but let's allow for date changes if app runs over midnight)
    // Realistically, checking once on mount is fine for a SPA.
    const currentTheme = useMemo(() => {
        const today = new Date();

        // 1. Check for specific festival
        const festivalId = getFestivalThemeId(today);
        if (festivalId && THEMES[festivalId]) {
            return THEMES[festivalId];
        }

        // 2. Fallback to season
        const seasonId = getSeasonThemeId(today);
        if (seasonId && THEMES[seasonId]) {
            return THEMES[seasonId];
        }

        // 3. Ultimate Fallback
        return THEMES["winter"];
    }, []);

    return currentTheme;
}
