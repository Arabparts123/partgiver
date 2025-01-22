"use client"

import React from "react"
import { Box, Typography, IconButton } from "@mui/material"
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import TwitterIcon from "@mui/icons-material/Twitter"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import { useTheme } from "@mui/material/styles"

const Footer = () => {
  const theme = useTheme()

  return (
    <footer>
      <Box
        className='flex flex-col sm:flex-row justify-between items-center py-6 px-10 sm:px-5 xxs:px-3'
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.background.default,
        }}
      >
        {/* Left: Brand Info */}
        <Box className='text-center sm:text-left mb-4 sm:mb-0'>
          <Typography variant='h6' sx={{ fontWeight: "bold" }}>
            PartsGiver
          </Typography>
          <Typography variant='body2'>
            Your one-stop destination for spare parts.
          </Typography>
        </Box>

        {/* Center: Navigation Links */}
        <Box className='hidden sm:flex flex-row gap-6'>
          <a
            href='#about'
            className='text-sm hover:underline'
            style={{ color: theme.palette.background.default }}
          >
            About Us
          </a>
          <a
            href='#services'
            className='text-sm hover:underline'
            style={{ color: theme.palette.background.default }}
          >
            Services
          </a>
          <a
            href='#contact'
            className='text-sm hover:underline'
            style={{ color: theme.palette.background.default }}
          >
            Contact
          </a>
          <a
            href='#privacy'
            className='text-sm hover:underline'
            style={{ color: theme.palette.background.default }}
          >
            Privacy Policy
          </a>
        </Box>

        {/* Right: Social Media Icons */}
        <Box className='flex justify-center sm:justify-end gap-4'>
          <IconButton
            aria-label='Facebook'
            href='https://www.facebook.com/emirates.auto.parts/'
            sx={{ color: theme.palette.secondary.main }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            aria-label='Instagram'
            href='https://www.instagram.com/emiratescar_parts/'
            sx={{ color: theme.palette.secondary.main }}
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            aria-label='Twitter'
            href='https://twitter.com/emiratescarpart'
            sx={{ color: theme.palette.secondary.main }}
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            aria-label='LinkedIn'
            href='https://linkedin.com/'
            sx={{ color: theme.palette.secondary.main }}
          >
            <LinkedInIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Bottom Bar */}
      <Box
        className='text-center py-3'
        sx={{
          backgroundColor: theme.palette.primary.dark,
          color: theme.palette.background.default,
        }}
      >
        <Typography variant='body2'>
          © {new Date().getFullYear()} PartsGiver. All rights reserved.
        </Typography>
      </Box>
    </footer>
  )
}

export default Footer
