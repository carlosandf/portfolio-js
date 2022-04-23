import React from 'react';
import twitter from '@images/twitter.png';
import github from '@images/github.png';
import instagram from '@images/instagram.png';



const App = (props) => {

  return (
    <div className="About">
      <div className="card">

        <div className="card_details">
          <div className="card_photo center circle">
            <img src={props.picturelarge} alt={props.namefirst}/>
          </div>
          <p className="card_title">Hi, My name is</p>
          <p className="card_value">{props.namefirst} {props.namelast}</p>
        </div>

        <div className="card_userdata">
          <ul>
            <li>{props.email}</li>
            <li>{props.locationCountry}</li>
          </ul>
        </div>

        <div className="card_social">
          <a href="https://twitter.com/gndx">
            <img src={twitter} />
          </a>
          <a href="https://github.com/gndx">
            <img src={github} />
          </a>
          <a href="https://instagram.com/gndx">
            <img src={instagram} />
          </a>
        </div>

      </div>
    </div>
  )
};

export default App;