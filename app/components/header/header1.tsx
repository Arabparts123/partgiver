"use client"

import Link from "next/link"
import React from "react"
import TemporaryDrawer from "./drawer"
import List from "@mui/icons-material/List"
import { useTheme } from "@mui/material/styles" // Correct import
import { Box } from "@mui/system"

const Header = () => {
  const theme = useTheme() // Access theme object

  return (
    <header>
      <nav>
        <Box
          className='flex justify-between mx-auto px-10 md:px-2 xs:px-3 s:px-3 py-3'
          sx={{
            backgroundColor: theme.palette.primary.main,
            borderBottomColor: theme.palette.primary.dark,
            boxShadow: `0px 2px 4px ${theme.palette.secondary.light}`,
          }}
        >
          {/* Logo and Temporary Drawer */}
          <div
            className='flex text-4xl md:text-2xl xs:text-xl font-sans font-extrabold italic items-center'
            style={{ color: theme.palette.primary.light }}
          >
            <TemporaryDrawer />
            <span>
              PARTS
              <span style={{ color: theme.palette.secondary.main }}>Giver</span>
            </span>
          </div>

          {/* Navbar content for larger screens */}
          <div className='flex items-center gap-7 xs:hidden xxs:hidden md:hidden'>
            <ul className='flex flex-row space-x-7'>
              <li className='nav-item py-3 hover:underline'>
                <Link
                  href='https://www.facebook.com/emirates.auto.parts/'
                  className='hover:opacity-75'
                  aria-label='Facebook'
                  style={{ color: theme.palette.background.default }}
                >
                  Lorem
                </Link>
              </li>
              <li className='nav-item py-3 hover:underline'>
                <Link
                  href='https://www.instagram.com/emiratescar_parts/'
                  className='hover:opacity-75'
                  aria-label='Instagram'
                  style={{ color: theme.palette.background.default }}
                >
                  Lorem
                </Link>
              </li>
              <li className='nav-item py-3 hover:underline'>
                <Link
                  href='https://twitter.com/emiratescarpart'
                  className='hover:opacity-75'
                  aria-label='Twitter'
                  style={{ color: theme.palette.background.default }}
                >
                  Lorem
                </Link>
              </li>
              <li className='nav-item py-3 hover:underline'>
                <Link
                  href='https://emirates-car.tumblr.com/'
                  className='hover:opacity-75'
                  aria-label='Tumblr'
                  style={{ color: theme.palette.background.default }}
                >
                  Lorem
                </Link>
              </li>
            </ul>
            <div className='flex gap-4'>
              <button
                className='px-3 py-2 font-bold rounded-xl'
                style={{
                  backgroundColor: theme.palette.primary.light,
                  color: theme.palette.background.paper,
                }}
              >
                CTA button 1
              </button>
              <button
                className='px-3 py-2 font-bold rounded-xl'
                style={{
                  backgroundColor: theme.palette.secondary.main,
                  color: theme.palette.background.paper,
                }}
              >
                CTA button 2
              </button>
            </div>
          </div>
        </Box>
      </nav>
    </header>
  )
}

export default Header
