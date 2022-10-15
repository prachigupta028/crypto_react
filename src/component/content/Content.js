import React from 'react'
import './style.css'
import { motion } from 'framer-motion';
import AppleIcon from '@mui/icons-material/Apple';

const Content = () => {
  return (
    <div><h1 className='heading' style={{marginTop:"15vw"}}>
        The World's Fastest Growing<br/><span style={{marginLeft:"15vw"}}>Crypto App</span>
    </h1>
    <div>
        <ul className='contents'>
          <li>Join<span> 50m+</span> users buying and selling <span>250+ cryptocurrencies at true cost</span></li>
            <li>Spend with the Crypto.com Visa Card and <span>get up to 5%</span> back</li>
            <li>Grow your portfolio by<span>receiving rewards up to 14.5%</span>  on your crypto assets</li>
        </ul>
        <div className='space'>
        <div className='app'>
        <a href="https://apps.apple.com/us/app/id1262148500">
            <div className='download'>
                Download on the<br/>
                <AppleIcon /><span>App Store</span>
                
            </div>
            </a>
            <a href="https://apps.apple.com/us/app/id1262148500">
            <div className='download'>
                GET IT ON<br/>
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQuMzk1NTggMjEuMjczNUwxMy43MzMyIDExLjY3OTJMNC40MDM0MSAyLjEwMjA1QzQuMTU0MjEgMi4yNTExNiA0IDIuNTk2MzkgNCAzLjA0ODNWMjAuMzM2NUM0LjAwMzM0IDIwLjc4ODQgNC4xNTE5OCAyMS4xMDg0IDQuMzk1NTggMjEuMjczNVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xNC4wNjc2IDExLjQxNDNMMTYuODQ5IDguNTU2MDRMNS41MjIzIDIuMTc0MzRDNS4zMzE1OCAyLjA2MDQ3IDUuMTE0OTMgMi4wMDAzMyA0Ljg5NDI5IDJMMTQuMDY2NSAxMS40MTMxTDE0LjA2NzYgMTEuNDE0M1oiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xNC4wNjczIDExLjk0NTNMNC44NjYwOSAyMS4zOTk3QzUuMDk3MDMgMjEuNDAzNyA1LjMyNDUxIDIxLjM0MTcgNS41MjMxNiAyMS4yMjA4TDE2Ljg3MjIgMTQuODIxOUwxNC4wNjczIDExLjk0NTNaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMjAuOTUyMyAxMC44NzE4TDE3LjE4MzEgOC43NDQxNEwxNC4zMjU3IDExLjY4MDRMMTcuMjA0MyAxNC42MzQ5TDIwLjk1MTIgMTIuNTEzMUMyMS43NDc5IDEyLjA2MjMgMjEuNzQ3OSAxMS4zMjAyIDIwLjk1MjMgMTAuODcxOEgyMC45NTIzWiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="/>
                <span>Google Play</span>
            </div>
            </a>

        </div>
        </div>
    </div>
    <div >
        <motion.img className="phone"
          initial={{ x: -30 , y:-10}}
          animate={{ x: 30,y:10 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 1,
            repeat: Infinity,
          }}

        src="https://crypto.com/static/4a98bd03290e8a209151cc1e56056594/ff3b2/buy-and-sell.png"/>
    </div>
    </div>
  )
}

export default Content