import React from 'react'

export default function Contries({contries, loading}) {
    if(loading){
        return <h2>Loading ....</h2>
     }
  return (
    <ul className='list-group mb-2'> 
    { 
        contries.map((contry) => (
            <li className='list-group-item'>
                 {contry.name.common} 
                 <img src={contry.flags.svg} alt="flag" style={{width: '25px'}} className='ml-2'/> 
            </li>
        ))
    } 

    </ul>
  )
}
