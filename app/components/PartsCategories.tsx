"use client"
import React, { useState } from "react"
import {
  Box,
  Button,
  Grid,
  Typography,
  Tabs,
  Tab,
  useTheme,
} from "@mui/material"
import Image from "next/image"

export default function CategoryTabs() {
  const [activeTab, setActiveTab] = useState<number>(0)
  const theme = useTheme()

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue)
  }

  const categories = [
    {
      label: "Interior",
      content: [
        {
          src: "/images/category/SeatCoversInterior.webp",
          label: "Seat Covers",
        },
        {
          src: "/images/category/ShiftKnobsInterior.webp",
          label: "Shift Knobs",
        },
        {
          src: "/images/category/SteeringWheelsInterior.png",
          label: "Steering wheels",
        },
        { src: "/images/category/DashKitsInterior.webp", label: "Dash kits" },
        { src: "/images/category/GaugesInterior.webp", label: "Gauge" },
        {
          src: "/images/category/BilletPedalsInterior.webp",
          label: "Billet Pedals",
        },
        { src: "/images/category/FloorMatsInterior.webp", label: "Floor Mats" },
        {
          src: "/images/category/InteriorTrimInterior.webp",
          label: "Interior Trim",
        },
      ],
    },
    {
      label: "Exterior",
      content: [
        { src: "/images/category/LightsExterior.webp", label: "Lights" },
        { src: "/images/category/MirrorsExterior.webp", label: "Mirrors" },
        {
          src: "/images/category/GrilleGuardsExterior.webp",
          label: "Grille Guards",
        },
      ],
    },
    {
      label: "Wheels & Tires",
      content: [
        { src: "/images/category/WheelCovers.webp", label: "Wheel Covers" },
        { src: "/images/category/Tires.webp", label: "Tires" },
        { src: "/images/category/Wheels.webp", label: "Wheels" },
      ],
    },
    {
      label: "Performance",
      content: [
        {
          src: "/images/category/TransmissionPerformance.webp",
          label: "Transmission",
        },
        {
          src: "/images/category/TurbosPerformance.webp",
          label: "Turbos & Superchargers",
        },
        {
          src: "/images/category/AirIntakePerformance.webp",
          label: "Air Intake & Fuel Delivery",
        },
      ],
    },
    {
      label: "Lighting",
      content: [
        { src: "/images/category/Headlights.webp", label: "Headlights" },
        { src: "/images/category/CarBulbs.webp", label: "Car bulbs" },
        { src: "/images/category/Taillights.webp", label: "Tail lights" },
      ],
    },
    {
      label: "Accessories",
      content: [
        {
          src: "/images/category/RadarDetectors.webp",
          label: "Radar Detectors",
        },
        { src: "/images/category/GPS.webp", label: "GPS Navigation Systems" },
        {
          src: "/images/category/Cameras.webp",
          label: "Cameras & Driver Safety",
        },
      ],
    },
    {
      label: "Repair Parts",
      content: [
        { src: "/images/category/BigBrakeKits.webp", label: "Big Brake Kits" },
        {
          src: "/images/category/BraidedBrake.webp",
          label: "Braided Brake Lines",
        },
        { src: "/images/category/BrakeCalipers.webp", label: "Brake Calipers" },
      ],
    },
    {
      label: "Cooling Systems",
      content: [
        {
          src: "/images/category/Antifreeze.webp",
          label: "Antifreeze & Additives",
        },
        { src: "/images/category/Intercoolers.webp", label: "Intercoolers" },
        { src: "/images/category/EnginePulleys.webp", label: "Engine Pulleys" },
      ],
    },
  ]

  return (
    <Box sx={{ maxWidth: "100%", bgcolor: "background.paper" }}>
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        variant='scrollable'
        scrollButtons='auto'
        sx={{
          "& .MuiTabs-indicator": {
            backgroundColor: theme.palette.primary.main,
          },
          "& .MuiTab-root": {
            color: theme.palette.text.primary,
            fontSize: "1rem",
            fontWeight: "600",
            textTransform: "none",
            margin: "0 1rem",
            "&.Mui-selected": {
              color: theme.palette.primary.main,
            },
          },
        }}
      >
        {categories.map((category, index) => (
          <Tab key={index} label={category.label} />
        ))}
      </Tabs>
      <Box>
        {categories[activeTab].content && (
          <Grid container spacing={2} sx={{ p: 3 }}>
            {categories[activeTab].content.map((item, index) => (
              <Grid
                item
                xs={6}
                sm={4}
                md={3}
                key={index}
                sx={{ textAlign: "center" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "130px",
                  }}
                >
                  <Image
                    alt={item.label}
                    src={item.src}
                    height={130}
                    width={130}
                    quality={100}
                    style={{ objectFit: "contain" }}
                  />
                </Box>
                <Typography variant='body2' sx={{ pt: 1 }}>
                  {item.label}
                </Typography>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Box>
  )
}
