// ** MUI Imports
import React, { forwardRef, useState } from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { DatePicker } from '@mui/lab'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import LocalizationProvider from '@mui/lab/LocalizationProvider';


// ** Styled Component
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

// ** Demo Components Imports
import FormLayoutsBasic from 'src/views/form-layouts/FormLayoutsBasic'
import FormLayoutsIcons from 'src/views/form-layouts/FormLayoutsIcons'
import FormLayoutsSeparator from 'src/views/form-layouts/FormLayoutsSeparator'
import FormLayoutsAlignment from 'src/views/form-layouts/FormLayoutsAlignment'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'

const FormLayouts = () => {
  const CustomInput = forwardRef((props, ref) => {
    return <TextField fullWidth {...props} inputRef={ref} label='Date of Information' autoComplete='off' />
  })

  const [isHidden, setIsHidden] = useState(true)
  const [date, setDate] = useState(null)

  const toggleVisibility = () => {
    setIsHidden(!isHidden)
  }
  return (
    <DatePickerWrapper>
      {/* <Grid container spacing={6}>
        <Grid item xs={3}>
          <Box
            sx={{
              gap: 5,
              marginBottom: '10px',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Button type='submit' variant='contained' size='large'>
              Get Started!
            </Button>
            <Button size='large' type='submit' variant='contained' sx={{ width: '100%' }} onClick={toggleVisibility}>
              Fetch From Mail
            </Button>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box
            sx={{
              gap: 5,
              marginBottom: '10px',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Button type='submit' variant='contained' size='large'>
              Get Started!
            </Button>
            <Button size='large' type='submit' variant='contained' sx={{ width: '100%' }}>
              Fill Manually
            </Button>
          </Box>
        </Grid>
      </Grid>
      {isHidden ? null : (
        <Grid container spacing={6}>
          <Grid item xs={12} sm={4}>
            <DatePicker
              selected={date}
              showYearDropdown
              showMonthDropdown
              placeholderText='MM-DD-YYYY'
              customInput={<CustomInput />}
              id='form-layouts-separator-date'
              onChange={date => setDate(date)}
            />
          </Grid>
        </Grid>
      )} */}
      <Grid container spacing={6}>
        {/* <Grid item xs={12} md={6}>
          <FormLayoutsBasic />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormLayoutsIcons />
        </Grid> */}
        <Grid item xs={12}>
          <FormLayoutsSeparator />
        </Grid>
        {/* <Grid item xs={12}>
          <FormLayoutsAlignment />
        </Grid> */}
      </Grid>
    </DatePickerWrapper>
  )
}

export default FormLayouts
