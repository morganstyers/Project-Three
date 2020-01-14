import React from 'react';
import CatMenu from './catMenus'
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
<nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="/">Compendium</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="/Home">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/Collections">Collections</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/About">About Us</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="/Account">Account <span class="sr-only">(current)</span></a>
                        </li>
                    </ul>
                </div>
            </nav>
            <CatMenu></CatMenu>
            </div>
       )
     }
  }


export default Catalogue;

