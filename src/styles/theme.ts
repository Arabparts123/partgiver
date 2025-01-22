"use client"

import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    primary: {
      light: "#809461", // Light green for subtle hover effects
      main: "#155a2c", // Primary green for CTAs or key elements
      dark: "#05160c", // Dark green for headers or footers
      contrastText: "#ffffff", // White for text on primary buttons
    },
    secondary: {
      light: "#e7c18a", // Light beige for accents or dividers
      main: "#c3240d", // Vibrant red for prominent CTAs or alerts
      dark: "#5e3e2b", // Earthy brown for borders or modal backgrounds
      contrastText: "#ffffff", // White for text on secondary buttons
    },
    background: {
      default: "#f9f8f4", // Neutral light background
      paper: "#ffffff", // White for cards or containers
    },
    text: {
      primary: "#342b21", // Dark brown for primary text
      secondary: "#44403c", // Dark gray for secondary text or metadata
    },
    divider: "#d3d3d3", // Chrome-like light gray for dividers and separators
  },
  typography: {
    fontFamily: "var(--font-roboto)",
    h1: {
      fontSize: 35,
      fontWeight: 700,
      color: "#1f4e78", // Metallic blue for main headings
    },
    h2: {
      fontSize: 28,
      fontWeight: 700,
      color: "#1f4e78", // Metallic blue for subheadings
    },
    h3: {
      fontSize: 22,
      fontWeight: 700,
      color: "#342b21", // Dark brown for tertiary headings
    },
    h4: {
      fontSize: 18,
      fontWeight: 700,
      color: "#342b21",
    },
    h5: {
      fontSize: 15,
      fontWeight: 700,
      color: "#44403c", // Subtle dark gray for smaller headings
    },
    h6: {
      fontSize: 12,
      fontWeight: 700,
      color: "#44403c",
    },
    body1: {
      fontSize: 16,
      fontWeight: 400,
      color: "#342b21", // Dark brown for main body text
    },
    body2: {
      fontSize: 14,
      fontWeight: 400,
      color: "#44403c", // Dark gray for secondary body text
    },
  },
  spacing: 8,
})

export default theme
