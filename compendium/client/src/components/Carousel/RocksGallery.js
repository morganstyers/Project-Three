import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import Card from 'react-bootstrap/Card'
function RockGallery() {
    return (
        <Carousel>
  <Carousel.Item>
  <Card>
    <Card.Img variant="top" src="../images/rocks1.jpg" />
    <Card.Body>
      <Card.Text>
      This one's pretty cool.
      </Card.Text>
    </Card.Body>
  </Card>
  </Carousel.Item>
  <Carousel.Item>
  <Card>
    <Card.Img variant="top" src="../images/rocks2.jpg" />
    <Card.Body>
      <Card.Text>
        So is this one.
      </Card.Text>
    </Card.Body>
  </Card>
  </Carousel.Item>
  <Carousel.Item>
  <Card>
    <Card.Img variant="top" src="../images/rocks3.jpg" />
    <Card.Body>
      <Card.Text>
        This one too.
      </Card.Text>
    </Card.Body>
  </Card>
  </Carousel.Item>
  <Carousel.Item>
  <Card>
    <Card.Img variant="top" src="../images/rocks4.jpg" />
    <Card.Body>
      <Card.Text>
        Not so cool.
      </Card.Text>
    </Card.Body>
  </Card>
</Carousel.Item>
<Carousel.Item>
  <Card>
    <Card.Img variant="top" src="../images/rocks5.jpg" />
    <Card.Body>
      <Card.Text>
        Meh
      </Card.Text>
    </Card.Body>
  </Card>
</Carousel.Item>
</Carousel>
    )
}
export default RockGallery;