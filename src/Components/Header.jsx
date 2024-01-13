import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
  import './Header.css'; 
function Header() {
  return (
    <div><MDBNavbar light bgColor='primary'>
    <MDBContainer fluid>
      <MDBNavbarBrand href='#'>
        
    <h2 className='head' ><i class="fa-solid fa-house-chimney-medical"></i>Doctor Schedule</h2>
    <img  src="https://media.istockphoto.com/id/455237505/photo/doctor-holding-heart.jpg?s=612x612&w=0&k=20&c=Cnb5Loe7gAB49NX6lerlWgQZQYJYO2DZz_xrtX5czck=" alt="" />
      </MDBNavbarBrand>
    </MDBContainer>
  </MDBNavbar></div>
  )
}

export default Header