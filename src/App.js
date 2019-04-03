import React from 'react';
import axios from 'axios';
import unsplash from 'unsplash-js';
import invert from 'invert-color';

import dictionary from 'dictionary.js';
import {API_KEY} from 'secrets.js'

import JokeContent from 'components/JokeContent.js';
import RefreshJoke from 'components/RefreshJoke.js';
import Attribution from 'components/Attribution.js';

const INTERVAL_MS = 3000;
const MAX_DATA_COUNT = 3;

const imageapi = new unsplash({
  applicationId: API_KEY,
  callbackUrl: '',
});

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      jokes: [],
      pics: [],
      hoverRefreshButton: false,
    }

    this.intervalRef = null;
  }

  componentDidMount() {
    this.toggleInterval();
    this.fetchData();
    window.onkeydown = (e) => {
      if(e.key === 'ArrowRight') {
        this.clickNextJoke();
      }
    };
  }

  fetchData = async () => {
    if (this.state.jokes.length < MAX_DATA_COUNT) {
      let res = await axios.get('https://icanhazdadjoke.com', {
        headers: {
          'Accept': 'application/json'
        }
      });
  
      const jokeText = String(res.data.joke);
      const splitText = jokeText.toLowerCase().replace(/[-.,!;:{}()?&"]/g,'').split(' ');
      let search = '';
      
      for (const word of splitText) {
        if(!dictionary.includes(word)) {
          search = search + word + ' ';
        }
      }
      
      let imgRes = await imageapi.search.photos(search,1);
      if (imgRes.status === 200) {
        imgRes = await imgRes.json();
        imgRes = imgRes.results[0];
      }
      else {
        imgRes = {
          urls: {
            regular: 'https://images.unsplash.com/photo-1504151932400-72d4384f04b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9'
          },
          links: {
            html: 'https://unsplash.com/photos/EQlTyDZRx7U'
          },
          user: {
            name: 'Picsea',
            links: {
              html: 'https://unsplash.com/@picsea'
            }
          }
        }
      }
          
      this.setState((prevState) => {
        const newJokeData = prevState.jokes;
        newJokeData.push(jokeText);
        const newPicsData = prevState.pics;
        newPicsData.push(imgRes);
        return ({
          jokes: newJokeData,
          pics: newPicsData,
        });
      });
    }
  }

  toggleInterval = () => {
    if(this.intervalRef === null) {
      this.intervalRef = window.setInterval(this.fetchData, INTERVAL_MS);
    }
    else {
      window.clearInterval(this.intervalRef);
    }
  }  

  toggleHover = () => {
    this.setState((prevState) => {
      return ({
        hoverRefreshButton: !prevState.hoverRefreshButton
      });
    });
  }

  clickNextJoke = () => {
    this.setState((prevState) => {
      let newJokesData = prevState.jokes;
      newJokesData.shift();
      let newPicsData = prevState.pics;
      newPicsData.shift();
      return ({
        jokes: newJokesData,
        pics: newPicsData,
      })
    });
  }

  render() {    
    const {jokes, pics, hoverRefreshButton: hovering} = this.state;

    const pic = pics[0] || {};
    const joke = jokes[0] || "";
    const textColor = pic.color || '#ffffff';
    const bgndColor = invert(textColor);
    const links = (pic.user && pic.user.links) || "";
    const unsplashLink = links.html || "";
    const urls = pic.urls || "";
    const imgRef = urls.regular || "";
    const user = pic.user || "";    
    const artistName = user.name || "";
    const twitterUsername = user.twitter_username || "";
    const instagramUsername = user.instagram_username || "";
    
    return <div
      style={{
        height: '100%',
        textAlign: 'center',
        padding: '128px 32px',
        backgroundImage: `url(${imgRef})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',      
      }}
    >
      <JokeContent
        backgroundColor={bgndColor}
        textColor={textColor}
        text={joke}
      />
      <RefreshJoke
        backgroundColor={bgndColor}
        textColor={textColor}
        hover={hovering}
        toggleHover={this.toggleHover}
        onClick={this.clickNextJoke}
      />
      <Attribution
        backgroundColor={bgndColor}
        textColor={textColor}
        artistName={artistName}
        unsplashLink={unsplashLink}
        twitterUsername={twitterUsername}        
        instagramUsername={instagramUsername}
      />
    </div>
  }
}