import React from 'react'

export default function Pagination({ paginate, contriesPerPage, totalCountries}) {
    const pageNumbers = []

    for(let i = 1; i  <= Math.ceil(totalCountries / contriesPerPage); i++){
        pageNumbers.push(i)
    }
  return (
    <div>
        <ul className='pagination'>
            {
                pageNumbers.map(number =>  (
                    <li className='page-item' key={number}>
                        <a href="!#" onClick={()=> paginate(number)} className='page-link'>
                            {number}
                        </a>    
                    </li>
                ))
            }
        </ul>
    </div>
  )
}
