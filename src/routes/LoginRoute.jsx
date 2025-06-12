
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AppRoute } from './AppRoute';
import { Login } from '../pages/Login';

export const LoginRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= { <Login /> } />
        <Route path='/*' element= { <AppRoute /> } />
      </Routes>
    </BrowserRouter>
  )
}
