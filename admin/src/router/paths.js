/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
export default [
  {
    path: '/dashboard',
    // Relative to /src/views
    name: 'Inicio',
    view: 'Dashboard'
  },
  {
    path: '/clientes',
    name: 'Clientes',
    view: 'Clientes'
  },
  {
    path: '/productos',
    name: 'Productos',
    view: 'Productos'
  },
  {
    path: '/user-profile',
    name: 'User Profile',
    view: 'UserProfile'
  },
  {
    path: '/table-list',
    name: 'Table List',
    view: 'TableList'
  },
  {
    path: '/typography',
    view: 'Typography'
  },
  {
    path: '/icons',
    view: 'Icons'
  },
  {
    path: '/maps',
    view: 'Maps'
  },
  {
    path: '/notifications',
    view: 'Notifications'
  },
  {
    path: '/upgrade',
    name: 'Upgrade to PRO',
    view: 'Upgrade'
  },
  {
    path: '/compras',
    name: 'Compras',
    view: 'Compras'
  },
  {
    path: '/promociones',
    name: 'Promociones',
    view: 'Promociones'
  },
  {
    path: '/noticias',
    name: 'Noticias',
    view: 'Noticias'
  },
  {
    path: '/index',
    name: 'Index',
    view: 'Index'
  },
  {
    path: '/admin',
    name: 'Admin',
    view: 'Admin'
  }
]
