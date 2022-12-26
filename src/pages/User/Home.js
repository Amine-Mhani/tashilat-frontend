import React from 'react'
import axios from 'axios'
import NavbarUser from '../../components/NavbarUser'
import { useNavigate } from 'react-router-dom'

function Home() {

  

  return (
    <>
      <div className="layout-page">
        <NavbarUser/>
        <div className="content-wrapper">
          <div className="container-xxl flex-grow-1 container-p-y">
            Home
          </div>
        </div>
      </div>
      </>
    
  )
}

export default Home