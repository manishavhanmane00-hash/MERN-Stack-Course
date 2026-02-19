import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const DetailsCard = ( { CardTitle , CardDescription }) => {
  return (
    <div>
      <Card className=''>
              <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRxLuplznyyQ8iGh66ATBFSdEKsGF33yZX8A&s" />
              <Card.Body>
                <Card.Title> {CardTitle} </Card.Title>
                <Card.Text>
                  {CardDescription}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
    </div>
  )
}

export default DetailsCard
