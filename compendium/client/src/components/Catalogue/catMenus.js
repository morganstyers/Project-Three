import React from 'react';
import {Card} from 'reactstrap';
import MinCat from '../Card/mincat';
import CoinCat from '../Card/coincat';
import './style.css'
// Full blog theme demo and download available at http://thomasvaeth.com/trophy/
var Tabs = (function() {
  var s;

  return {
    settings: {
      tabs: document.getElementsByClassName('tabs__item'),
      tab: document.getElementsByClassName('tab')
    },

    init: function() {
      s = this.settings;
      this.display();
      this.click();
    },

    display: function() {
      if (s.tab.length) {
        [].forEach.call(s.tab, function(tab) {
          tab.style.display = 'none';
        });
        s.tab[0].style.display = 'block';
        s.tab[0].classList.add('active');
        s.tabs[0].classList.add('active');
      }
    },

    click: function() {
      if (s.tabs.length) {
        var currentIdx = 0,
            prevIdx = currentIdx;

        [].forEach.call(s.tabs, function(tab, idx) {
          tab.addEventListener('click', function() {
            prevIdx = currentIdx;
            currentIdx = idx;

            if (prevIdx !== currentIdx) {
              s.tab[prevIdx].style.display = 'none';
              s.tab[prevIdx].classList.remove('active');
              s.tabs[prevIdx].classList.remove('active');
              s.tab[currentIdx].style.display = 'block';
              s.tab[currentIdx].classList.add('active');
              s.tabs[currentIdx].classList.add('active');
            }
          });
        });
      }
    }

  }
})();

var Preview = (function() {
  var s;

  return {
    settings: {
      img: document.getElementsByClassName('preview__img'),
      post: document.getElementsByClassName('preview')
    },

    init: function() {
      s = this.settings;
      this.display();
      this.mouseenter();
    },

    display: function() {
      if (s.img.length) {
        [].forEach.call(s.img, function(img) {
          img.style.display = 'none';
        });
        s.img[0].style.display = 'block';
      }
    },

    mouseenter: function() {
      if (s.post.length) {
        var currentIdx = 0,
            prevIdx = currentIdx;

        [].forEach.call(s.post, function(preview, idx) {
          preview.addEventListener('mouseenter', function() {
            prevIdx = currentIdx;
            currentIdx = idx;

            if (prevIdx !== currentIdx) {
              s.img[prevIdx].style.display = 'none';
              s.img[currentIdx].style.display = 'block';
            }
          });
        });
      }
    }
  }
})();

document.addEventListener('DOMContentLoaded', function() {
  Tabs.init();
  Preview.init();
});

class CatMenu extends React.Component {
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
<h1>Your Compendium</h1>
           <div className="controls">
             <button id="button_one" onClick={this.handleClick}>Minerals</button>
             <button id="button_two" onClick={this.handleClick}>Coins</button>
             <button id="button_three" onClick={this.handleClick}>Render Div Three</button>
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


export default CatMenu;

