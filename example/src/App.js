import React, { Component } from 'react'
import ExampleComponent from 'masspa-layout'
import { Button, ListGroup, Table, Card } from 'react-bootstrap';

export default class App extends Component {
  render() {
    return (
      <ExampleComponent>
      <div
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://static.gamehub.vn/img/files/2019/11/07/gamehubvn-mcu-tai-sao-captain-co-the-danh-ra-sam-set-1.jpg" />
          <Card.Body>
            <Card.Title>Captain America</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
      </ExampleComponent>
    )
  }
}
