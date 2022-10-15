import React from 'react'
import AppleIcon from '@mui/icons-material/Apple';
import Content from '../content/Content';
import './style.css'
//import {Link} from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';

const Header = () => {
  return (
    
         <div className='nav'>
              <div>
                  <img  className="logo" src="https://static.crypto.com/layout/navbar/company-logos/white.svg"/>
              </div>
              <div >
                  <ul className='navbar'>
                        <li><a href='/' className='home'>Home</a></li>
                        <li> Search</li>
                        <li>About Us</li>
                        <li>Our Vision</li>
                        <li><a href='/Dashboard' className='btn'>Dashboard</a></li>
                        <li>Crypto Earn</li>
                        <li> 
                           <a href="https://apps.apple.com/us/app/id1262148500"><AppleIcon className='icon' style={{color:"white"}}/></a>
                        </li>
                        <li>
                          <a href="https://apps.apple.com/us/app/id1262148500"><img className='icon' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQuMzk1NTggMjEuMjczNUwxMy43MzMyIDExLjY3OTJMNC40MDM0MSAyLjEwMjA1QzQuMTU0MjEgMi4yNTExNiA0IDIuNTk2MzkgNCAzLjA0ODNWMjAuMzM2NUM0LjAwMzM0IDIwLjc4ODQgNC4xNTE5OCAyMS4xMDg0IDQuMzk1NTggMjEuMjczNVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xNC4wNjc2IDExLjQxNDNMMTYuODQ5IDguNTU2MDRMNS41MjIzIDIuMTc0MzRDNS4zMzE1OCAyLjA2MDQ3IDUuMTE0OTMgMi4wMDAzMyA0Ljg5NDI5IDJMMTQuMDY2NSAxMS40MTMxTDE0LjA2NzYgMTEuNDE0M1oiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xNC4wNjczIDExLjk0NTNMNC44NjYwOSAyMS4zOTk3QzUuMDk3MDMgMjEuNDAzNyA1LjMyNDUxIDIxLjM0MTcgNS41MjMxNiAyMS4yMjA4TDE2Ljg3MjIgMTQuODIxOUwxNC4wNjczIDExLjk0NTNaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMjAuOTUyMyAxMC44NzE4TDE3LjE4MzEgOC43NDQxNEwxNC4zMjU3IDExLjY4MDRMMTcuMjA0MyAxNC42MzQ5TDIwLjk1MTIgMTIuNTEzMUMyMS43NDc5IDEyLjA2MjMgMjEuNzQ3OSAxMS4zMjAyIDIwLjk1MjMgMTAuODcxOEgyMC45NTIzWiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="/>
                          </a>
                        </li>
                   </ul>
              </div>
        </div>
       
    
  )
}

export default Header