import React from 'react'

export default function(props) {
  const boxShadow = props.hover
    ? '0 0 4px 0 #f00'
    : `0 0 4px 0 ${props.backgroundColor}`

  const textColor = props.hover
    ? 'maroon'
    : props.textColor

  const styles = {
    padding: '4px 8px',
    border: 'none',    
    borderRadius: '8px',
    color: textColor,
    backgroundColor: props.backgroundColor + 'cc',
    boxShadow: boxShadow,
  }

  return <button
    style={styles}    
    onClick={props.onClick}    
    onMouseEnter={props.toggleHover}
    onMouseLeave={props.toggleHover}
  >
    next joke
  </button>  
}