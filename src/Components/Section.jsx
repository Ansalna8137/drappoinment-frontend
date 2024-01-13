import React, { useEffect,useState } from 'react'
import axios from 'axios'

import {Row,Col} from 'react-bootstrap'
import DocCard from './DocCard'
import './Section.css'
function Section() {
  //API fetching
  const  base_url='https://restaurant-backend-nw9h.onrender.com/doctors'
  //to hold array of data
  const [SectionData,setSectionData] = useState([])

  const fetchdata=async()=>{
    const result = await axios.get(base_url)
    console.log(result.data);
    setSectionData(result.data)
  }
  console.log(SectionData);


  useEffect(()=>{
    fetchdata()
  },[])
  return (
    <div className='doc'>
      
     
      
     <Row>
      <h2 style={{margin:"20px",textAlign:"center"}}>Doctors List🩺</h2>
      {
        SectionData.map(item=>(
          <Col sm={12} md={6} lg={5} xl={4}>
          <DocCard doctors={item}/>
          </Col>
        ))
      }
     </Row>
    </div>
  )
}

export default Section