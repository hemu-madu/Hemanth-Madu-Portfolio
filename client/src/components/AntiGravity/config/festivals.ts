import { ThemeConfig } from "./themes";

// Fixed dates (MM-DD) that recur every year
export const FIXED_FESTIVALS: Record<string, string> = {
    "01-01": "new_year",
    "01-14": "harvest", // Makar Sankranti / Pongal start
    "01-15": "harvest",
    "01-26": "republic", // Republic Day
    "02-14": "love",    // Valentine's
    "08-15": "republic", // Independence Day
    "10-02": "republic", // Gandhi Jayanti (Patriotic theme)
    "12-25": "christmas",
};

// Variable dates for specific years (YYYY-MM-DD)
// Based on User provided "2026 Examples" (Note: Dates may mirror 2024 input per user request structure)
export const VARIABLE_FESTIVALS: Record<string, string> = {
    // 2026 Implementation based on user list
    // January
    "2026-01-15": "harvest", // Makar Sankranti

    // February
    "2026-02-14": "vasant", // Vasant Panchami (Overlaps with Valentine's, favored for India)
    "2026-02-17": "shivaratri", // Maha Shivaratri

    // March
    "2026-03-25": "holi",

    // April
    "2026-04-10": "eid", // Eid-ul-Fitr / Ugadi (Shared date in user list)
    // "2026-04-10": "spring", // Ugadi - Conflict with Eid in user list, map priority? 
    // We will handle priority in logic. Eid takes precedence or we merge? 
    // Let's map 04-10 to 'eid' as it's a major distinct theme, or 'spring' for Ugadi. 
    // Given user listed both, let's alternate or pick one. 'eid' is distinct.
    "2026-04-14": "harvest", // Vaisakhi / Bihu

    // August
    "2026-08-07": "ganesh", // Ganesh Chaturthi
    "2026-08-17": "rakhi", // Raksha Bandhan
    "2026-08-26": "janmashtami", // Krishna Janmashtami

    // October
    "2026-10-03": "navaratri", // Start
    "2026-10-04": "navaratri", // Durga Puja
    "2026-10-05": "navaratri",
    "2026-10-06": "navaratri",
    "2026-10-07": "navaratri",
    "2026-10-08": "navaratri",
    "2026-10-09": "navaratri",
    "2026-10-10": "navaratri",
    "2026-10-11": "navaratri",
    "2026-10-12": "dussehra", // Dussehra

    // November
    "2026-11-01": "diwali",
    "2026-11-03": "harvest", // Chhath Puja (Sun/River -> Harvest theme fits well with gold/orange)

    // December
    "2026-12-25": "christmas",
};

export function getFestivalThemeId(date: Date): string | null {
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const year = date.getFullYear();

    const dateString = `${year}-${month}-${day}`;
    const fixedDateKey = `${month}-${day}`;

    // Check specific year first (Variable dates)
    if (VARIABLE_FESTIVALS[dateString]) {
        return VARIABLE_FESTIVALS[dateString];
    }

    // Check fixed dates
    if (FIXED_FESTIVALS[fixedDateKey]) {
        return FIXED_FESTIVALS[fixedDateKey];
    }

    return null;
}
