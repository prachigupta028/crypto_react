
import React, { useState,useEffect } from 'react'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import './style.css'


const Dashboard = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
        const API=fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then((res) => res.json())
        .then((response)=>{
            console.log(response)
            setData(response)
        })
    })
  return (
    <div style={{color:"white",marginTop:"20vh"}}>
     <input type="text" className='search' placeholder="search"/>
    {data.map((element,id)=>{
        return(
            <div>
            <div className='datas'>
            <div className='bit_coin'>
             <img src={element.image}/>
            <p className='capital'>{element.symbol}-usd</p>
            </div>
            <h3>{element.name}</h3>
            
            
            <button className={element.price_change_percentage_24h<0 ?'buttonRed':'buttonGreen'}>{element.price_change_percentage_24h}</button>
            {element.price_change_percentage_24h>0 ?<TrendingUpIcon className='green'/>:
            <TrendingDownIcon className='red'/>}
            <p className={element.price_change_percentage_24h<0 ?'priceRed':'priceGreen'}>${element.current_price}</p>
            <p className='volume'>Total Volume : ${element.total_volume}</p>
            <p className='volume'>Market Cap : ${element.market_cap}</p>
            </div>
            </div>
        )
    })}
    
    
    </div>
  )
}

export default Dashboard