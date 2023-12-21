// ** MUI Imports
import Grid from '@mui/material/Grid'
import { forwardRef, useState } from 'react'
import CardTwitter from 'src/views/cards/CardTwitter'
import CardFacebook from 'src/views/cards/CardFacebook'
import CardLinkedIn from 'src/views/cards/CardLinkedIn'
import Card_04 from 'src/views/cards/Card_04'
import Card_05 from 'src/views/cards/Card_05'
import Card_06 from 'src/views/cards/Card_06'
import Card_07 from 'src/views/cards/Card_07'
import Card_08 from 'src/views/cards/Card_08'
import TableStickyHeader from 'src/views/tables/TableStickyHeader'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import DatePicker from 'react-datepicker'
import FormHelperText from '@mui/material/FormHelperText'

// ** Icons Imports
import Poll from 'mdi-material-ui/Poll'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'

// ** Custom Components Imports
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Icons Imports
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'

// ** Demo Components Imports
import Table from 'src/views/dashboard/Table'
import Trophy from 'src/views/dashboard/Trophy'
import TotalEarning from 'src/views/dashboard/TotalEarning'
import StatisticsCard from 'src/views/dashboard/StatisticsCard'
import WeeklyOverview from 'src/views/dashboard/WeeklyOverview'
import DepositWithdraw from 'src/views/dashboard/DepositWithdraw'
import SalesByCountries from 'src/views/dashboard/SalesByCountries'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import FormLayoutsSeparator from 'src/views/form-layouts/FormFilter'
// import TableStickyHeader from 'src/views/tables/TableStickyHeader'

const CustomInput = forwardRef((props, ref) => {
  return <TextField fullWidth {...props} inputRef={ref} label='Date' autoComplete='off' />
})

const Dashboard = () => {
  const [date, setDate] = useState(null)

  // ** States
  const [values, setValues] = useState({
    password: '',
    showPassword: false
  })

  const [confirmPassValues, setConfirmPassValues] = useState({
    password: '',
    showPassword: false
  })

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleConfirmPassChange = prop => event => {
    setConfirmPassValues({ ...confirmPassValues, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleClickConfirmPassShow = () => {
    setConfirmPassValues({ ...confirmPassValues, showPassword: !confirmPassValues.showPassword })
  }

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }
  return (
    <ApexChartWrapper>
      <DatePickerWrapper>
        <Grid container spacing={6}>
          {/* <Grid item xs={12} md={4}>
          <Trophy />
        </Grid>
        <Grid item xs={12} md={8}>
          <StatisticsCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <WeeklyOverview />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <TotalEarning />
        </Grid> */}
          <Grid item xs={12} md={6} lg={12}>
            <Grid container spacing={1}>
              {/* <Grid item xs={1}>
              <CardStatisticsVerticalComponent
                stats='$25'
                icon={<Poll />}
                color='success'
                // trendNumber='+42%'
                title='Total Profit'
                // subtitle='Weekly Profit'
              />
            </Grid>
            <Grid item xs={1}>
              <CardStatisticsVerticalComponent
                stats='$78'
                title='Refunds'
                trend='negative'
                color='secondary'
                // trendNumber='-15%'
                // subtitle='Past Month'
                icon={<CurrencyUsd />}
              />
            </Grid> */}
              <Grid item xs={1.5}>
                <CardTwitter />
              </Grid>
              <Grid item xs={1.5}>
                <CardFacebook />
              </Grid>
              <Grid item xs={1.5}>
                <CardLinkedIn />
              </Grid>
              <Grid item xs={1.5}>
                <Card_04 />
              </Grid>
              <Grid item xs={1.5}>
                <Card_05 />
              </Grid>
              <Grid item xs={1.5}>
                <Card_06 />
              </Grid>
              <Grid item xs={1.5}>
                <Card_07 />
              </Grid>
              <Grid item xs={1.5}>
                <Card_08 />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} lg={12}>
            <FormLayoutsSeparator />
            {/* <Card>
              <CardHeader title='Basic' titleTypographyProps={{ variant: 'h6' }} />
              <CardContent>
                <form onSubmit={e => e.preventDefault()}>
                  <Grid container spacing={1}>
                    <Grid item xs={3}>
                      <TextField fullWidth label='Enter Registration No.' placeholder='Leonard Carter' />
                      <TextField id='standard' label='Enter Registration No.' variant='standard' />
                    </Grid>
                    <Grid item xs={3}>
                      <TextField fullWidth label='Enter Policy No.' placeholder='Leonard Carter' />
                      <TextField id='standard' label='Enter Policy No.' variant='standard' />
                    </Grid>
                    <Grid item xs={3}>
                      <TextField
                      fullWidth
                      label='Enter PB Reference No.'
                      placeholder='Leonard Carter'
                      InputProps={{ style: { padding: '0px' } }}
                    />
                      <TextField id='standard' label='Enter PB Reference No.' variant='standard' />
                    </Grid>

                    <Grid item xs={2}>
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
                    <Grid item xs={1}>
                      <Box
                        sx={{
                          gap: 4,
                          marginTop: '8px',
                          display: 'flex',
                          flexWrap: 'wrap',
                          alignItems: 'center',
                          justifyContent: 'space-between'
                        }}
                      >
                        <Button type='submit' variant='contained' size='medium'>
                          Search
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card> */}
            {/* <SalesByCountries /> */}
          </Grid>
          {/* <Grid item xs={12} md={12} lg={8}>
          <DepositWithdraw />
        </Grid> */}
          <Grid item xs={12}>
            <Card>
              <CardHeader title='Add Claim' titleTypographyProps={{ variant: 'h6' }} />
              <TableStickyHeader />
            </Card>
          </Grid>
        </Grid>
      </DatePickerWrapper>
    </ApexChartWrapper>
  )
}

export default Dashboard
