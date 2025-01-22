"use client"

import React from "react"
import { Box, Typography, Rating } from "@mui/material"
import { useTheme } from "@mui/material/styles"
import PersonIcon from "@mui/icons-material/Person"

const testimonials = [
  {
    name: "John Doe",
    title: "Satisfied Customer",
    feedback:
      "The quality of parts and the delivery speed exceeded my expectations. I highly recommend their services!",
    rating: 5,
  },
  {
    name: "Jane Smith",
    title: "Happy Client",
    feedback:
      "The customer support team was so helpful. They guided me to find the perfect parts for my car.",
    rating: 4,
  },
  {
    name: "Ahmed Ali",
    title: "Loyal Customer",
    feedback:
      "Affordable pricing and a wide selection of spare parts. I wouldn't go anywhere else!",
    rating: 5,
  },
  {
    name: "Emily Davis",
    title: "Thrilled Customer",
    feedback:
      "This is the best platform for car spare parts. The entire experience was smooth and hassle-free.",
    rating: 4,
  },
  {
    name: "Michael Brown",
    title: "Frequent Buyer",
    feedback:
      "I always trust them for quality and reliability. They never disappoint.",
    rating: 5,
  },
  {
    name: "Sara Wilson",
    title: "Satisfied Customer",
    feedback:
      "Fantastic customer support and excellent product range. Highly recommended!",
    rating: 5,
  },
]

const TestimonialSection = () => {
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
        What Our Customers Say
      </Typography>

      <Box
        className='grid grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 xxl:grid-cols-3 gap-6'
        sx={{
          gap: 4,
        }}
      >
        {testimonials.map((testimonial, index) => (
          <Box
            key={index}
            className='flex flex-col items-center text-center p-6 rounded-lg shadow-lg'
            sx={{
              backgroundColor: theme.palette.background.paper,
              boxShadow: `0 4px 8px ${theme.palette.secondary.light}`,
            }}
          >
            <Box
              className='flex items-center justify-center'
              sx={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                backgroundColor: theme.palette.primary.light,
                color: theme.palette.background.paper,
              }}
            >
              <PersonIcon sx={{ fontSize: 40 }} />
            </Box>
            <Typography
              variant='h6'
              className='mt-4 font-semibold'
              sx={{ color: theme.palette.secondary.main }}
            >
              {testimonial.name}
            </Typography>
            <Typography
              variant='body2'
              className='text-sm italic'
              sx={{ color: theme.palette.text.secondary }}
            >
              {testimonial.title}
            </Typography>
            <Typography
              variant='body1'
              className='mt-4'
              sx={{ color: theme.palette.text.primary }}
            >
              {testimonial.feedback}
            </Typography>
            <Rating
              value={testimonial.rating}
              readOnly
              className='mt-4'
              sx={{ color: theme.palette.primary.light }}
            />
          </Box>
        ))}
      </Box>
    </section>
  )
}

export default TestimonialSection
