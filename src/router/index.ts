import Home from '../pages/home'
import About from '../pages/about'
// import Dashboard from './pages/Dashboard';
// import NotFound from './pages/NotFound';

export const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
    permissions: ['user']
  },
  {
    path: '/about',
    component: About,
    permissions: ['user', 'admin']
  },
  {
    path: '/dashboard',
    // component: Dashboard,
    permissions: ['admin']
  },
  {
    path: '*',
    // component: NotFound,
    permissions: ['user', 'admin']
  }
]
