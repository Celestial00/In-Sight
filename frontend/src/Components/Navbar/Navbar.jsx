import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (

    <div className='Navbar'>

      <div className='Logo'>

        <h1>In-Sight</h1>
      </div>

      <div className='menu'>

        <div>
          <ul>

            <li><Link > Membership </Link></li>
            <li><Link to='/login'> Sign in </Link></li>
            <li><Link to='/blog'> Blog </Link></li>


          </ul>
        </div>

        <div className='sign-btn'><p>Join Now!</p> </div>

      

      </div>

    


    </div>
  )
}
