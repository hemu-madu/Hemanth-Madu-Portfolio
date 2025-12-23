import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        'clay': '8px 8px 16px 0px rgba(163, 177, 198, 0.6), -8px -8px 16px 0px rgba(255, 255, 255, 0.5)',
        'clay-card': 'inset -8px -8px 16px 0px rgba(255, 255, 255, 0.8), inset 8px 8px 16px 0px rgba(163, 177, 198, 0.4), 10px 20px 30px rgba(0, 0, 0, 0.05)',
        'clay-btn': 'inset -4px -4px 8px 0px rgba(255, 255, 255, 0.8), inset 4px 4px 8px 0px rgba(163, 177, 198, 0.4), 6px 10px 15px rgba(66, 66, 66, 0.2)',
        'clay-btn-hover': 'inset -4px -4px 8px 0px rgba(255, 255, 255, 0.5), inset 4px 4px 8px 0px rgba(163, 177, 198, 0.2), 4px 6px 10px rgba(66, 66, 66, 0.15)',
        'neumorph': '9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255, 0.5)',
        'neumorph-pressed': 'inset 6px 6px 10px 0 rgba(163,177,198, 0.7), inset -6px -6px 10px 0 rgba(255,255,255, 0.8)',
        'neumorph-dark': '6px 6px 12px #0c0c0c, -6px -6px 12px #262626',
        'neumorph-pressed-dark': 'inset 4px 4px 8px #0c0c0c, inset -4px -4px 8px #262626',
        'neumorph-sm': '5px 5px 10px rgb(163,177,198,0.6), -5px -5px 10px rgba(255,255,255, 0.5)',
        'neumorph-dark-sm': '3px 3px 6px #0c0c0c, -3px -3px 6px #262626',
      },
      colors: {
        clay: {
          light: '#F8F9FE', // Very light blue/white
          primary: '#6D5DFC', // Vibrant purple from image
          secondary: '#E0C6FD',
          accent: '#FFB8B8', // Pastel red/pink
        },
        coral: {
          50: '#fef7f5',
          100: '#fdeee9',
          200: '#fbd5c8',
          300: '#f8baa7',
          400: '#f28965',
          500: '#FF6F61',
          600: '#e6594a',
          700: '#c04a3e',
          800: '#9a3c32',
          900: '#7f3129',
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
