const THEMES = {
  // --- SEASONS ---
  winter: {
    id: "winter",
    name: "Winter",
    colors: ["#ffffff", "#e0f7fa", "#b2ebf2", "#81d4fa"],
    shapes: ["snowflake", "circle"],
    motion: "fall",
    minSize: 6,
    maxSize: 15,
    minSpeed: 0.5,
    maxSpeed: 2,
    particleCount: 30,
    // Was 60 - Reduced for scroll
    opacity: { min: 0.6, max: 1 },
    glow: true
  },
  summer: {
    id: "summer",
    name: "Summer",
    colors: ["#fff9c4", "#ffecb3", "#ffe0b2", "#ffffff"],
    shapes: ["dust", "circle"],
    motion: "float",
    minSize: 3,
    maxSize: 8,
    minSpeed: 0.2,
    maxSpeed: 0.8,
    particleCount: 25,
    // Was 50
    opacity: { min: 0.3, max: 0.7 }
  },
  monsoon: {
    id: "monsoon",
    name: "Monsoon",
    colors: ["#90caf9", "#64b5f6", "#42a5f5", "#a7ffeb"],
    shapes: ["drop", "circle"],
    motion: "rain",
    minSize: 4,
    maxSize: 10,
    minSpeed: 4,
    maxSpeed: 8,
    particleCount: 45,
    // Was 90
    opacity: { min: 0.5, max: 0.9 }
  },
  spring: {
    id: "spring",
    name: "Spring",
    colors: ["#f8bbd0", "#f48fb1", "#c8e6c9", "#fff9c4"],
    shapes: ["flower", "petal"],
    motion: "float",
    minSize: 8,
    maxSize: 16,
    minSpeed: 0.5,
    maxSpeed: 1.5,
    particleCount: 25,
    // Was 45
    opacity: { min: 0.7, max: 1 }
  },
  autumn: {
    id: "autumn",
    name: "Autumn",
    colors: ["#ffcc80", "#ffab91", "#dcedc8", "#bcaaa4"],
    shapes: ["leaf", "circle"],
    motion: "fall",
    minSize: 10,
    maxSize: 20,
    minSpeed: 1,
    maxSpeed: 3,
    particleCount: 25,
    // Was 45
    opacity: { min: 0.7, max: 1 }
  },
  // --- FESTIVALS ---
  new_year: {
    id: "new_year",
    name: "New Year",
    colors: ["#ffd700", "#ff4081", "#00bcd4", "#76ff03", "#ffffff"],
    shapes: ["confetti", "star", "circle"],
    motion: "rise",
    minSize: 5,
    maxSize: 12,
    minSpeed: 2,
    maxSpeed: 5,
    particleCount: 60,
    // Was 120
    opacity: { min: 0.8, max: 1 },
    glow: true
  },
  harvest: {
    // Pongal, Makar Sankranti, Bihu, Lohri
    id: "harvest",
    name: "Harvest Festival",
    colors: ["#ff9800", "#ffeb3b", "#8bc34a", "#ffffff"],
    shapes: ["kite", "circle", "square"],
    motion: "float",
    minSize: 8,
    maxSize: 25,
    minSpeed: 0.5,
    maxSpeed: 2,
    particleCount: 20,
    // Was 40
    opacity: { min: 0.7, max: 1 }
  },
  republic: {
    // Republic Day, Independence Day
    id: "republic",
    name: "Patriotic",
    colors: ["#ff9933", "#ffffff", "#138808", "#000080"],
    // Saffron, White, Green, Navy
    shapes: ["flag_rect", "circle", "petal"],
    motion: "float",
    minSize: 6,
    maxSize: 14,
    minSpeed: 0.8,
    maxSpeed: 2,
    particleCount: 35,
    // Was 70
    opacity: { min: 0.8, max: 1 }
  },
  vasant: {
    // Vasant Panchami
    id: "vasant",
    name: "Vasant Panchami",
    colors: ["#ffeb3b", "#fff176", "#fff9c4", "#ffffff"],
    // Yellows
    shapes: ["flower", "petal"],
    motion: "float",
    minSize: 8,
    maxSize: 16,
    minSpeed: 0.5,
    maxSpeed: 1.5,
    particleCount: 25,
    // Was 50
    opacity: { min: 0.7, max: 1 }
  },
  shivaratri: {
    // Maha Shivaratri
    id: "shivaratri",
    name: "Maha Shivaratri",
    colors: ["#e0e0e0", "#cfd8dc", "#ffffff", "#b39ddb"],
    // Ash, light purple
    shapes: ["om", "circle", "sparkle"],
    motion: "rise",
    minSize: 6,
    maxSize: 18,
    minSpeed: 0.3,
    maxSpeed: 1,
    particleCount: 25,
    // Was 45
    opacity: { min: 0.5, max: 0.9 },
    glow: true
  },
  holi: {
    id: "holi",
    name: "Holi",
    colors: ["#e91e63", "#9c27b0", "#3f51b5", "#03a9f4", "#009688", "#ffeb3b", "#ff9800", "#f44336"],
    shapes: ["dust", "circle"],
    motion: "rise",
    // Like powder thrown up
    minSize: 4,
    maxSize: 12,
    minSpeed: 1,
    maxSpeed: 3,
    particleCount: 90,
    // Was 180
    opacity: { min: 0.6, max: 1 }
  },
  eid: {
    // Eid-ul-Fitr, Eid-ul-Adha
    id: "eid",
    name: "Eid",
    colors: ["#4db6ac", "#b2dfdb", "#ffd700", "#ffffff"],
    // Green, Gold, White
    shapes: ["crescent", "star", "circle"],
    motion: "float",
    minSize: 8,
    maxSize: 20,
    minSpeed: 0.3,
    maxSpeed: 1,
    particleCount: 30,
    // Was 55
    opacity: { min: 0.6, max: 1 },
    glow: true
  },
  rakhi: {
    // Raksha Bandhan
    id: "rakhi",
    name: "Raksha Bandhan",
    colors: ["#f44336", "#e91e63", "#ffeb3b", "#ffffff"],
    // Reds, Pinks, Golds
    shapes: ["flower", "circle", "star"],
    motion: "float",
    minSize: 6,
    maxSize: 14,
    minSpeed: 0.5,
    maxSpeed: 1.5,
    particleCount: 25,
    // Was 50
    opacity: { min: 0.7, max: 1 }
  },
  janmashtami: {
    // Krishna Janmashtami
    id: "janmashtami",
    name: "Janmashtami",
    colors: ["#0277bd", "#e1bee7", "#ffeb3b", "#4caf50"],
    // Blue (Krishna), Gold, Peacock Green
    shapes: ["feather", "note", "sparkle"],
    motion: "float",
    minSize: 8,
    maxSize: 20,
    minSpeed: 0.4,
    maxSpeed: 1.2,
    particleCount: 30,
    // Was 55
    opacity: { min: 0.6, max: 1 },
    glow: true
  },
  ganesh: {
    // Ganesh Chaturthi
    id: "ganesh",
    name: "Ganesh Chaturthi",
    colors: ["#ff9800", "#ffcc80", "#ef6c00", "#ffffff"],
    // Orange/Marigold
    shapes: ["modak", "flower", "circle"],
    motion: "float",
    minSize: 10,
    maxSize: 22,
    minSpeed: 0.5,
    maxSpeed: 1.5,
    particleCount: 30,
    // Was 55
    opacity: { min: 0.7, max: 1 }
  },
  navaratri: {
    // Navaratri / Garba
    id: "navaratri",
    name: "Navaratri",
    colors: ["#e91e63", "#9c27b0", "#ff5722", "#ffeb3b"],
    // Vibrant Garba colors
    shapes: ["circle", "star", "sparkle"],
    // Abstract rhythmic shapes
    motion: "spiral",
    minSize: 5,
    maxSize: 12,
    minSpeed: 1,
    maxSpeed: 3,
    particleCount: 40,
    // Was 80
    opacity: { min: 0.6, max: 1 },
    glow: true
  },
  dussehra: {
    // Vijaya Dashami
    id: "dussehra",
    name: "Dussehra",
    colors: ["#ffd700", "#ff6f00", "#ffffff"],
    // Gold, Orange
    shapes: ["sparkle", "star", "circle"],
    motion: "rise",
    minSize: 4,
    maxSize: 10,
    minSpeed: 1,
    maxSpeed: 4,
    particleCount: 35,
    // Was 70
    opacity: { min: 0.7, max: 1 },
    glow: true
  },
  diwali: {
    id: "diwali",
    name: "Diwali",
    colors: ["#ffd700", "#ffab00", "#ff6d00", "#ffffff"],
    // Gold, Orange, White light
    shapes: ["lamp", "sparkle", "circle"],
    motion: "rise",
    minSize: 6,
    maxSize: 15,
    minSpeed: 0.5,
    maxSpeed: 2,
    particleCount: 45,
    // Was 90
    opacity: { min: 0.7, max: 1 },
    glow: true
  },
  christmas: {
    id: "christmas",
    name: "Christmas",
    colors: ["#ffffff", "#d32f2f", "#388e3c", "#ffd700"],
    shapes: ["snowflake", "star", "circle"],
    motion: "fall",
    minSize: 5,
    maxSize: 12,
    minSpeed: 1,
    maxSpeed: 3,
    particleCount: 35,
    // Was 70
    opacity: { min: 0.7, max: 1 },
    glow: true
  },
  love: {
    // Valentine's, Anniversaries
    id: "love",
    name: "Love",
    colors: ["#e91e63", "#ffcdd2", "#ffffff"],
    shapes: ["circle", "petal"],
    // Simplified hearts as petals/circles for simplicity
    motion: "float",
    minSize: 6,
    maxSize: 15,
    minSpeed: 0.5,
    maxSpeed: 1.5,
    particleCount: 25,
    // Was 50
    opacity: { min: 0.6, max: 1 }
  }
};
export {
  THEMES
};
