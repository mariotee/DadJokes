import React from 'react'

export default function(props) {
  const styles = {
    borderRadius: '8px',
    padding: '8px',    
    position: 'absolute',
    right: '8px',
    bottom: '0',    
    textAlign: 'right',
    fontSize: '12px',
    color: props.textColor,
    backgroundColor: props.backgroundColor + "66",
    boxShadow: `0 0 4px 0 ${props.backgroundColor}`,
  }
  return <div style={styles}>
    Photo By: <a href={props.unsplashLink + '?utm_source=Dad%20Jokes&utm_medium=referral'}>{props.artistName}</a>
    {props.twitterUsername && renderTweeter(props.twitterUsername)}
    {props.instagramUsername && renderInstagramme(props.instagramUsername)}
  </div>
}

const renderTweeter = (username) => {
  return <div>
    Tweeter: <a href={`https://twitter.com/${username}`}>@{username}</a>
  </div>
}

const renderInstagramme = (username) => {
  return <div>
    Instagram: <a href={`https://instagram.com/${username}`}>@{username}</a>
  </div>
}