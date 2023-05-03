import React, { useState } from 'react'
import { RiMenu3Line , RiCloseLine} from 'react-icons/ri'
import './navbar.css'
import logo  from '../../assets/logo.svg';
const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
      <p><a href="#wgpt3">What is GPT 3</a></p>
      <p><a href="#possiblily">Open Ai</a></p>
      <p><a href="#features">Case Studies</a></p>
      <p><a href="#blog">Library</a></p>
  </>

)
const Navbar = () => {
  const [toggleMenu,setToggleMenu] = useState(true);
  return (
    <div className='gpt3__navbar'>
    <div className="gpt3__navbar-links">
    <div className="gpt3__navbar-links_logo">
      <img src={logo} alt='logo' />
    </div>
    <div className="gpt3__navbar-links_container">
    <Menu />
    </div>
    <div className="gpt3__navbar-sign">

    <p>Sign in</p>
    <button type='button'> Sign Out</button>


    </div>
    <div className="gpt3__navbar-menu">
      {toggleMenu ? <RiCloseLine color='#fff' onClick={()=>{setToggleMenu(false)}} size={27} />
      :
      <RiMenu3Line  color='#fff' onClick={()=>{setToggleMenu(true)}} size={27}  /> }
      { toggleMenu && 
      (<div className='gpt3__navbar-menu_container scale-up-center'>
      <div className="gpt3__navbar-menu_container-links">
        <Menu />
      </div>
      <div className="gpt3__navbar-menu_container-links-sign">

      <p>Sign in</p>
      <button type='button'> Sign Out</button>


</div>
      
       </div>)
      }
    </div>

    </div>
    
    </div>
  )
}

export default Navbar