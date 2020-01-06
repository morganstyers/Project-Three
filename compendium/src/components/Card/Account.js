import React from 'react';
import { Card } from 'reactstrap';
function Account() {
    return (
        <span>
        <Card style={{width: 300, marginLeft: 150, marginTop: 20 }} color="default">
        AAAAAAAAAAAAAAAAAAAAAAAA
        <hr/>
        this will be mock account information, set profile pictures,
    password, email, address, eventually card and shipping info as well as social media
    <hr/>
        </Card>
            <Card style={{ marginRight: 20, marginLeft: 20, width: 500, marginTop: 20 }} color="default">
            AAAAAAAAAAAAAAAAAAAAAAAA
            <hr/>
            this will be general information about your account and how to do things 
            <hr/>
            </Card>
            </span>
    )
}

export default Account;