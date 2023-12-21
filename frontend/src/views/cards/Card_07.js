// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import Heart from 'mdi-material-ui/Heart'
import Facebook from 'mdi-material-ui/Facebook'
import ShareVariant from 'mdi-material-ui/ShareVariant'

const Card_07 = () => {
  return (
    <Card sx={{ border: 0, boxShadow: 0, color: 'common.white', backgroundColor: 'primary.main' }}>
      <CardContent sx={{ padding: theme => `${theme.spacing(1.2, 1.2, 6.5)} !important` }}>
        <Typography variant='h6' sx={{ display: 'flex', alignItems: 'center', color: 'common.white' }}>
          {/* <Facebook sx={{ marginRight: 2.5 }} /> */}
          54
        </Typography>
        <Typography variant='body2' sx={{ color: 'common.white' }}>
          Payment Pending
        </Typography>
        {/* <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
            <Avatar alt='Eugene Clarke' src='/images/avatars/1.png' sx={{ width: 34, height: 34, marginRight: 2.75 }} />
            <Typography variant='body2' sx={{ color: 'common.white' }}>
              Eugene Clarke
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mr: 3.5 }}>
              <Heart sx={{ marginRight: 1.25 }} />
              <Typography variant='body2' sx={{ color: 'common.white' }}>
                3.2k
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ShareVariant sx={{ marginRight: 1.25 }} />
              <Typography variant='body2' sx={{ color: 'common.white' }}>
                49
              </Typography>
            </Box>
          </Box>
        </Box> */}
      </CardContent>
    </Card>
  )
}

export default Card_07
