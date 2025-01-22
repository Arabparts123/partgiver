import type { Metadata } from "next"
import { Inter, Roboto } from "next/font/google"
import "./globals.css"
import Header from "./components/header/header1"
import Footer from "./components/Footer"
import { ThemeProvider, CssBaseline } from "@mui/material"
import theme from "../src/styles/theme"

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
})

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PartGiver",
  description: "A spare parts website",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        <ThemeProvider theme={theme}>
          <Header />
          <CssBaseline /> {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
