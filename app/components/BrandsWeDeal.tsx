"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Grid, Card, CardActionArea, Typography, Box } from "@mui/material"

// Define the type for each post
type Post = {
  id: number
  logo: string
  name: string
  alt: string
}

// Props for the component
type CarBrandsGridProps = {
  posts: Post[]
}

const CarBrandsGrid: React.FC<CarBrandsGridProps> = ({ posts }) => {
  return (
    <Box sx={{ py: 4, px: 2 }}>
      <Grid container spacing={2} justifyContent='center'>
        {posts.map((post) => (
          <Grid item xs={6} sm={4} md={3} lg={2} key={post.id}>
            <Card
              elevation={3}
              sx={{
                textAlign: "center",
                padding: 2,
                borderRadius: 2,
                "&:hover": {
                  boxShadow: 6,
                },
              }}
            >
              <CardActionArea
                component={Link}
                href={`/search-by-make/${post.name}`}
                title={`${post.name} spare parts`}
              >
                <Box sx={{ display: "flex", justifyContent: "center", mb: 1 }}>
                  <Image
                    alt={post.alt}
                    src={`/images/car-logos/${post.logo}`}
                    width={50}
                    height={50}
                    style={{ objectFit: "contain" }}
                  />
                </Box>
                <Typography
                  variant='body2'
                  color='primary'
                  sx={{
                    textDecoration: "underline",
                    "&:hover": { color: "primary.dark" },
                  }}
                >
                  {post.name.toUpperCase()}
                </Typography>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default CarBrandsGrid
