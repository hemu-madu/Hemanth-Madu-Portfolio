import { useMemo } from "react";
import { getFestivalThemeId } from "../config/festivals";
import { getSeasonThemeId } from "../config/seasons";
import { THEMES } from "../config/themes";
function useScheduler() {
  const currentTheme = useMemo(() => {
    const today = /* @__PURE__ */ new Date();
    const festivalId = getFestivalThemeId(today);
    if (festivalId && THEMES[festivalId]) {
      return THEMES[festivalId];
    }
    const seasonId = getSeasonThemeId(today);
    if (seasonId && THEMES[seasonId]) {
      return THEMES[seasonId];
    }
    return THEMES["winter"];
  }, []);
  return currentTheme;
}
export {
  useScheduler
};
