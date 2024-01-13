import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import AvailCard from './AvailCard';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ViewDoc.css'
import ListGroup from 'react-bootstrap/ListGroup';

function ViewDoc() {

  const [docDetails,setdocDetails]=useState({}) 

   //useParams - used to get path parameter from the url
  // const paraid = useParams()
  // console.log(paraid.id);//object

  //destructure
  const {id} =useParams()
  console.log(id);

    //API call to get details of particular doctor using the path parametrs
  const  base_url='https://restaurant-backend-nw9h.onrender.com/doctors'
  const fetchDoc=async()=>{
    const result = await axios.get(`${base_url}/${id}`)
    console.log(result.data);
    setdocDetails(result.data)
  }
  console.log(docDetails);
  useEffect(()=>{
    fetchDoc()
  },[])
  return (
    <div className='view'>
      <Row>
        <Col>
       <img src="https://static.vecteezy.com/system/resources/previews/002/896/807/non_2x/female-doctor-using-her-digital-tablet-free-vector.jpg" alt="" style={{width:"350px",height:"350px",margin:"30px"}} />
        </Col>
        <Col style={{margin:"20px",marginRight:"60px"}} >
       <h2 style={{marginLeft:"100px"}}>{docDetails.name}</h2>
       <Card style={{ width: '40rem',padding:"30px"}}>
      
      <ListGroup variant="flush">
        <ListGroup.Item> <b>Address:</b>{docDetails.address}</ListGroup.Item> 
        <ListGroup.Item> <b>Email:</b>{docDetails.email}</ListGroup.Item> 
        <ListGroup.Item> <b>Phone:</b>{docDetails.phone}</ListGroup.Item> 
        <ListGroup.Item> 
        
        <h6>  Available Days :  {
                            docDetails.available_days?.map(item => (
                              <p className='d-inline'>|{item}|</p>
                            )
                            )
                          }</h6>
                        
                        <h6>Available Hours : {docDetails.available_hours}</h6>  
        </ListGroup.Item> <br />
        <Button style={{alignItems:"center"}} variant="primary ">Book Now</Button>
      </ListGroup>
    </Card>
        </Col>
      </Row>
     <div style={{margin:"20px"}} >
      <h2> Reviews😻</h2>
      <div style={{margin:"20px",display:"flex"}}>
    
      
      
        {
                            docDetails.reviews?.map(item => (
                              <ListGroup style={{ textAlign: 'left', border: 'solid lightblue', margin: '20px' }} >
                                <ListGroup.Item style={{ color: "black" }}> <h5>Name : {item.patient_name}</h5> </ListGroup.Item>
                                <ListGroup.Item style={{ color: "black" }}>{item.comments}</ListGroup.Item>
                                <ListGroup.Item style={{ color: "black" }}>{item.date}</ListGroup.Item>
                                <ListGroup.Item style={{ color: "black" }} >⭐ {item.rating}</ListGroup.Item>


                              </ListGroup>
                               )
                            )
                          }
        
    
    
    </div>
     </div>
    </div>
     
  )
}

export default ViewDoc