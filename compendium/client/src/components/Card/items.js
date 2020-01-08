import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Rock = props => (
   <tr>
       <td>{props.rock.name}</td>
       <td>{props.rock.quantity}</td>
       <td>{props.rock.condition}</td>
       <td>{props.rock.description}</td>
       <td>{props.rock.image}</td>
    </tr>
)

export default class Rocks extends Component {

    constructor(props) {
        super(props);
        this.state = { rocks: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:3002/rocks')
            .then(response => {
                this.setState({ rocks: response.data });
            })
            .catch(function (err) {
                console.log(err);
            })
    }

    rocksList() {
        return this.state.rocks.map(function(allRocks, i){
            return <Rock rock={allRocks} key={i} />;
        });
    }

    render() {
        return (
            <div>
                <p>
                    { this.rocksList() }
                </p>
            </div>
        )
              
    }
}