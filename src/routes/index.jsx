import { Routes as Switch, Route } from 'react-router-dom'
import HomePage from '../views/HomePage'
import NotFoundPage from '../views/NotFoundPage'

const Routes = () => {
  return (
    <Switch>
      <Route path='/' element={<HomePage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Switch>
  )
}

export default Routes
