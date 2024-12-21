import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilBuilding } from '@coreui/icons'
import {
  cilContact,
  cilAccountLogout,
  cilUser,
  cilHome,
  cilEnvelopeOpen,
  //cilRaspberry,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Accueil',
    to: '/dashboard',
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
    badge: {
      color: 'info',
    },
  },

  {
    component: CNavItem,
    name: '',
    to: '',
    badge: {
      color: 'info',
    },
  },
  {
    component: CNavItem,
    name: 'Immeuble',
    to: 'theme/colors',
    icon: <CIcon icon={cilBuilding} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      /*text: 'NEW',*/
    },
  },



  {
    component: CNavItem,
    name: 'Login',
    to: '/login',
    icon: <CIcon icon={cilUser} customClassName="nav-icon"/>,
    badge: {
      color: 'info',
    },
  },
  {
    component: CNavItem,
    name: 'Users',
    to: '/users',
    icon: <CIcon icon={cilContact} customClassName="nav-icon"/>,
    badge: {
      color: 'info',
    },
  },

  {
    component: CNavItem,
    name: 'Contactez-nous',
    to: '/base/accordion',
    icon: <CIcon icon={cilEnvelopeOpen} customClassName="nav-icon"/>,
    badge: {
      color: 'info',
    },
  },
  {
    component: CNavItem,
    name: 'Appartement',
    to: `/userApp`,
    icon: <CIcon icon={cilBuilding} customClassName="nav-icon" />,
    badge: {
      color: 'info',
    },
  },
  {
    component: CNavItem,
    name: 'Logout',
    to: '/logout',
    icon: <CIcon icon={cilAccountLogout}  customClassName="nav-icon"/>,
    badge: {
      color: 'info',
    },
  },


]

export default _nav
