import React,{useState} from 'react';
import {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {MdFingerprint} from 'react-icons/md';
import {FaTimes,FaBars, FaSadCry} from 'react-icons/fa'
import {Button} from '../Button'
import './Navbar.css';


export const Navbar=()=>{
    const [click, setClick] = useState(false)
    const [button ,setButton]=useState(true)
    const closeMobileMenu=()=>setClick(false)

    const handleClick=()=>setClick(!click);
    const showButton=()=>{
        if (window.innerWidth<=960){
            setButton(false)
        }else
        setButton(true)
    }
    window.addEventListener('resize',showButton);

    return(
        <>
        <div className='navbar'>
            <div className='navbar-container container'>
                <Link to='/' className='navbar-logo'>
                    <MdFingerprint className='navbar-icon'/>SCAN
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    {click ?<FaTimes className='fa-times'/> : <FaBars className='fa-bars'/>}
                </div>
                <ul className={click? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links'>
                            Home
                        </Link>
                    </li>
                     <li className='nav-item'>
                        <Link to='/services' className='nav-links'>
                            Services
                        </Link>
                    </li>
                     <li className='nav-item'>
                        <Link to='/products' className='nav-links'>
                            Products
                        </Link>
                    </li>
                      <li className='nav-btn'>
                          {button?(
                              <Link to='/sign-up' className='btn-link'>
                                  <Button buttonStyle='btn--outline'>SIGN UP</Button>
                              </Link>
                              ):(
                                  <Link to='/sign-up' className='btn-link'>
                                      <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>
                                          SIGN UP
                                      </Button>
                                  </Link>

                              )
                          }
                        
                    </li>
                    
                </ul>
            </div>
        </div>

        </>

    )
}