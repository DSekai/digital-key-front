import './layout.css'

export const Navbar = () => {
  return (
    <nav className='navbar'>

      <div className="main">
        <a href="">
          <svg viewBox='0 0 32 32' className='menu-logo' />
        </a>
        <div className="options">
          <p>Store</p>
          <p>About</p>
          <p>Community</p>
          <p>Support</p>
          <p>Sign In</p>
        </div>
        <div className="cart"><p>a</p></div>
      </div>

    </nav>
  )
}
