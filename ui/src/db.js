import React from 'react'
import axios from "axios"

function db() {
    const data=axios.get("/post")
  return (
    <div>
        <Card style={{ width: '18rem' }} key={data._id}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
         { data.desc}
        </Card.Text>
        <Button variant="primary">Apply</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default db
