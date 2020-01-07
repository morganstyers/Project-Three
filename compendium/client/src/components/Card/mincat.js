import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
function MinCat() {
 
    return (
        <div>
        <Card>
           <Card.Body> 
                <Image src='../images/rocks1.jpg' style={{height:150}} thumbnail />This is some text within a card body.</Card.Body>
        </Card>

        <Card>
           <Card.Body>  <Image src='../images/rocks2.jpg' style={{height:150}} thumbnail />This is some text within a card body.</Card.Body>
        </Card>
        <Card>
           <Card.Body>  <Image src='../images/rocks3.jpg' style={{height:150}} thumbnail />This is some text within a card body.</Card.Body>
        </Card>
        <Card>
           <Card.Body>  <Image src='../images/rocks4.jpg' style={{height:150}} thumbnail />This is some text within a card body.</Card.Body>
        </Card>
        <Card>
           <Card.Body>  <Image src='../images/rocks5.jpg' style={{height:150}} thumbnail />This is some text within a card body.</Card.Body>
        </Card>
        </div>
    )
}
export default MinCat;