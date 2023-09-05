import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header, Home, ContactUs, Footer, Services } from './components/index'

import './styles/App.scss'
import './styles/Header.scss'
import './styles/Home.scss'
import './styles/Footer.scss'
import './styles/Contact.scss'
import './styles/mediaQuery.scss'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/services' element={<Services />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
