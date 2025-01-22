"use client"
import React, { useState, useEffect } from "react"
import { TextField, Button, Grid, Typography } from "@mui/material"

export default function FormComponent() {
  const [Year, setYear] = useState("")
  const [Make, setMake] = useState("")
  const [Model, setModel] = useState("")
  const [Email, setEmail] = useState("")
  const [Whatsappno, setWhatsappno] = useState("")
  const [formPartname, setFormPartname] = useState([])
  const [text, setText] = useState("")
  const [suggestion, setSuggestion] = useState([])
  const [Address, setAddress] = useState("")
  const [searchMake, setSearchMake] = useState("")
  const [recommend, setRecommend] = useState("")
  const [formMakeChange, setFormMakeChange] = useState("")
  const [Name, setName] = useState("")
  const [Code, setCode] = useState("")

  const ma = [
    "Ford",
    "Chrysler",
    "Chevrolet",
    "BMW",
    "Audi",
    "Toyota",
    "Nissan",
    "Honda",
    "Mazda",
    "Hyundai",
    "Mercedes-Benz",
    "Volkswagen",
    "Lexus",
    "Land Rover",
    "Jaguar",
    "Porsche",
    "Volvo",
    "Fiat",
    "Subaru",
    "Tesla",
    "Ferrari",
  ]
  const make = ma.sort()

  function handleYearChange(event: React.ChangeEvent<HTMLInputElement>) {
    setYear(event.target.value)
  }

  function handleMakeChange(event: React.ChangeEvent<HTMLInputElement>) {
    setMake(event.target.value)
  }

  function handleModelChange(event: React.ChangeEvent<HTMLInputElement>) {
    setModel(event.target.value)
  }

  function handleWhatsAppNoChange(event: React.ChangeEvent<HTMLInputElement>) {
    setWhatsappno(event.target.value)
  }

  function handleAddressChange(event: React.ChangeEvent<HTMLInputElement>) {
    setAddress(event.target.value)
  }

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value)
  }

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value)
  }

  function handleCodeChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCode(event.target.value)
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const today = new Date()
    const date =
      today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate()
    const time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    const dateTime = date + " " + time

    const response = await fetch(`/api/g_sheet`, {
      method: "POST",
      body: JSON.stringify({
        Timestamp: dateTime,
        brand: Make,
        contact: Code + Whatsappno,
        name: Name,
        description:
          "Customer Name: " +
          Name +
          "\n" +
          "Address: " +
          Address +
          "\n" +
          "Vehicle: " +
          Make +
          " " +
          Model +
          " " +
          Year +
          "\n" +
          "Part List: " +
          text,
        partList: text,
        email: Email,
        year: Year,
        model: Model,
        address: Address,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })

    alert("Form submitted. We will contact you shortly ;)")
    setName("")
    setCode("")
    setYear("")
    setMake("")
    setModel("")
    setAddress("")
    setEmail("")
    setText("")
    setWhatsappno("")
  }

  return (
    <div className='max-w-4xl mx-auto xs:px-2'>
      <div className='xs:py-0 my-5 md:mx-10'>
        <Typography
          variant='h4'
          className='font-bold text-center py-5 text-white bg-gray-800'
        >
          AUTO SPARE PARTS INQUIRY FORM
        </Typography>
        <form
          id='myForm'
          method='POST'
          onSubmit={handleSubmit}
          className='w-full px-8 py-8 xs:px-4 xs:py-3'
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label='Name'
                variant='outlined'
                fullWidth
                value={Name}
                onChange={handleNameChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label='Email (Optional)'
                variant='outlined'
                fullWidth
                value={Email}
                onChange={handleEmailChange}
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                label='Year'
                variant='outlined'
                fullWidth
                value={Year}
                onChange={handleYearChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label='Make'
                variant='outlined'
                fullWidth
                value={Make}
                onChange={handleMakeChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label='Model'
                variant='outlined'
                fullWidth
                value={Model}
                onChange={handleModelChange}
                required
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label='Code'
                variant='outlined'
                fullWidth
                value={Code}
                onChange={handleCodeChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label='WhatsApp No'
                variant='outlined'
                fullWidth
                value={Whatsappno}
                onChange={handleWhatsAppNoChange}
                required
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label='Location (Area, City, Country)'
                variant='outlined'
                fullWidth
                value={Address}
                onChange={handleAddressChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label='Part List (Optional)'
                variant='outlined'
                fullWidth
                multiline
                rows={4}
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                variant='contained'
                color='primary'
                type='submit'
                fullWidth
              >
                Submit Inquiry
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  )
}
