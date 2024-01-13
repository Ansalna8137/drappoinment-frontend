import React from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit'
import  './DocCard.css';
import { Link } from 'react-router-dom';

function DocCard({doctors}) {
    console.log(doctors);
  return (

    
    
    <div >
     
    
      <div>
      <Link to={`view/${doctors.id}`} style={{textDecorationLine:"none"}}>
      <MDBCard  className='card'>
      <MDBCardBody>
        <MDBCardTitle> <h3 style={{textAlign:"center"}}><i class="fa-solid fa-user-doctor"></i>   {doctors.name}</h3>
        </MDBCardTitle>
        
        <h4 style={{textAlign:"center"}}>({doctors.specialty})</h4>
        <MDBCardText>
         <div style={{  borderRadius:"10px" ,padding:"10px",margin:"5px",backgroundColor:"white"}}>

       <h5 style={{textAlign:"center"}}><b>Hospital:</b>  {doctors.hospital}</h5> <br />
      
          
          </div> 
      <h6 style={{textAlign:"center"}}> Rating⭐:  {doctors.rating} <br /></h6>
       <h6 style={{textAlign:"center"}}>Available_hours: {doctors.available_hours}</h6>
        </MDBCardText>
        <MDBBtn style={{marginLeft:"2500px"}}>Preview</MDBBtn>
      </MDBCardBody>
    </MDBCard>
      </Link>
      </div>
    </div>
  )
}

export default DocCard