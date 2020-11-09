import React from 'react';
import axios from 'axios';
import unsplash from 'unsplash-js';

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

export default () => {
  const [jokes, setJokes] = React.useState([]);
  const [pics, setPics] = React.useState([]);
  const [hoverRefresh, setHoverRefresh] = React.useState(false);
  const [intervalRef, setIntervalRef] = React.useState(null);  

  React.useEffect(() => {
    toggleInterval();
    fetchData();
    
    window.onkeydown = (e) => {
      if(e.key === 'ArrowRight') {
        clickNextJoke();
      }
    };
  })

  const fetchData = async () => {
    if (jokes.length < MAX_DATA_COUNT) {
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
          
      setJokes((prev) => {        
        const newJokeData = [...prev];
        newJokeData.push(jokeText);

        return newJokeData;
      });

      setPics((prev) => {
        const newPicsData = [...prev];
        newPicsData.push(imgRes);

        return newPicsData;
      });
    }
  }

  const toggleInterval = () => {
    if(intervalRef === null) {
      setIntervalRef(window.setInterval(fetchData, INTERVAL_MS));
    }
    else {
      window.clearInterval(intervalRef);
    }
  }  

  const toggleHover = () => {
    setHoverRefresh((prev) => !prev);
  }

  const clickNextJoke = () => {
      setJokes((prev) => {
        let newJokesData = [...prev];
        newJokesData.shift();

        return newJokesData;
      });

      setPics((prev) => {
        let newPicsData = [...prev];
        newPicsData.shift();

        return newPicsData;
      });
  }

  const getTextColour = (hex) => {
    var nums = hex.substring(1);
    var rgb = parseInt(nums, 16);
    var r = (rgb >> 16) & 0xff;
    var g = (rgb >> 8) & 0xff;
    var b = (rgb >> 0) & 0xff;

    var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

    if (luma < 60) {
      return "#ffffff";
    }

    return hex;
  }

  const pic = pics[0] || {};
  const textColor = getTextColour(pic.color || "#ffffff");
  const bgndColor = "#222222";
  
  const user = pic.user || "";    

  const artistName = user.name || "";
  const twitterUsername = user.twitter_username || "";
  const instagramUsername = user.instagram_username || "";

  const links = (user && user.links) || "";
  const unsplashLink = links.html || "";
  
  const urls = pic.urls || "";
  const imgRef = urls.regular || "";
  
  const joke = jokes[0] || "";
  
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
      hover={hoverRefresh}
      toggleHover={toggleHover}
      onClick={clickNextJoke}
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