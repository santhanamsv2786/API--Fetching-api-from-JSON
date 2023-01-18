import React, { useEffect, useState } from 'react';

import { Col, Container, Row, Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function Moreinfo() {
 
  const [user, setUser] = useState([]);
  
  const {id} = useParams();
  const profile=id;


  const fetchData = () =>{
    fetch(`https://jsonplaceholder.typicode.com/users?id=${profile}`)
    .then(response =>{
      return response.json()
    })
    .then(data =>{
      setUser(data)
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return(
    <div>
      <h1 className='text-center bg-dark text-white'> Worker profile : {id}</h1>
      <Container>
          {user.map(info =>(
            <Container key={id}>
              <Row>
                <Col>
                    <h1 className='text-center bg-info tablet mt-5'>{info.name}</h1>
                    <Table className='tablet'>
                      <tbody>
                        <tr>
                          <td><label>Username:</label></td><td>{info.username}</td>
                        </tr>
                        <tr>
                          <td><label>Email:</label></td><td>{info.email}</td>
                        </tr>
                        <tr>
                          <td><label>Address:</label></td>
                          <td> {info.address.street} <br></br>
                              {info.address.suite} <br></br>
                              {info.address.city} <br></br>
                              {info.address.zipcode}</td>
                        </tr>
                        <tr>
                          <td><label>Phone:</label></td><td>{info.phone}</td>
                        </tr>
                        <tr>
                          <td><label>Website:</label></td><td>{info.website}</td>
                        </tr>
                        <tr>
                          <td><label>Company:</label></td>
                          <td>{info.company.name} <br></br>{info.company.catchPhrase} <br></br> {info.company.bs}</td> 
                        </tr>
                      </tbody>
                    </Table>
                </Col>
              </Row>


            </Container>
          ))}
      </Container>
    </div>
  )
}

export default Moreinfo;

