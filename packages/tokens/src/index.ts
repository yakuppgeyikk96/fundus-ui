// ============================================
// Fundus UI Design Tokens - TypeScript Exports
// ============================================

export const tokens = {
  colors: {
    primary: "#0070f3",
    primaryHover: "#0051cc",
    primaryLight: "#e6f2ff",
    secondary: "#6c757d",
    secondaryHover: "#5a6268",
    success: "#28a745",
    danger: "#dc3545",
    warning: "#ffc107",
    info: "#17a2b8",
    white: "#ffffff",
    black: "#000000",
    gray100: "#f8f9fa",
    gray200: "#e9ecef",
    gray300: "#dee2e6",
    gray400: "#ced4da",
    gray500: "#adb5bd",
    gray600: "#6c757d",
    gray700: "#495057",
    gray800: "#343a40",
    gray900: "#212529",
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    "2xl": "48px",
  },
  typography: {
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontFamilyMono:
      "'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace",
    fontSize: {
      xs: "10px",
      sm: "12px",
      base: "14px",
      lg: "16px",
      xl: "20px",
      "2xl": "24px",
      "3xl": "32px",
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.75,
    },
  },
  borderRadius: {
    none: "0",
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "16px",
    full: "9999px",
  },
  shadows: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
  },
  transitions: {
    fast: "150ms",
    base: "200ms",
    slow: "300ms",
  },
} as const;

// Type exports for better TypeScript support
export type Tokens = typeof tokens;
export type ColorToken = keyof typeof tokens.colors;
export type SpacingToken = keyof typeof tokens.spacing;
export type FontSizeToken = keyof typeof tokens.typography.fontSize;
export type FontWeightToken = keyof typeof tokens.typography.fontWeight;
export type LineHeightToken = keyof typeof tokens.typography.lineHeight;
export type BorderRadiusToken = keyof typeof tokens.borderRadius;
export type ShadowToken = keyof typeof tokens.shadows;
export type TransitionToken = keyof typeof tokens.transitions;
