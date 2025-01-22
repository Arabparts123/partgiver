"use client"
import React, { useState } from "react"
import { Button, Box, Typography, IconButton } from "@mui/material"
import ThumbUpIconOutline from "@mui/icons-material/ThumbUp"
import ThumbDownIconOutline from "@mui/icons-material/ThumbDown"

// FeedbackButtons Component
const FeedbackButtons: React.FC = () => {
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false) // State to track feedback submission

  // Handle feedback submission (Useful = 1, Not Useful = 0)
  const handleFeedback = async (feedback: number) => {
    try {
      const response = await fetch("/api/googleSheets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ feedback }),
      })

      if (response.ok) {
        // Set feedbackSubmitted to true to display the "Thank You" message
        setFeedbackSubmitted(true)
      } else {
        // Handle the error (e.g., display a message)
        console.error("Error submitting feedback:", response.statusText)
      }
    } catch (error) {
      // Handle any network errors
      console.error("Network error:", error)
    }
  }

  return (
    <Box sx={{ textAlign: "center", mt: 4 }}>
      {!feedbackSubmitted ? (
        <>
          <Typography variant='h6' sx={{ mb: 2 }}>
            Was this content useful?
          </Typography>
          {/* Thumbs-up Icon */}
          <IconButton
            color='primary'
            sx={{ mr: 2 }}
            onClick={() => handleFeedback(1)} // 1 for Useful
          >
            <ThumbUpIconOutline fontSize='large' />
          </IconButton>
          {/* Thumbs-down Icon */}
          <IconButton
            color='primary'
            onClick={() => handleFeedback(0)} // 0 for Not Useful
          >
            <ThumbDownIconOutline fontSize='large' />
          </IconButton>
        </>
      ) : (
        // Show "Thank you" message after feedback submission
        <Typography variant='h6' sx={{ mt: 2, color: "primary.main" }}>
          Thank you for your feedback!
        </Typography>
      )}
    </Box>
  )
}

export default FeedbackButtons
