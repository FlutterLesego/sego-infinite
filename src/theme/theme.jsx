const theme = {
  colors: {
    primary: "#128FC8",
    primaryDark: "#202237",
    primaryLight: "#e1e9fe",
    secondary: "#FFD95A",
    secondaryDark: "#C07F00",
    background: "#ffffff",
    backgroundDark: "#FFFBF5",
    button: "#b8c4f5",
    circle: "#e58d66",
    circleLarge: "#b8efc4",
    text: "#38404e",
    textDark: "",
    white: "#ffffff",
    dark: "#000000",
    light: "#637381",
    success: "#00c851",
    error: "#ff4842",
    warning: "#ffbb33",
  },

  spacing: {
    xs: "4px",
    sm: "8px",
    md: "12px",
    lg: "20px",
    xlg: "28px",
    xxlg: "42px",
  },

  padding: {
    xs: "4px 4px",
    sm: "8px 8px",
    md: "12px 12px",
    lg: "18px 18px",
    xlg: "28px 28px",
    xxlg: "42px 42px",
  },

  radius: {
    sm: "4px",
    md: "8px",
    lg: "14px",
  },

  breakpoints: {
    phone: "@media screen and (min-width: 360px)",
    tablet: "@media screen and (min-width: 768px)",
    laptop: "@media screen and (min-width: 1024px)",
    desktop: "@media screen and (min-width: 1280px)",
  },

  transitions: {
    easeInOut: "all 0.5s ease-in-out",
    easeInOutCubicBezier: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  },
};

export { theme };
