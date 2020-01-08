import React from 'react';
import { Card } from 'reactstrap';

function Bio() {
    return (
            <Card style={{ width: 700, marginLeft: 350, marginTop: 20 }} color="default">
                <hr />
                <p>Morgan Styers - cat lover, free thinker, lover of all things art.</p>
                <p>Rachel Doran - also a cat lover, vegetarian, music enthusiast</p>
                <p>Brian Yeager - down to earth dude, dog lover, sagittarius</p>

                <hr/>
        </Card>
    );
};
export default Bio;