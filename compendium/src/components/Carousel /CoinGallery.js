import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image';

function CoinGallery() {
    return (
        <Carousel>
  <Carousel.Item>
  <Card>
    <Card.Img variant="top" src="../images/2centback.jpg" />
    <Card.Img variant="top" src="../images/2centfront.jpg" />

    <Card.Body>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  </Carousel.Item>

  <Carousel.Item>
  <Card>
  <Card.Img variant="top" src="../images/20centback.jpg" />
    <Card.Img variant="top" src="../images/20centfront.jpg" />
    <Card.Body>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  </Carousel.Item>
  <Carousel.Item>
  <Card>
  <Card.Img variant="top" src="../images/1767back.jpg" />
    <Card.Img variant="top" src="../images/1767front.jpg" />
    <Card.Body>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  </Carousel.Item>

  <Carousel.Item>
  <Card>
  <Card.Img variant="top" src="../images/1867back.jpg" />
    <Card.Img variant="top" src="../images/1867front.jpg" />

    <Card.Body>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
</Carousel.Item>
</Carousel>
    )
}

export default CoinGallery;