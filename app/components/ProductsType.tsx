"use client"

import React from "react"
import { Box, Typography } from "@mui/material"
import { useTheme } from "@mui/material/styles"
import NewReleasesIcon from "@mui/icons-material/NewReleases" // New Parts icon
import SwapHorizIcon from "@mui/icons-material/SwapHoriz" // Used Parts icon
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation" // Original Parts icon
import BuildIcon from "@mui/icons-material/Build" // Aftermarket Parts icon

const partCategories = [
  {
    name: "New Parts",
    description: "Brand new, high-quality parts for your vehicle.",
    icon: <NewReleasesIcon sx={{ fontSize: 50 }} />,
  },
  {
    name: "Used Parts",
    description: "Gently used, inspected, and reliable parts.",
    icon: <SwapHorizIcon sx={{ fontSize: 50 }} />,
  },
  {
    name: "Original Parts",
    description: "Genuine parts from the manufacturer for perfect fit.",
    icon: <LocalGasStationIcon sx={{ fontSize: 50 }} />,
  },
  {
    name: "Aftermarket Parts",
    description: "Affordable, high-performance parts from third-party brands.",
    icon: <BuildIcon sx={{ fontSize: 50 }} />,
  },
]

const PartCategoriesSection = () => {
  const theme = useTheme()

  return (
    <section className='py-16 px-10 sm:px-5 xxs:px-3 xs:px-3 s:px-3 '>
      <Typography
        variant='h4'
        className='text-center font-bold my-12 xs:my-6 s:my-6 xxs:my-6'
        sx={{
          color: theme.palette.primary.main,
        }}
      >
        Our Parts Categories
      </Typography>

      <Box
        className='grid grid-cols-4 sm:grid-cols-2 xs:grid-cols-2 s:grid-cols-1 xxs:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xxl:grid-cols-4 gap-6'
        sx={{
          gap: 4,
        }}
      >
        {partCategories.map((category, index) => (
          <Box
            key={index}
            className='flex flex-col items-center text-center p-6 rounded-lg shadow-lg'
            sx={{
              backgroundColor: theme.palette.background.paper,
              boxShadow: `0 4px 8px ${theme.palette.secondary.light}`,
            }}
          >
            <Box
              className='flex items-center justify-center mb-4'
              sx={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                backgroundColor: theme.palette.primary.light,
                color: theme.palette.background.paper,
              }}
            >
              {category.icon}
            </Box>
            <Typography
              variant='h6'
              className='font-semibold'
              sx={{ color: theme.palette.secondary.main }}
            >
              {category.name}
            </Typography>
            <Typography
              variant='body2'
              className='mt-4 text-sm'
              sx={{ color: theme.palette.text.primary }}
            >
              {category.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </section>
  )
}

export default PartCategoriesSection
