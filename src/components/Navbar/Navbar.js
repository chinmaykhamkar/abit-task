import React from 'react'
import './Navbar.css'
import { FaWallet } from "react-icons/fa";
import { FaBell } from "react-icons/fa6";
import { HiChevronDown } from "react-icons/hi2";


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='brandname'>
        <div className='brand'>
          aBit
        </div>
      </div>
      <div className='space'></div>
      <div className='navinfo'>
        <div className='sharevideo'>
          <button className='share-btn'>Share Video</button>
        </div>
        <div className='wallet'>
          <FaWallet className='wallet-icon' />
        </div>
        <div className='notification'>
          <FaBell className='notification-icon' />
        </div>
        <div className='profilepicc'>
          <div className='circle'>
            <img className='img' src='https://s3-alpha-sig.figma.com/img/fa88/725b/e918233d4da7ccd1a24a48ff69f54227?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FGLyWnTlGCGuydtH6vvOScdkyET4THiymHYdeVzff~xM6cTAPGOEw8CHlmgB4P-yy5gqMOyFb6HQfsPLP-WgYMjQ4tSkDT~YKmAjfNIe3pK-EYUyb9c2mW7XgbvLE-AV1~nGL1amZPaCocRjBNCucSVi-wfsPqGtImufYVpSksmdHtfmNnJXv5LWSiONBX9bOvpQLEoHIL0OHOYNPDuwgKzgs-8pHcDLfuHpjP66J3ffOvbVa5--FQNnE36kn3Oqlp4ohMARpDIIncllMMIYLSWMX89lXmG5MOSDQxwVUUtprZFB4D8nfd2llOu8sdIyP2Jmo-g7tIYNDFAfUvHn7A__'></img>
          </div>
          <div className='dropdown'>
            <HiChevronDown className='dropdown-icon' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar