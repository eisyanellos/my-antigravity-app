/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#e29fbf",
          strong: "#d488ab",
          ink: "#7b264e",
          soft: "#EEFAF5",
          "soft-2": "#DCF3EA",
          border: "#B9E6D6",
          bright: "#d8e5a4",
        },
        "on-primary": "#FFFFFF",
        secondary: {
          DEFAULT: "#0D1117",
        },
        "on-secondary": "#FFFFFF",
        neutral: "#FFFFFF",
        surface: {
          DEFAULT: "#FFFFFF",
          2: "#FBFCFD",
          muted: "#F7F8FA",
          sunken: "#F2F4F7",
        },
        "on-surface": {
          DEFAULT: "#363C47",
          strong: "#0D1117",
          variant: "#5B6472",
          muted: "#697382",
        },
        outline: {
          DEFAULT: "#E7EAEF",
          strong: "#D6DBE3",
        },
        error: {
          DEFAULT: "#D61F26",
        },
        "on-error": "#FFFFFF",
      },
      borderRadius: {
        sm: "12px",
        md: "18px",
        lg: "26px",
        full: "9999px",
      },
      boxShadow: {
        card: "0 1px 3px rgba(13,17,23,.05), 0 6px 16px -10px rgba(13,17,23,.14)",
        raised: "0 2px 6px rgba(13,17,23,.04), 0 18px 44px -22px rgba(13,17,23,.22)",
        float: "0 4px 10px rgba(13,17,23,.05), 0 34px 70px -30px rgba(13,17,23,.28)",
        input: "0 1px 2px rgba(13,17,23,.04)",
      },
      maxWidth: {
        shell: "1180px",
        "shell-narrow": "880px",
      },
      fontFamily: {
        sans: [
          "'Plus Jakarta Sans'",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "'JetBrains Mono'",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      spacing: {
        section: "148px",
        "section-min": "84px",
        shell: "1180px",
        "shell-narrow": "880px",
        gutter: "40px",
        "gutter-min": "20px",
      },
    },
  },
  plugins: [],
};
