// ** Icon imports
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'
import { useEffect } from 'react'

const navigation = () => {

  let data = {};
  useEffect(()=>{
    data = JSON.parse(localStorage.getItem("data"));

  },[])

  return  [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/'
    },
    {
      title: 'Add Claim',
      icon: AccountPlusOutline,
      path: '/add-claim'
    },
    
    {
      title: 'Login',
      icon: Login,
      path: '/pages/login',
      openInNewTab: true
    },
    {
      title: 'Register',
      icon: AccountPlusOutline,
      path: '/pages/register',
      openInNewTab: true
    },
    // {
    //   title: '',
    //   icon: AlertCircleOutline,
    //   path: '/pages/error',
    //   openInNewTab: true
    // },
    // {
    //   sectionTitle: 'User Interface'
    // },
    // {
    //   title: '',
    //   icon: FormatLetterCase,
    //   path: '/typography'
    // },
    // {
    //   title: '',
    //   path: '/icons',
    //   icon: GoogleCirclesExtended
    // },
    // {
    //   title: '',
    //   icon: CreditCardOutline,
    //   path: '/cards'
    // },
    // {
    //   title: '',
    //   icon: Table,
    //   path: '/tables'
    // },
    // {
    //   icon: CubeOutline,
    //   title: '',
    //   path: '/form-layouts'
    // }
  ]
}

export default navigation
