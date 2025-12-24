// Fallback season logic when no festival is active

export function getSeasonThemeId(date: Date): string {
    const month = date.getMonth(); // 0-11

    // User Schedule:
    // Winter: Dec (11), Jan (0), Feb (1)
    if (month === 11 || month === 0 || month === 1) {
        return "winter";
    }

    // Summer: March (2), April (3), May (4), June (5)
    // Note: We might want to sprinkle "spring" in March/April if defined, 
    // but User explicitly listed "Summer (March – June)". 
    // However, "Spring" visual was requested.
    // Let's refine: March often feels like Spring.
    if (month === 2 || month === 3) {
        // Let's use Spring for March/April as it's more visually distinct and requested ("Flower petals")
        // Summer "Dust/Heat" is better for May/June.
        return "spring";
    }

    if (month === 4 || month === 5) {
        return "summer";
    }

    // Rainy: July (6), Aug (7), Sept (8)
    if (month === 6 || month === 7 || month === 8) {
        return "monsoon";
    }

    // Autumn: Oct (9), Nov (10)
    if (month === 9 || month === 10) {
        return "autumn";
    }

    return "winter"; // Fallback
}
