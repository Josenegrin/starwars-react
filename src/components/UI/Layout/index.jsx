import Footer from '../Footer'
import Header from '../Header'

const Layout = ({ children }) => {
  return (
    <div className='flex flex-col h-screen'>
      <div>
        <Header></Header>
      </div>
      <main className='h-full p-6 grid'>{children}</main>
      <footer className='h-24 p-2 flex justify-center items-center'>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout
