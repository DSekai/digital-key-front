import './layout.css'
import Logo from '../../../../assets/icons/logo'
import { DropDown } from '../../../../assets/icons/DropDown'
import { Cart } from '../../../../assets/icons/Cart'
import { ArrowRight, ArrowRightV2 } from '../../../../assets/icons/ArrowRight'
import { Category } from './Category'

export const Navbar = () => {
  return (
    <nav className='navbar'>

      <div className="main">
        <a className="menu-logo" aria-label='logo' href='https://sekaidev.netlify.app'>
          <Logo height="100%" width={"100%"} />
        </a>
        <div className="options">
          <div>
            <p>Store</p>
            <DropDown width={"1rem"} />
            <span className='menu-triangle active'></span>
            <div className="sub-menu">
              <div className="selection top">
                <div className="container">
                  <p>Best Games</p>
                  <div>
                    <ArrowRight className='arrow-simple' />
                    <ArrowRightV2 className='arrow-double' />
                  </div>
                  <Category title='Best Games The all times' />
                </div>
              </div>
              <div className="selection">
                <div className="container">
                  <p>otro ma</p>
                  <div>
                    <ArrowRight className='arrow-simple' />
                    <ArrowRightV2 className='arrow-double' />
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div>
            <p>About</p>
            <DropDown width={"1rem"} />
            <span className='menu-triangle'></span>
            <div className="sub-menu"></div>
          </div>
          <div>
            <p>Community</p>
            <DropDown width={"1rem"} />
            <span className='menu-triangle'></span>
            <div className="sub-menu"></div>
          </div>
          <div className="">
            <p>Support</p>
            <DropDown width={"1rem"} />
            <span className='menu-triangle'></span>
            <div className="sub-menu"></div>
          </div>
          <p>Sign In</p>
        </div>
        <a className="cart" aria-label='Cart' href='#'>
          <Cart />
          <span>0</span>
        </a>
      </div>

    </nav>
  )
}
