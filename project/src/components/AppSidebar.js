import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import {
  CSidebar,
  CSidebarBrand,
  CSidebarFooter,
  CSidebarHeader,
  CSidebarToggler,
} from '@coreui/react'
import { AppSidebarNav } from './AppSidebarNav'
import logo from '/logo.png'
import navigation from '../_nav'
import {jwtDecode} from 'jwt-decode' // Correction de l'importation de jwtDecode

const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)
  const location = useLocation()
  const currentPath = location.pathname

  const token = localStorage.getItem('token')
  const isAuthenticated = !!token
  let roles = [];

  if (token) {
    const decodedToken = jwtDecode(token)
    roles = decodedToken.role // Supposons que 'role' soit un tableau de rôles
    console.log(roles)
  }

  const hasBothRoles = roles.includes('GestAppartement') && roles.includes('GestBatiment');

  const filteredNavigation = navigation.filter(item => {
    if (!isAuthenticated) {
      // Afficher seulement Accueil, Login et Contactez-nous si l'utilisateur n'est pas connecté
      return item.name === 'Accueil' || item.name === 'Login' || item.name === 'Contactez-nous'
    } else {
      // Si l'utilisateur a les deux rôles, afficher tous les éléments de navigation


      // Cacher Accueil et Login si l'utilisateur est connecté
      if (item.name === 'Accueil' || item.name === 'Login') {
        return false
      }
      if (hasBothRoles) {
        return true;
      }
      // Cacher Users et Immeuble si le rôle est GestAppartement
      if (roles.includes('GestAppartement') && (item.name === 'Users' || item.name === 'Immeuble')) {
        return false
      }
      // Cacher Appartement si le rôle est GestBatiment
      if (roles.includes('GestBatiment') && item.name === 'Appartement') {
        return false
      }

      return true
    }
  })

  return (
    <CSidebar
      className="border-end"
      colorScheme="dark"
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
    >
      <CSidebarHeader className="border-bottom">
        <div className="sidebar-brand">
          <img src={logo} alt="Logo" height={80} />
        </div>
        <button
          className="d-lg-none"
          onClick={() => dispatch({ type: 'set', sidebarShow: false })}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </CSidebarHeader>

      <AppSidebarNav items={filteredNavigation} />

      <CSidebarFooter className="border-top d-none d-lg-flex">
        <CSidebarToggler
          onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
        />
      </CSidebarFooter>
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
