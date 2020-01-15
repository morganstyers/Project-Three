import React from 'react';
import {Card} from 'reactstrap';
import MinCat from '../Card/mincat';
import CoinCat from '../Card/coincat';

class Catalogue extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        button_one: false,
        button_two: false,
        button_three: false
      }
      this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(e) {
  //     Setting state and a callback function   
        if (e.target.id === "button_one") {
          this.setState({button_one: true})
          this.setState({button_two: false})
          this.setState({button_three: false})
        }
        if (e.target.id === "button_two") {
          this.setState({button_one: false})
          this.setState({button_two: true})
          this.setState({button_three: false})
        }
        if (e.target.id === "button_three") {
          this.setState({button_one: false})
          this.setState({button_two: false})
          this.setState({button_three: true})
        }
      }
  
    
    
     render() {
       return(
         <div id="react-application">

           <div className="controls">
             <button id="button_one" onClick={this.handleClick}>Minerals</button>
             <button id="button_two" onClick={this.handleClick}>Coins</button>
             <button id="button_three" onClick={this.handleClick}>Rocks</button>
           </div>
           <div className="conditional-render-section">
           {
            this.state.button_one 
               ? 
            (<div id="div-one">
                <div className="img-wrapper"><Card> <MinCat/>  </Card>
             </div>
              </div>) 
               :
            (<div></div>)
           }
           {
            this.state.button_two
               ? 
            (<div id="div-two">
              <div className="img-wrapper">
              <Card> <CoinCat/>  </Card>          </div>
              </div>) 
               :
            (<div></div>)
           }
           {
            this.state.button_three 
               ? 
            (<div id="div-three">
              <div className="img-wrapper">
<h1>who knows</h1>              </div>
                <p>credit: unsplash.com - Thank you @mrrrk_smith </p>
              </div>) 
               :
            (<div></div>)
           }
           </div>
         </div>
       )
     }
  }


export default Catalogue;

