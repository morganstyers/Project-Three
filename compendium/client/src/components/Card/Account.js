import React from 'react';
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import WebIcon from '@material-ui/icons/Web';
import { Jumbotron } from 'reactstrap';
import Catalogue from '../Catalogue/Catalogue'


const Account = (props) => {
    return (
        <Row style={{ marginTop: 20 }}>
            <Col sm="4">
                <Card style={{ marginLeft: 120 }} body>
                    <CardTitle> <AccountCircleIcon fontSize='large'></AccountCircleIcon> Hello, User!</CardTitle>
                    <hr/>
                    <CardText>
                        <Jumbotron>
                        <li>Icon</li>
                        <li>First Name, Last Name.</li>
                        <li>Username</li>
                        <li>Address</li>
                        <li>Info</li>
                        <li>edit account info</li>
                        </Jumbotron>
                    </CardText>
                </Card>
            </Col>
            <Col sm="6">
                <Card body>
                    <CardTitle> <WebIcon fontSize='large'></WebIcon>Your Account </CardTitle>
                    <hr />
                    <CardText>This is where collections go, users permissions, social media, e-commerce info etc </CardText>     
                    <Jumbotron>
                        <h5>Your Collections</h5><Catalogue/></Jumbotron>
                  
                </Card>
            </Col>
        </Row>
            );
        };
        
        
export default Account;