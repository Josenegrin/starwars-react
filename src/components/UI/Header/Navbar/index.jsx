import Logo from '../../../../assets/logo.png'
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex justify-center items-center h-full'>
      <ul className='px-10 w-full flex justify-between'>
        <li>
          <Link to='/'>
            <img className='object-cover h-16' src={Logo} alt='Star Wars Logo' />
          </Link>
        </li>
        <li className='self-center hover:font-bold'>
          <NavLink className={({ isActive }) => (isActive ? 'font-extrabold' : '')} to='/'>
            Home
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
