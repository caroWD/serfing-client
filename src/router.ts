import { createBrowserRouter } from 'react-router'
import { Dashboard } from '@/components/modules/dashboard'
import { Home } from '@/pages/Home'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Dashboard,
    children: [{ index: true, Component: Home }],
  },
])
