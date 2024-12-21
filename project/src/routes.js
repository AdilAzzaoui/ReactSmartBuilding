import React from 'react';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Colors = React.lazy(() => import('./views/theme/colors/Colors'));
const Typography = React.lazy(() => import('./views/theme/typography/Typography'));
const Etage1 = React.lazy(() => import('./views/theme/colors/Etage1'));
const Etage2 = React.lazy(() => import('./views/theme/colors/Etage2'));
const Etage3 = React.lazy(() => import('./views/theme/colors/Etage3'));
const Etage4 = React.lazy(() => import('./views/theme/colors/Etage4'));
const Etage5 = React.lazy(() => import('./views/theme/colors/Etage5'));
const Etage6 = React.lazy(() => import('./views/theme/colors/Etage6'));
const Etage7 = React.lazy(() => import('./views/theme/colors/Etage7'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
const Login = React.lazy(() => import('./views/pages/login/Login'));
const ForgotPass = React.lazy(() => import('./views/pages/forgotPassword/ForgotPasswordForm'));
const UserAppartements = React.lazy(() => import('./views/Appartement/UserAppartements'));

const Etage = React.lazy(() => import('./views/etage/Etage'));
const Users = React.lazy(() => import('./views/users/Users'));
const Appartements = React.lazy(() => import('./views/notGestionnaidApp/AppNotGest'));
const Chambres = React.lazy(() => import('./views/Chambre/Chambre'));
// Base
const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'));
const Immeuble = React.lazy(() => import('./views/immeuble/Immeuble'));
const ChangePassword = React.lazy(() => import('./views/ChangePassword/ChangePasswordForm'));
const ResetPassword = React.lazy(() => import('./views/pages/resetPassword/ResetPassword'));

const routes = [
  { path: '/', exact: true, name: 'Home', element: Dashboard}, // Redirection ici
  { path: '/etage1', name: 'Etage1', element: Etage1 },
  { path: '/immeuble', name: 'Immeuble', element: Immeuble , protected: true},
  { path: '/updatePassword', name: 'UpdatePassword', element: ChangePassword , protected: true},
  { path: '/userApp', name: 'UserApp', element: UserAppartements , protected: true},
  { path: '/forgotPassword', name: 'ForgotPass', element: ForgotPass , protected: false},
  { path: '/resetPassword', name: 'ResetPassword', element: ResetPassword },

  { path: '/etage2', name: 'Etage2', element: Etage2 },
  { path: '/etage3', name: 'Etage3', element: Etage3 },
  { path: '/etage4', name: 'Etage4', element: Etage4 },
  { path: '/etage5', name: 'Etage5', element: Etage5 },
  { path: '/etage6', name: 'Etage6', element: Etage6 },
  { path: '/etage7', name: 'Etage7', element: Etage7 },
  { path: '/login', name: 'Login', element: Login , protected: false},
  { path: '/dashboard', name: 'Dashboard', element: Dashboard},
  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors , protected: true},
  { path: '/base/accordion', name: 'Accordion', element: Accordion },
  { path: '/register', name: 'Register', element: Register , protected: false},
  { path: '/users', name: 'Users', element: Users , protected: true},
  { path: '/notGestionnedAppartement/:email', name: 'Appartements', element: Appartements , protected: true },
  { path: '/appartement/:appartementId/chambre/:chambreId', name: 'Chambre', element: Chambres , protected: true},


  { path: '/etage/:id', name: 'Etage', element: Etage , protected: true},
];

export default routes;
