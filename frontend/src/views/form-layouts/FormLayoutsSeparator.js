// ** React Imports
import { forwardRef, useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import Select from '@mui/material/Select'

// ** Third Party Imports
import DatePicker from 'react-datepicker'

// ** Icons Imports
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'

const CustomInput = forwardRef((props, ref) => {
  return <TextField fullWidth {...props} inputRef={ref} label='Date of Information' autoComplete='off' />
})

const FormLayoutsSeparator = () => {
  // ** States
  const [language, setLanguage] = useState([])
  const [date, setDate] = useState(null)

  const [values, setValues] = useState({
    password: '',
    password2: '',
    showPassword: false,
    showPassword2: false
  })

  // Handle Password
  const handlePasswordChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  // Handle Confirm Password
  const handleConfirmChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowConfirmPassword = () => {
    setValues({ ...values, showPassword2: !values.showPassword2 })
  }

  const handleMouseDownConfirmPassword = event => {
    event.preventDefault()
  }

  // Handle Select
  const handleSelectChange = event => {
    setLanguage(event.target.value)
  }

  return (
    <Card>
      <CardHeader title='Add Claim' titleTypographyProps={{ variant: 'h6' }} />
      <Divider sx={{ margin: 0 }} />
      <form onSubmit={e => e.preventDefault()}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                1. Claim Details
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              {/* <TextField
                fullWidth
                label='Policy No.'
                placeholder='carterLeonard'
                slotProps={{ textField: { size: 'small' } }}
              /> */}
              {/* <TextField label='Size' id='outlined-size-small' defaultValue='Small' size='small' /> */}
              <TextField label='Policy No.' variant='standard' />
            </Grid>
            <Grid item xs={12} sm={3}>
              {/* <TextField fullWidth label='Claim No.' placeholder='carterleonard@gmail.com' /> */}
              <TextField label='Claim No.' variant='standard' />
            </Grid>
            <Grid item xs={12} sm={3}>
              {/* <TextField fullWidth label='Insurer Name' placeholder='carterLeonard' /> */}
              <TextField label='Insurer Name' variant='standard' />
            </Grid>
            <Grid item xs={12} sm={3}>
              {/* <TextField fullWidth label='Insurer Address' placeholder='carterleonard@gmail.com' /> */}
              <TextField label='Insurer Address' variant='standard' />
            </Grid>
            <Grid item xs={12} sm={3}>
              {/* <TextField fullWidth label='Appointed By' placeholder='carterLeonard' /> */}
              <TextField label='Appointed By' variant='standard' />
            </Grid>
            <Grid item xs={12} sm={3}>
              {/* <TextField fullWidth label='Garage Name' placeholder='carterleonard@gmail.com' /> */}
              <TextField label='Garage Name' variant='standard' />
            </Grid>
            {/* <Grid item xs={12}>
              <Divider sx={{ marginBottom: 0 }} />
            </Grid> */}
            {/* <Grid item xs={12}>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                2. Personal Info
              </Typography>
            </Grid> */}
            <Grid item xs={12} sm={3}>
              {/* <TextField fullWidth label='Garage Address Line 1' placeholder='Leonard' /> */}
              <TextField label='Garage Address Line 1' variant='standard' />
            </Grid>
            <Grid item xs={12} sm={3}>
              {/* <TextField fullWidth label='Garage Address Line 2' placeholder='Carter' /> */}
              <TextField label='Garage Address Line 2' variant='standard' />
            </Grid>
            <Grid item xs={12} sm={3}>
              {/* <TextField fullWidth label='Garage Mobile No. 1' placeholder='+1-123-356-8790' /> */}
              <TextField label='Garage Mobile No. 1' variant='standard' />
            </Grid>
            <Grid item xs={12} sm={3}>
              {/* <TextField fullWidth label='Garage Mobile No. 2' placeholder='+1-123-356-8790' /> */}
              <TextField label='Garage Mobile No. 2' variant='standard' />
            </Grid>
            <Grid item xs={12} sm={3}>
              {/* <TextField fullWidth label='Claim State' placeholder='carterLeonard' /> */}
              <TextField label='Claim State' variant='standard' />
            </Grid>
            <Grid item xs={12} sm={3}>
              {/* <TextField fullWidth label='Claim Office' placeholder='carterleonard@gmail.com' /> */}
              <TextField label='Claim Office' variant='standard' />
            </Grid>
            <Grid item xs={12} sm={3}>
              {/* <TextField fullWidth label='Claim Reference No.' placeholder='carterLeonard' /> */}
              <TextField label='Claim Reference No.' variant='standard' />
            </Grid>
            <Grid item xs={12} sm={3}>
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
            <Grid item xs={12} sm={3}>
              {/* <TextField fullWidth label='Survey Type' placeholder='carterleonard@gmail.com' /> */}
              <TextField label='Survey Type' variant='standard' />
            </Grid>
            {/* <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-select-label'>Country</InputLabel>
                <Select
                  label='Country'
                  defaultValue=''
                  id='form-layouts-separator-select'
                  labelId='form-layouts-separator-select-label'
                >
                  <MenuItem value='UK'>UK</MenuItem>
                  <MenuItem value='USA'>USA</MenuItem>
                  <MenuItem value='Australia'>Australia</MenuItem>
                  <MenuItem value='Germany'>Germany</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-multiple-select-label'>Language</InputLabel>
                <Select
                  multiple
                  value={language}
                  onChange={handleSelectChange}
                  id='form-layouts-separator-multiple-select'
                  labelId='form-layouts-separator-multiple-select-label'
                  input={<OutlinedInput label='Language' id='select-multiple-language' />}
                >
                  <MenuItem value='English'>English</MenuItem>
                  <MenuItem value='French'>French</MenuItem>
                  <MenuItem value='Spanish'>Spanish</MenuItem>
                  <MenuItem value='Portuguese'>Portuguese</MenuItem>
                  <MenuItem value='Italian'>Italian</MenuItem>
                  <MenuItem value='German'>German</MenuItem>
                  <MenuItem value='Arabic'>Arabic</MenuItem>
                </Select>
              </FormControl>
            </Grid>
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
            <Grid item xs={12} sm={4}>
              <TextField fullWidth label='Phone No.' placeholder='+1-123-456-8790' />
            </Grid> */}
          </Grid>
        </CardContent>
        <Divider sx={{ margin: 0 }} />
        <CardActions>
          <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
            Submit
          </Button>
          <Button size='large' color='secondary' variant='outlined'>
            Cancel
          </Button>
        </CardActions>
      </form>
    </Card>
  )
}

export default FormLayoutsSeparator
