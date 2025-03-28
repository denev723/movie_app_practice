export const theme = {
  colors: {
    primary: "#E50914", // 넷플릭스 빨간색
    secondary: "#B81D24", // 넷플릭스 어두운 빨간색
    background: {
      main: "#141414", // 넷플릭스 배경색
      dark: "#000000",
      light: "#181818",
      card: "#2F2F2F",
      hover: "#333333",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#B3B3B3",
      tertiary: "#767676",
    },
    border: "#404040",
    gradient: {
      dark: "linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0))",
      light: "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))",
    },
  },

  breakpoints: {
    mobile: "480px",
    tablet: "768px",
    laptop: "1024px",
    desktop: "1280px",
  },

  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    xxl: "48px",
  },

  borderRadius: {
    small: "4px",
    medium: "8px",
    large: "16px",
  },

  boxShadow: {
    card: "0 2px 10px rgba(0, 0, 0, 0.3)",
    hover: "0 5px 15px rgba(0, 0, 0, 0.5)",
  },

  transition: {
    default: "all 0.2s ease-in-out",
    slow: "all 0.3s ease-in-out",
    fast: "all 0.1s ease-in-out",
  },

  fontSize: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    md: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    xxl: "1.5rem", // 24px
    xxxl: "2rem", // 32px
  },

  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
  },
};

export default theme;
