import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Cyberpunk theme colors
        "cyber-black": "#000000", // True AMOLED black
        "cyber-purple": "#1a1025",
        "cyber-dark": "#0a0a12",
        "neon-blue": "#00f0ff",
        "neon-pink": "#ff00ff",
        "neon-green": "#00ff9f",
        "neon-yellow": "#ffff00",
        "neon-purple": "#bf00ff",
        "glass-bg": "rgba(10, 10, 18, 0.7)",
        "card-bg": "rgba(255, 255, 255, 0.05)", // Transparent card background
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        "neon-flicker": {
          "0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%": {
            textShadow: "0 0 5px #00f0ff, 0 0 10px #00f0ff, 0 0 15px #00f0ff, 0 0 20px #00f0ff",
          },
          "20%, 24%, 55%": {
            textShadow: "none",
          },
        },
        "circuit-flow": {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "100% 100%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        "blink-caret": {
          "from, to": { borderColor: "transparent" },
          "50%": { borderColor: "#00f0ff" },
        },
        "rotate-glow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        // New animations
        "circuit-pulse": {
          "0%": { opacity: "0.1" },
          "50%": { opacity: "0.3" },
          "100%": { opacity: "0.1" },
        },
        "glow-expand": {
          "0%": { boxShadow: "0 0 0px rgba(0, 240, 255, 0.5)" },
          "100%": { boxShadow: "0 0 15px rgba(0, 240, 255, 0.8)" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        "glitch-text": {
          "0%": {
            textShadow:
              "0.05em 0 0 rgba(255, 0, 255, 0.75), -0.05em -0.025em 0 rgba(0, 255, 255, 0.75), -0.025em 0.05em 0 rgba(0, 255, 0, 0.75)",
          },
          "14%": {
            textShadow:
              "0.05em 0 0 rgba(255, 0, 255, 0.75), -0.05em -0.025em 0 rgba(0, 255, 255, 0.75), -0.025em 0.05em 0 rgba(0, 255, 0, 0.75)",
          },
          "15%": {
            textShadow:
              "-0.05em -0.025em 0 rgba(255, 0, 255, 0.75), 0.025em 0.025em 0 rgba(0, 255, 255, 0.75), -0.05em -0.05em 0 rgba(0, 255, 0, 0.75)",
          },
          "49%": {
            textShadow:
              "-0.05em -0.025em 0 rgba(255, 0, 255, 0.75), 0.025em 0.025em 0 rgba(0, 255, 255, 0.75), -0.05em -0.05em 0 rgba(0, 255, 0, 0.75)",
          },
          "50%": {
            textShadow:
              "0.025em 0.05em 0 rgba(255, 0, 255, 0.75), 0.05em 0 0 rgba(0, 255, 255, 0.75), 0 -0.05em 0 rgba(0, 255, 0, 0.75)",
          },
          "99%": {
            textShadow:
              "0.025em 0.05em 0 rgba(255, 0, 255, 0.75), 0.05em 0 0 rgba(0, 255, 255, 0.75), 0 -0.05em 0 rgba(0, 255, 0, 0.75)",
          },
          "100%": {
            textShadow:
              "-0.025em 0 0 rgba(255, 0, 255, 0.75), -0.025em -0.025em 0 rgba(0, 255, 255, 0.75), -0.025em -0.05em 0 rgba(0, 255, 0, 0.75)",
          },
        },
        ripple: {
          "0%": { transform: "scale(0)", opacity: "1" },
          "100%": { transform: "scale(4)", opacity: "0" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-right": {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "book-appear": {
          "0%": { opacity: "0", transform: "translateY(20px) scale(0.9)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
      },
      animation: {
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "neon-flicker": "neon-flicker 2s infinite alternate",
        "circuit-flow": "circuit-flow 20s linear infinite",
        float: "float 6s ease-in-out infinite",
        typing: "typing 3.5s steps(40, end), blink-caret .75s step-end infinite",
        "rotate-glow": "rotate-glow 2s linear infinite",
        shimmer: "shimmer 3s linear infinite",
        // New animations
        "circuit-pulse": "circuit-pulse 4s ease-in-out infinite",
        "glow-expand": "glow-expand 0.3s ease-out forwards",
        scanline: "scanline 2s linear infinite",
        "glitch-text": "glitch-text 2.5s infinite",
        ripple: "ripple 0.6s linear",
        "fade-in-up": "fade-in-up 0.6s ease-out",
        "fade-in-right": "fade-in-right 0.6s ease-out",
        "book-appear": "book-appear 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards",
      },
      backgroundImage: {
        "circuit-pattern": "url('/images/circuit-pattern.png')",
        "cyber-grid":
          "linear-gradient(rgba(0, 240, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.05) 1px, transparent 1px)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "neon-blue": "0 0 5px #00f0ff, 0 0 10px #00f0ff",
        "neon-pink": "0 0 5px #ff00ff, 0 0 10px #ff00ff",
        "neon-green": "0 0 5px #00ff9f, 0 0 10px #00ff9f",
        "neon-glow":
          "0 0 10px rgba(0, 240, 255, 0.7), 0 0 20px rgba(0, 240, 255, 0.5), 0 0 30px rgba(0, 240, 255, 0.3)",
      },
      textShadow: {
        "neon-blue": "0 0 3px #00f0ff, 0 0 5px rgba(0, 240, 255, 0.5)",
        "neon-pink": "0 0 3px #ff00ff, 0 0 5px rgba(255, 0, 255, 0.5)",
        "neon-green": "0 0 3px #00ff9f, 0 0 5px rgba(0, 255, 159, 0.5)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      borderWidth: {
        "1": "1px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config

