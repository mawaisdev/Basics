import { HashLink as Link } from 'react-router-hash-link'

const Header = () => {
  return (
    <nav>
      <h1>Techo</h1>
      <main>
        <Link to={'/'}>Home</Link>
        <Link to={'/contact-us'}>Contact</Link>
        <Link to={'/#about'}>About</Link>
        <Link to={'/#brands'}>Brands</Link>
        <Link to={'/services'}>Services</Link>
      </main>
    </nav>
  )
}

export { Header }
