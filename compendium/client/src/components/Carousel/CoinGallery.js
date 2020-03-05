import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import Card from 'react-bootstrap/Card'
function CoinGallery() {
    return (
        <Carousel>
            <Carousel.Item>
                <Card>
                    <Card.Img variant="top" src="../images/2centfront.jpg" />
                    <Card.Img variant="top" src="../images/2centback.jpg" />
                    <Card.Body>
                        <Card.Text>
                            This one's pretty cool.
      </Card.Text>
                    </Card.Body>
                </Card>
            </Carousel.Item>
            <Carousel.Item>
                <Card>
                    <Card.Img variant="top" src="../images/20centfront.jpg" />
                    <Card.Img variant="top" src="../images/20centback.jpg" />
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
                    <Card.Img variant="top" src="../images/1767front.jpg" />
                    <Card.Img variant="top" src="../images/1767back.jpg" />
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
                    <Card.Img variant="top" src="../images/1867front.jpg" />
                    <Card.Img variant="top" src="../images/1867back.jpg" />       <Card.Body>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
      </Card.Text>
                    </Card.Body>
                </Card>
            </Carousel.Item>
            <Carousel.Item>
                <Card>
                    <Card.Img variant="top" src="../images/halfdollarfront.jpg" />
                    <Card.Img variant="top" src="../images/halfdollarback.jpg" />
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