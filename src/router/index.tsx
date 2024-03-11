import React from 'react'
import Home from '../pages/home'
import About from '../pages/about'
import { NotFound } from '../pages/not-found'
// import Dashboard from './pages/Dashboard';

export const routes = [
  { path: '/', element: <Home /> },
  { path: '/home', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '*', element: <NotFound /> }
]
