import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Detail() {
 
   const [users, setUsers] = useState([])
   
   const fetchData = () =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>{
        return response.json()
    })
    .then(data =>{
        setUsers(data)
    })
   }

   useEffect(() =>{
    fetchData()
   }, [])
   
   return(
    <div>
        <h1 className='text-center bg-dark text-white'>Workers Profile</h1>
        <Container >
            <Row className='rr'>
                {users.map((detail,id) => (
                    <Col lg='4' className='me-2 ms-4 mt-5 bg-info  box' key={id}>
                        <div className='ms-4'>
                        <label className='mt-3'>Name:</label><span>{detail.name}</span>
                       <br></br>
                       <label>Email-id:</label><span>{detail.email}</span>
                       <br></br>
                       <label>City:</label><span>{detail.address.city}</span>
                       <br></br>
                       
                       
                       <Button  className='mb-4 di'><Link to={`Moreinfo/${detail.id}`}>For MoreInfo</Link></Button> 
                       </div>
                       
                    </Col>
                )
                )}
            </Row>
        </Container>
    </div>
   )

}

export default Detail;
