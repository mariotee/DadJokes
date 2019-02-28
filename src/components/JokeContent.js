import React from 'react'

export default function(props) {
  return <p style={{
    borderRadius: '8px',
    padding: '8px',
    fontSize: '24px',
    color: props.textColor,
    backgroundColor: props.backgroundColor + "99",
    boxShadow: `0 0 4px 0 ${props.backgroundColor}`,
  }}>
    {props.text}
  </p>
}