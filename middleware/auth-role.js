import Cookies from 'js-cookie'

export default function ({ route, redirect }) {
  const token = Cookies.get('token')
  const role = Cookies.get('rol')

  if (!token) {
    return redirect('/')
  }

  const roleRoutes = {
    admin: ['/admin', '/admin/addCar', '/admin/grafic'],
    cliente: ['/cliente', '/cliente/billing', '/cliente/detail', '/cliente/detailCar', '/cliente/misReservas', '/cliente/favoritos']
  }

  const allowedRoutes = roleRoutes[role] || []
  if (!allowedRoutes.includes(route.path)) {
    return redirect('/unauthorized')
  }
}
