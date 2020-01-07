import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

function CoinCat() {
    return (
    <div>

        <Card>
        <Card.Body>
            <Image variant="left" src='../images/2centfront.jpg' style={{ width: 250 }} thumbnail />
            <Image variant="left" src='../images/2centback.jpg' style={{ width: 250 }} thumbnail />
           
                <Card.Text>This is some text within a card body.</Card.Text> </Card.Body>
        </Card>

        <Card>
        <Card.Body>
            <Image variant="left" src='../images/20centfront.jpg' style={{ width: 250 }} thumbnail />
            <Image variant="left" src='../images/20centback.jpg' style={{ width: 250 }} thumbnail />
          
                <Card.Text>This is some text within a card body.</Card.Text></Card.Body>
        </Card>

        <Card>
        <Card.Body>
            <Image variant="left" src='../images/1767front.jpg' style={{ width: 250 }} thumbnail /> <br />
            <Image variant="left" src='../images/1767back.jpg' style={{ width: 250 }} thumbnail />
          <Card.Text>This is some text within a card body.</Card.Text></Card.Body>
        </Card>

        <Card>
        <Card.Body>
            <Image variant="left" src='../images/1867front.jpg' style={{ width: 250 }} thumbnail /> <br />
            <Image variant="left" src='../images/1867back.jpg' style={{ width: 250 }} thumbnail />
           <Card.Text>This is some text within a card body.</Card.Text></Card.Body>
        </Card>

        <Card>
        <Card.Body>
            <Image variant="left" src='../images/halfdollarfront.jpg' style={{ width: 250 }} thumbnail /> <br />
            <Image variant="left" src='../images/halfdollarback.jpg' style={{ width: 250 }} thumbnail />
            <Card.Text>This is some text within a card body.</Card.Text></Card.Body>
        </Card>
    </div>
    )
}
export default CoinCat;