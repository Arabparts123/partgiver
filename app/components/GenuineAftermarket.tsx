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
    <Box className='py-8 px-4 sm:px-5 xxs:px-3 xs:px-0 s:px-2'>
      {/* Header */}
      <Typography
        variant='h4'
        className='text-center font-bold my-12 xs:my-6 s:my-6 xxs:my-6'
        sx={{
          color: theme.palette.primary.main,
        }}
      >
        Genuine vs Aftermarket Parts
      </Typography>

      {/* Responsive Table */}
      <Box className='w-full overflow-x-auto xs:w-screen'>
        <table className='w-full table-auto border-separate border-spacing-0'>
          <thead>
            <tr>
              <th
                className='px-4 py-2 text-left text-xs font-semibold text-white border-b border-gray-300 sm:px-3 s:px-2'
                style={{ backgroundColor: theme.palette.primary.main }}
              >
                Attribute
              </th>
              <th
                className='px-4 py-2 text-left text-xs font-semibold text-white border-b border-gray-300 sm:px-3 s:px-2'
                style={{ backgroundColor: theme.palette.primary.main }}
              >
                Genuine Parts
              </th>
              <th
                className='px-4 py-2 text-left text-xs font-semibold text-white border-b border-gray-300 sm:px-3 s:px-2'
                style={{ backgroundColor: theme.palette.primary.main }}
              >
                Aftermarket Parts
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row, index) => (
              <tr key={index} className='odd:bg-gray-50 even:bg-gray-100'>
                <td className='px-4 py-3 text-sm font-medium text-gray-900 border-b border-gray-300 sm:px-3 s:px-2 max-w-[150px] break-words'>
                  {row.attribute}
                </td>
                <td className='px-4 py-3 text-sm text-gray-900 border-b border-gray-300 sm:px-3 s:px-2 max-w-[150px] break-words'>
                  {row.genuine}
                </td>
                <td className='px-4 py-3 text-sm text-gray-900 border-b border-gray-300 sm:px-3 s:px-2 max-w-[150px] break-words'>
                  {row.aftermarket}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>

      {/* Footer */}
      <Typography
        variant='body2'
        className='mt-4 text-center text-xs'
        sx={{ color: theme.palette.text.primary }}
      >
        After evaluating the pros and cons, choose the parts that suit your
        needs. We offer both genuine and aftermarket parts for your convenience.
      </Typography>
    </Box>
  )
}

export default PartsComparisonSection
