// ** MUI Imports
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

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
  return (
    <DatePickerWrapper>
      <Grid container spacing={6}>
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
            {/* <Button type='submit' variant='contained' size='large'>
              Get Started!
            </Button> */}
            <Button size='large' type='submit' variant='contained' sx={{ width: '100%' }}>
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
            {/* <Button type='submit' variant='contained' size='large'>
              Get Started!
            </Button> */}
            <Button size='large' type='submit' variant='contained' sx={{ width: '100%' }}>
              Fill Manually
            </Button>
          </Box>
        </Grid>
      </Grid>
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
