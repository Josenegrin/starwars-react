import { BrowserRouter } from 'react-router-dom'
import Layout from './components/UI/Layout'
import Routes from './routes'
import './styles/styles.css'
import './styles/tailwind.css'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes />
      </Layout>
    </BrowserRouter>
  )
}

export default App
