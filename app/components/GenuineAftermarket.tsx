"use client"

import React from "react"
import { Box, Typography } from "@mui/material"
import { useTheme } from "@mui/material/styles"

const comparisonData = [
  {
    attribute: "Affordability",
    genuine: "More expensive",
    aftermarket: "More affordable",
  },
  {
    attribute: "Similarity to Genuine Parts",
    genuine: "Exact fit and specifications",
    aftermarket: "Some parts are similar to genuine parts",
  },
  {
    attribute: "Availability",
    genuine: "Sometimes harder to find",
    aftermarket: "Readily available",
  },
  {
    attribute: "Manufacturers",
    genuine: "One main manufacturer",
    aftermarket: "Multiple manufacturers",
  },
  {
    attribute: "Standardization",
    genuine: "Regularized and standardized",
    aftermarket: "Not regularized, duplicates of genuine parts",
  },
  {
    attribute: "Quality",
    genuine: "Best in quality",
    aftermarket: "Lower quality than genuine parts",
  },
  {
    attribute: "Warranty",
    genuine: "Comes with warranty",
    aftermarket: "No warranty",
  },
  {
    attribute: "Conclusion",
    genuine: "Best for those seeking reliability",
    aftermarket: "Best for those seeking affordability",
  },
]

const PartsComparisonSection = () => {
  const theme = useTheme()

  return (
    <section className='py-16 px-10 sm:px-5 xxs:px-3'>
      <Typography
        variant='h4'
        className='text-center font-bold mb-12'
        sx={{
          color: theme.palette.primary.main,
        }}
      >
        Genuine vs Aftermarket Parts
      </Typography>

      <Box className='overflow-x-auto'>
        <table className='min-w-full table-auto border-separate border-spacing-0'>
          <thead>
            <tr>
              <th
                className='px-6 py-3 text-left text-sm font-medium text-gray-700 border-b border-gray-200'
                style={{ backgroundColor: theme.palette.primary.main }}
              >
                Attribute
              </th>
              <th
                className='px-6 py-3 text-left text-sm font-medium text-gray-700 border-b border-gray-200'
                style={{ backgroundColor: theme.palette.primary.main }}
              >
                Genuine Parts
              </th>
              <th
                className='px-6 py-3 text-left text-sm font-medium text-gray-700 border-b border-gray-200'
                style={{ backgroundColor: theme.palette.primary.main }}
              >
                Aftermarket Parts
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row, index) => (
              <tr key={index} className='odd:bg-gray-50 even:bg-gray-100'>
                <td className='px-6 py-4 text-sm font-medium text-gray-900 border-b border-gray-200'>
                  {row.attribute}
                </td>
                <td className='px-6 py-4 text-sm text-gray-900 border-b border-gray-200'>
                  {row.genuine}
                </td>
                <td className='px-6 py-4 text-sm text-gray-900 border-b border-gray-200'>
                  {row.aftermarket}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>

      <Typography
        variant='body1'
        className='mt-6 text-center text-sm'
        sx={{ color: theme.palette.text.primary }}
      >
        However, after weighing the pros and cons of both, you can make the best
        choice for your needs. We provide both genuine and aftermarket parts.
      </Typography>
    </section>
  )
}

export default PartsComparisonSection
